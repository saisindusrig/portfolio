# Sai Sindu Sri — Portfolio

A simple editorial portfolio built with React, TypeScript and Vite. A scrolling page presents selected projects, background, skills and contact links. Project notes expand inline using keyboard-accessible buttons, with animated panels and reduced-motion support.

## Typography and styling

- Neue Montreal: locally served regular and medium fonts in `public/fonts`, from the supplied font archive.
- Libre Baskerville: regular and italic headings, loaded through Google Fonts. Georgia is the fallback if Google Fonts is unavailable.
- Plain CSS in `src/index.css`, with responsive layouts and reduced-motion support.

## Development

```sh
npm install
npm run dev
npm run verify
npm run preview
```

`verify` runs lint, component tests and the production build. `preview` serves the production build locally.

## Editing

- `src/App.tsx`: page sections and navigation.
- `src/components/ProjectCard.tsx`: project previews and expandable technical notes.
- `src/data/portfolio.ts`: profile, experience and skills.
- `src/data/projects.ts`: project content, images and links.
- `src/index.css`: layout, colors and typography.

Navigation uses standard section links such as `#projects`, `#about` and `#contact`. Individual projects have anchors such as `#bookd`.

Warrant currently has a text placeholder. Add an image import, `image`, and `imageAlt` to its project record to show the screenshot. Its wider project layout stays in place. Project implementation notes were checked against local repositories; “Next iteration” describes proposed work, not completed features. The 50+ user figure for 3D ShareSpace was supplied by the owner.

Email and résumé links are shown only when `profile.email` and `profile.resumeUrl` are set. LinkedIn and GitHub remain available for contact.
