import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Close mobile menu first
      setIsOpen(false);
      
      // Wait for mobile menu to close before scrolling
      setTimeout(() => {
        const navHeight = scrolled ? 64 : 80; // Adjusted height based on scroll state
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = window.pageYOffset + elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-2 transition-all duration-300 ${
        scrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-1">
        <div className={`flex items-center justify-between ${scrolled ? "py-2" : "py-3"}`}>
          <motion.a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            href="#hero"
            whileHover={{ scale: 1.1 }}
            className="text-lg sm:text-xl md:text-2xl font-bold gradient-text flex items-center truncate cursor-pointer"
          >
            <span className="text-purple-500">&lt;</span>
            <span className="truncate"></span>
            <span className="text-purple-500">/&gt;</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-purple-400 transition-colors duration-300"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 z-50 text-white hover:text-purple-400 transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-[3.5rem]"
            >
              <div className="flex flex-col gap-4 p-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-4 px-5 text-white hover:text-purple-400 transition-all duration-300 text-lg rounded-xl hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/5 bg-gray-900/90 backdrop-blur-sm"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
