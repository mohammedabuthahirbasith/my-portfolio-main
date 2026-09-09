import { motion, useInView } from "framer-motion";
import { Code, Database, Layout, Settings } from "lucide-react";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="text-purple-400" />,
      skills: [
        { name: "Java", level: 88 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "Python", level: 78 },
        { name: "HTML5", level: 92 },
        { name: "CSS3", level: 88 },
      ],
    },
    {
      title: "Frontend",
      icon: <Layout className="text-blue-400" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Redux / Context API", level: 85 },
        { name: "React Hooks", level: 87 },
        { name: "Vue.js", level: 78 },
      ],
    },
    {
      title: "Backend",
      icon: <Database className="text-green-400" />,
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "RESTful APIs", level: 88 },
        { name: "Java 8 (Streams & Lambdas)", level: 85 },
        { name: "Hibernate / Spring Cloud", level: 80 },
      ],
    },
    {
      title: "Databases & Cloud",
      icon: <Settings className="text-orange-400" />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "AWS (EC2, S3)", level: 75 },
        { name: "Docker / Jenkins / Nginx", level: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
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
    <section id="skills" className="py-20 relative bg-gradient-to-b from-gray-900 via-purple-900/5 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A rare combination of Java/Spring Boot backend depth and React frontend polish —
            constantly sharpened through real enterprise shipping.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gray-800/60 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-purple-400 font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-800/60 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="h-full rounded-full relative"
                        style={{
                          background: `linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)`
                        }}
                      >
                        <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full shadow-lg transform translate-x-1/2 -translate-y-1/4" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Full Tech Stack</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React.js", "Spring Boot", "Java", "JavaScript (ES6+)",
              "Python", "Vue.js", "Redux", "React Hooks",
              "Hibernate", "Spring Cloud", "RESTful APIs",
              "PostgreSQL", "MySQL", "AWS EC2", "AWS S3",
              "Docker", "Jenkins", "Nginx", "Git", "GitHub",
              "HTML5", "CSS3"
            ].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gray-800/60 rounded-xl border border-purple-500/20 text-gray-300 hover:text-white hover:border-purple-500/50 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
