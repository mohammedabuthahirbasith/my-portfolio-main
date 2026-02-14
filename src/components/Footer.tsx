import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 relative bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>
        </div>
              
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Mohammed Abuthahir Basith A | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
