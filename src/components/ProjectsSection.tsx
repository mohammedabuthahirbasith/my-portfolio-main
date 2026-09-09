import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useRef, useState } from "react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Full-Stack Billing Application",
      description: "Production-grade invoicing system with role-based auth and RESTful APIs.",
      longDescription:
        "A production-grade invoicing and billing platform featuring role-based authentication, RESTful API integration with Spring Boot, and comprehensive invoice management. The frontend is deployed on Vercel, the backend on Render, and the database is powered by Neon (serverless PostgreSQL). Built for real-world use with scalability and clean architecture at its core.",
      tech: ["React", "Spring Boot", "PostgreSQL", "Vercel", "Render", "Neon DB"],
      image: "/billing-software.svg",
      github: "https://github.com/mohammedabuthahirbasith/billing-software",
      liveLink: "#",
    },
    {
      id: 2,
      title: "CodePen Clone",
      description: "Real-time collaborative code editor with live preview in the browser.",
      longDescription:
        "A fully functional CodePen-inspired code editor built with React. Supports real-time HTML, CSS, and JavaScript editing with instant live preview rendering. Implemented code splitting for optimised bundle performance and a scalable, reusable component architecture. Designed to mirror the collaborative experience of the original platform.",
      tech: ["React", "HTML5", "CSS3", "JavaScript"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      github: "https://github.com/mohammedabuthahir29/code-pen",
      liveLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern developer portfolio with interactive 3D elements and animations.",
      longDescription:
        "This portfolio itself — built from scratch with React, Three.js for the 3D animated cube, and Framer Motion for smooth page transitions and scroll-triggered animations. Written in TypeScript with TailwindCSS for styling. Fully responsive across all devices and browsers, deployed on Netlify with continuous deployment from GitHub.",
      tech: ["React", "Three.js", "Framer Motion", "TailwindCSS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
      github: "https://github.com/mohammedabuthahirbasith/my-portfolio-main",
      liveLink: "https://basith-portfolio-main.netlify.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            A selection of projects I've built — from production-grade enterprise tools to
            developer utilities, all reflecting my commitment to clean code and real-world impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-effect rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative overflow-hidden aspect-video sm:aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-purple-600/20 rounded-full text-xs font-medium text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 sm:px-3 py-1 bg-purple-600/20 rounded-full text-xs font-medium text-purple-300 border border-purple-500/30">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg sm:rounded-xl text-sm sm:text-base text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="absolute inset-0 bg-black/80" onClick={() => setSelectedProject(null)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="glass-effect rounded-3xl p-4 sm:p-6 w-full max-w-4xl my-8 relative z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-300 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4">
                  <div className="relative w-full aspect-video">
                    <img 
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/20 rounded-full text-xs font-medium text-purple-300 border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm sm:text-base">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                    
                    {selectedProject.liveLink && selectedProject.liveLink !== "#" && (
                      <a 
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
