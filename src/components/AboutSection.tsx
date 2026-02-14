import { motion, useInView } from "framer-motion";
import { Code, Layers, Lightbulb, UserCircle } from "lucide-react";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const cards = [
    {
      title: "Who I Am",
      description:
        "Software Developer from Erode, Tamil Nadu, with experience in Vue.js and Node.js. Currently working at Vaken Technologies as a Trainee Engineer.",
      icon: UserCircle,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "What I Do",
      description:
        "Develop and improve Sovablu platform using Vue.js, focusing on responsive design and high-performance web applications. Work with Jenkins for CI/CD and AWS services.",
      icon: Code,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "My Approach",
      description:
        "Focus on code quality, team collaboration, and continuous learning. Regularly participate in code reviews and contribute to platform improvements.",
      icon: Lightbulb,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "My Process",
      description:
        "Follow agile development practices, implement efficient CI/CD pipelines, and ensure robust application monitoring and performance.",
      icon: Layers,
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a keen eye for design and a commitment to creating
            meaningful digital experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="glass-effect rounded-2xl p-6 hover:border-purple-500/50 border border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className={`mb-4 w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                <card.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 glass-effect rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I am a Software Developer with a B.E. in Electronics and Communication Engineering from Nandha Engineering College. Currently working at Vaken Technologies as a Trainee Engineer.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I specialize in Vue.js development, working on the Sovablu platform where I focus on creating responsive and high-performance web applications. I have experience with modern development tools and practices including Jenkins for CI/CD and AWS services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I am passionate about creating intuitive user interfaces and robust web applications. My portfolio includes projects built with modern technologies like React, Vue.js, and Node.js, demonstrating my commitment to staying current with industry trends.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { label: "Frontend Development", value: 85 },
                { label: "Backend Development", value: 80 },
                { label: "Database Management", value: 85 },
                { label: "Software Development", value: 85 }
              ].map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.label}</span>
                    <span className="text-purple-400">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.value}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 }}
                      className={`h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
