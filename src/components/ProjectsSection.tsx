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
      title: "Portfolio Website",
      description: "Modern portfolio with interactive 3D elements and animations",
      longDescription: "A modern portfolio website built with React, Three.js, and Framer Motion. Features include interactive 3D elements, smooth animations, particle effects, and a responsive design that works seamlessly across all devices.",
      tech: ["React", "Three.js", "Framer Motion", "TailwindCSS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
      github: "https://github.com/mohammedabuthahir29/portfolio",
      liveLink: "https://mohammedabuthahir.dev",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Real-time weather tracking with interactive visualizations",
      longDescription: "A comprehensive weather dashboard application that provides real-time weather data with interactive charts and maps. Features include 7-day forecasts, temperature trends, precipitation probability, and wind patterns visualization.",
      tech: ["Vue.js", "D3.js", "OpenWeather API", "Node.js", "Express"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      github: "https://github.com/mohammedabuthahir29/weather-dashboard",
      liveLink: "https://weather-dashboard-demo.example.com",
    },
    {
      id: 3,
      title: "Code Pen",
      description: "Online compiler for HTML, CSS, and JavaScript",
      longDescription: "Built a CodePen-like online compiler using React, allowing real-time rendering of HTML, CSS, and JavaScript. Designed for seamless code editing and previewing, fostering a collaborative learning experience.",
      tech: ["React", "HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      github: "https://github.com/mohammedabuthahir29/code-pen",
      liveLink: "https://codepen-clone-demo.example.com",
    },
    {
      id: 4,
      title: "To-Do List",
      description: "Task management app with user-friendly interface",
      longDescription: "Developed a task management app with features to add, mark, and delete tasks. Designed a user-friendly interface with visual feedback for completed tasks to enhance productivity.",
      tech: ["React", "Node.js", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      github: "https://github.com/mohammedabuthahir29/todo-list",
      liveLink: "https://todo-list-demo.example.com",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics and management dashboard for social platforms",
      longDescription: "A comprehensive dashboard for social media management, providing analytics, scheduled posting, audience insights, and performance tracking across multiple platforms.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Social APIs"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
      github: "https://github.com/yourusername/social-dashboard",
      liveLink: "https://social-demo.example.com",
    },
    {
      id: 6,
      title: "Fitness Tracker App",
      description: "Personalized workout and nutrition tracking",
      longDescription: "A fitness application that helps users track workouts, nutrition, set goals, and visualize progress with personalized insights and recommendations.",
      tech: ["React Native", "Firebase", "Redux", "D3.js", "Health APIs"],
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=400&fit=crop",
      github: "https://github.com/yourusername/fitness-app",
      liveLink: "https://fitness-demo.example.com",
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
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion
            for creating exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-600/20 rounded-full text-xs font-medium text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-purple-600/20 rounded-full text-xs font-medium text-purple-300 border border-purple-500/30">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/80" onClick={() => setSelectedProject(null)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="glass-effect rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-300 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  
                  <div className="mt-6 flex flex-wrap gap-2">
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
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div className="flex gap-4">
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                    
                    <a 
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
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
