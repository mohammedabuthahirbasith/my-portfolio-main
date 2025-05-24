import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { useRef } from "react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      role: "Trainee Engineer",
      company: "Vaken Technologies, Trichy",
      duration: "Oct 2024 - Present",
      description: "Actively involved in the development and improvement of Sovablu, utilizing Vue.js to create dynamic, high-performance web applications.",
      responsibilities: [
        "Actively involved in the development and improvement of Sovablu, utilizing Vue.js",
        "Proficient in applying responsive design in Vue.js for compatibility across devices",
        "Skilled in using Jenkins for efficient CI/CD pipelines",
        "Experienced with AWS CodeCommit for efficient version control and collaboration",
        "Leveraged AWS CloudWatch to monitor logs and REST API performance"
      ]
    },
    {
      role: "Intern Trainee",
      company: "Vaken Technologies, Trichy",
      duration: "July 2024 - Sept 2024",
      description: "Gained hands-on experience with Sovablu platform development and testing.",
      responsibilities: [
        "Acquired in-depth knowledge and practical experience with Sovablu platform",
        "Assisted in testing and refining platform features for robust performance",
        "Participated in team discussions and contributed to minor enhancements",
        "Learned software development lifecycle processes and best practices"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
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
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and the experience I've gained along the way.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 last:mb-0"
            >
              <div className="glass-effect rounded-2xl p-8 relative">
                {/* Role and Company */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-purple-400 text-lg">{exp.company}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar size={18} className="text-gray-400 mr-2" />
                    <span className="text-gray-300">{exp.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Briefcase size={18} className="mr-2" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <ChevronRight size={18} className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Timeline connector for all but the last item */}
              {index < experiences.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="h-10 w-0.5 bg-purple-500/30"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
