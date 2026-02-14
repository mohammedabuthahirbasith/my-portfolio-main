import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AnimatedCube from "./AnimatedCube";

// Text animation variants
const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

const HeroSection = () => {
  const [text, setText] = useState("Software Developer");
  const fullText = "Software Developer";
  const index = useRef(0);
  
  useEffect(() => {
    setText("");
    const typeText = () => {
      if (index.current < fullText.length) {
        setText(prev => fullText.substring(0, index.current + 1));
        index.current += 1;
      }
    };
    
    const interval = setInterval(typeText, 100);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-[100svh] flex items-center justify-center relative overflow-hidden py-16 sm:py-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8"
      >
        {/* Left Content */}
        <div className="lg:w-3/5 text-center lg:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Mohammed Abuthahir Basith</span>
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 h-8 typing-text"
          >
            {text}<span className="animate-pulse">|</span>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            Software Developer with experience in Vue.js and Node.js. Passionate about creating dynamic, high-performance web applications and contributing to team success.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium flex items-center justify-center gap-2 pulse-glow"
            >
              Explore My Work
            </motion.button>
            
            <motion.a
              href="/Mohammed Abuthahir Basith A - Resume.pdf"
              download="Mohammed Abuthahir Basith A - Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 glass-effect rounded-full text-white font-medium hover:bg-white/10 flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Right Content - 3D Cube */}
        <motion.div
          variants={itemVariants}
          className="lg:w-2/5 flex justify-center items-center mt-8 lg:mt-0"
        >
          <AnimatedCube />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.span
          className="text-sm text-gray-400 mb-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll Down
        </motion.span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-purple-500" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
