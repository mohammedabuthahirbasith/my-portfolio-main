import { useToast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";

const LeetCode = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
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

const OWNER_EMAIL = "mohammedabuthahir29@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${OWNER_EMAIL}`;

interface FormState {
  from_name: string;
  reply_to: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.from_name,
          email: form.reply_to,
          _subject: `Portfolio Contact: ${form.subject}`,
          message: form.message,
          // FormSubmit extras — disable captcha, disable auto-reply CC
          _captcha: "false",
          _template: "table",
        }),
      });

      const data = await res.json();

      if (data.success === "true" || data.success === true) {
        toast({
          title: "Message sent! 🎉",
          description: "Thanks for reaching out — I'll get back to you soon.",
        });
        setForm({ from_name: "", reply_to: "", subject: "", message: "" });
      } else {
        throw new Error("Submission rejected");
      }
    } catch {
      toast({
        title: "Failed to send",
        description: `Please email me directly at ${OWNER_EMAIL}`,
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
      value: OWNER_EMAIL,
      href: `mailto:${OWNER_EMAIL}`,
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
      href: "https://maps.google.com/?q=Erode,Tamil+Nadu",
    },
  ];

  const socialLinks = [
    {
      name: "Github",
      icon: Github,
      url: "https://github.com/mohammedabuthahirbasith",
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
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-4 sm:p-6 h-fit w-full"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  required
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-base"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="reply_to"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Email
                </label>
                <input
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  required
                  value={form.reply_to}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-base"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-base"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="I'd like to discuss a project..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none text-base"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 text-base"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* ── Right column ── */}
          <div className="space-y-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 w-full"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                Contact Information
              </h3>
              <div className="space-y-3 md:space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <info.icon size={20} className="text-purple-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-gray-400 text-sm">{info.label}</h4>
                      <p className="text-white font-medium mt-0.5 text-sm md:text-base truncate">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-effect rounded-2xl p-6 lg:p-8 w-full"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0B1121] rounded-xl px-5 py-4 hover:bg-gray-800/80 transition-all duration-300 flex items-center gap-3"
                  >
                    <social.icon className="text-white w-6 h-6 shrink-0" />
                    <span className="text-white text-lg whitespace-nowrap">
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
