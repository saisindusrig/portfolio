import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import App from '../src/App';
import { profile } from '../src/data/portfolio';
import { projects } from '../src/data/projects';

const projectArticle = (title: string) => screen.getByRole('heading', { name: title, level: 3 }).closest('article')!;

describe('portfolio navigation', () => {
  it('provides real section destinations and all content in a scrolling document', () => {
    render(<App />);
    const navigation = screen.getByRole('navigation', { name: 'Main navigation' });
    for (const link of within(navigation).getAllByRole('link')) {
      const destination = document.querySelector(link.getAttribute('href')!);
      expect(destination).toBeInTheDocument();
      expect(destination).toHaveAttribute('aria-labelledby');
    }
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main');
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(profile.surname);
    expect(screen.getByRole('heading', { name: 'Digital Specialist Engineer' })).toBeInTheDocument();
    for (const project of projects) {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
    }
  });

  it('opens and closes project notes independently', async () => {
    render(<App />);
    const user = userEvent.setup();
    const disclosures = screen.getAllByText('Project details');
    await user.click(disclosures[0]);
    expect(disclosures[0].closest('details')).toHaveAttribute('open');
    expect(disclosures[1].closest('details')).not.toHaveAttribute('open');
    await user.click(disclosures[1]);
    expect(disclosures[1].closest('details')).toHaveAttribute('open');
    await user.click(disclosures[0]);
    expect(disclosures[0].closest('details')).not.toHaveAttribute('open');
  });

  it('shows the supplied Warrant screenshot and live destination', () => {
    render(<App />);
    const warrant = projectArticle('Warrant');
    expect(within(warrant).getByRole('img')).toHaveAttribute('alt', 'Warrant research board showing relationships between claims and evidence');
    expect(within(warrant).getByRole('link', { name: /Live project/ })).toHaveAttribute('href', 'https://warrant-research-board.vercel.app/');
    expect(screen.getByText('Used by more than 50 real users.')).toBeInTheDocument();
  });

  it('preserves the live project and source destinations', () => {
    render(<App />);
    for (const project of projects) {
      const article = projectArticle(project.title);
      expect(within(article).getByRole('link', { name: /Live project/ })).toHaveAttribute('href', project.liveUrl);
      expect(within(article).getByRole('link', { name: /Source code/ })).toHaveAttribute('href', project.githubUrl);
    }
    expect(screen.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute('href', profile.linkedin);
    expect(screen.getByRole('link', { name: /GitHub/ })).toHaveAttribute('href', profile.github);
    expect(document.querySelector('a[href="mailto:"]')).toBeNull();
    expect(screen.queryByRole('link', { name: /résumé/ })).not.toBeInTheDocument();
  });
});

function mockPageLayout() {
  let scroll = 0;
  let headerHeight = 72;
  vi.spyOn(window, 'scrollY', 'get').mockImplementation(() => scroll);
  vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(1000);
  vi.spyOn(document.documentElement, 'scrollHeight', 'get').mockReturnValue(4000);
  const bounds: Record<string, [number, number]> = {
    projects: [600, 2200], about: [2200, 2800], experience: [2800, 3500], contact: [3500, 3950],
  };
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function (this: Element) {
    const [start, end] = this.classList.contains('site-header')
      ? [scroll, scroll + headerHeight]
      : bounds[this.id] ?? [0, 0];
    return { top: start - scroll, bottom: end - scroll, height: end - start, left: 0, right: 1000, width: 1000, x: 0, y: start - scroll, toJSON: () => ({}) };
  });
  return {
    scrollTo(value: number) { scroll = value; fireEvent.scroll(window); },
    resizeHeader(value: number) { headerHeight = value; fireEvent.resize(window); },
  };
}

function expectSelection(name?: string) {
  const links = within(screen.getByRole('navigation')).getAllByRole('link');
  const selected = links.filter(link => link.hasAttribute('aria-current'));
  expect(selected).toHaveLength(name ? 1 : 0);
  if (name) expect(selected[0]).toHaveTextContent(name);
}

describe('navbar scroll selection', () => {
  it('tracks each section in both directions and clears selection in the hero', () => {
    const page = mockPageLayout();
    render(<App />);
    expectSelection();
    page.scrollTo(550);
    expectSelection('Work');
    page.scrollTo(2150);
    expectSelection('About');
    page.scrollTo(2750);
    expectSelection('Experience');
    page.scrollTo(2150);
    expectSelection('About');
    page.scrollTo(550);
    expectSelection('Work');
    page.scrollTo(0);
    expectSelection();
  });

  it('selects Contact at the page bottom even when its heading cannot reach the header', () => {
    const page = mockPageLayout();
    page.scrollTo(3000);
    render(<App />);
    expect(document.getElementById('contact')!.getBoundingClientRect().top).toBe(500);
    expectSelection('Contact');
    page.scrollTo(2850);
    expectSelection('Experience');
    page.scrollTo(3000);
    expectSelection('Contact');
  });

  it('adapts the reading line when the sticky header changes height', () => {
    const page = mockPageLayout();
    render(<App />);
    page.scrollTo(2050);
    expectSelection('Work');
    page.resizeHeader(180);
    expectSelection('About');
    page.resizeHeader(72);
    expectSelection('Work');
  });
});
