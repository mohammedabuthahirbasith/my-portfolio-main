import { useToast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";

// Add LeetCode icon component
const LeetCode = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      // Here you would typically send the data to your backend
      console.log("Form data:", data);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mohammedabuthahir29@gmail.com",
      href: "mailto:mohammedabuthahir29@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7810016907",
      href: "tel:+917810016907",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Erode, Tamil Nadu",
      href: "https://maps.google.com/?q=Erode,Tamil Nadu",
    },
  ];

  const socialLinks = [
    {
      name: "Github",
      icon: Github,
      url: "https://github.com/mohammedabuthahir29",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/mohammedabuthahirbasith786",
    },
    {
      name: "LeetCode",
      icon: LeetCode,
      url: "https://leetcode.com/u/MohammedAbuthahirBasith/",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-[90rem]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 md:mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-[90rem] mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 h-fit w-full"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-8">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm md:text-base font-medium text-gray-300 mb-1 md:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 lg:py-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-base md:text-lg"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-300 mb-1 md:mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 lg:py-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-base md:text-lg"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm md:text-base font-medium text-gray-300 mb-1 md:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 lg:py-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-base md:text-lg"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm md:text-base font-medium text-gray-300 mb-1 md:mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 lg:py-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none text-base md:text-lg"
                  placeholder="I'd like to discuss a project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-6 md:px-8 py-2.5 md:py-3 lg:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 text-base md:text-lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 w-full"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                Contact Information
              </h3>
              <div className="space-y-3 md:space-y-4 lg:space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 lg:gap-6 p-3 md:p-4 lg:p-5 rounded-lg hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <info.icon size={20} className="text-purple-400 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-gray-400 text-sm md:text-base lg:text-lg">{info.label}</h4>
                      <p className="text-white font-medium mt-0.5 text-sm md:text-base lg:text-lg truncate">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Follow Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 w-full"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                Follow Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 md:p-4 lg:p-5 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors group"
                  >
                    <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-700/60 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <social.icon size={16} className="text-gray-300 group-hover:text-purple-400 transition-colors md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    </div>
                    <span className="text-white font-medium text-sm md:text-base lg:text-lg group-hover:text-purple-400 transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
