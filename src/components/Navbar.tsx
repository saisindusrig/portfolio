import { useEffect, useState, useRef } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  

  const isClickingRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        
        if (isClickingRef.current) return;

        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0.25 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    isClickingRef.current = true;

   
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    
    timeoutRef.current = window.setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  return (
    <nav className="glass-navbar z-50 max-w-[95vw]">
      <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
        

        {/* NAVIGATION */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleNavClick(id)}
              className={activeSection === id ? "glass-nav-active shrink-0" : "glass-nav-inactive shrink-0"}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;