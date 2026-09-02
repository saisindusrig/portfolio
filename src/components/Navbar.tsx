const Navbar = () => {
  return (
    <nav className="top-0 z-50 flex items-center justify-center py-6 glass-navbar">
      <div>navbar</div>
  <div className="flex items-center glass-nav-links">
    

    <a href="#about" className="glass-nav-links glass-button">
      about
    </a>

    <a href="#projects" className="">
      projects
    </a>

    <a href="#skills" className="">
      skills
    </a>

    <a href="#contact" className="">
      contact
    </a>
  </div>
</nav>
  )
}

export default Navbar