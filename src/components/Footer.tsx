const Footer = () => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row sm:px-12 lg:px-16">
        
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sindu. All rights reserved.
        </p>

        <a 
          href="#about" 
          className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
        >
          Back to top ↑
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;