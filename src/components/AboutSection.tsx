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
        "Full Stack Developer from Erode, Tamil Nadu, with 2+ years building production features on enterprise platforms for international clients. B.E. in Electronics & Communication Engineering from Nandha Engineering College (CGPA: 8.6).",
      icon: UserCircle,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "What I Do",
      description:
        "Deliver end-to-end features on enterprise-grade platforms — building RESTful APIs with Java/Spring Boot on the backend and pixel-perfect, cross-browser UIs with React.js and Redux on the frontend. 5+ production features shipped with zero post-deployment defects.",
      icon: Code,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "My Approach",
      description:
        "Treat performance, reliability, and design fidelity as engineering first principles — not afterthoughts. Reduce technical debt proactively, build reusable component libraries, and maintain 95%+ design fidelity across all major browsers.",
      icon: Lightbulb,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "My Process",
      description:
        "Work in Agile sprints, collaborating directly with clients — including Japanese enterprise clients — to translate business goals into clean technical deliverables. Code reviews, CI/CD via Jenkins, and AWS CloudWatch monitoring are part of every cycle.",
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
            A developer who owns the full stack — from Spring Boot APIs to React UIs — with a product ownership mindset and a passion for measurable outcomes.
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
                I started my engineering journey at Nandha Engineering College, graduating with a B.E. in Electronics & Communication Engineering. My path into software came through a deep curiosity for how things work under the hood — and a drive to build things that actually matter.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                From my first days as an intern at Vaken Technologies, I was hands-on with the Sovablu enterprise platform. I grew fast — moving through the ranks from Intern Trainee to Trainee Engineer to Software Developer — each step sharpening my full stack skills across React, Spring Boot, and cloud infrastructure.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, I deliver production features end-to-end with a product ownership mindset: 40% faster load times, 99%+ uptime, and direct collaboration with international clients during Agile sprints. I'm driven by clean architecture, measurable outcomes, and solving problems at scale.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { label: "Frontend Development (React.js)", value: 88 },
                { label: "Backend Development (Spring Boot)", value: 82 },
                { label: "Database Management", value: 83 },
                { label: "Cloud & DevOps (AWS, Docker)", value: 75 }
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
