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
      <div className="container mx-auto px-4 md:px-6">
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
          className="max-w-[90rem] mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 last:mb-0"
            >
              <div className="glass-effect rounded-2xl p-6 md:p-8 lg:p-10">
                {/* Role and Company */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{exp.role}</h3>
                    <p className="text-purple-400 text-lg md:text-xl lg:text-2xl mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar size={20} className="text-gray-400 mr-2" />
                    <span className="text-gray-300 text-base md:text-lg">{exp.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-white font-semibold text-lg md:text-xl mb-4 flex items-center">
                    <Briefcase size={20} className="mr-2" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3 md:space-y-4">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-base md:text-lg">
                        <ChevronRight size={20} className="text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {index < experiences.length - 1 && (
                <div className="flex justify-center my-6 md:my-8">
                  <div className="h-12 w-0.5 bg-purple-500/30"></div>
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
