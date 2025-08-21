import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useRef, useState } from 'react';

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: personalInfo.location,
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-primary-50 dark:bg-primary-950 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '75px 75px'
        }}></div>
      </motion.div>

      <div className="container-custom relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-primary-900 dark:text-primary-50 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-primary-600 dark:text-primary-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to work together? Let's discuss your next project and bring your ideas to life.
          </p>
          <div className="w-16 h-0.5 bg-primary-900 dark:bg-primary-50 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-primary-900 rounded-2xl p-8 shadow-sm border border-primary-200 dark:border-primary-800">
              <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-50 mb-6">
                Let's Connect
              </h3>
              <p className="text-primary-600 dark:text-primary-400 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, exciting projects, and potential collaborations. 
                Feel free to reach out if you'd like to work together or just want to say hello!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-primary-700 dark:text-primary-300">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-50 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-primary-600 dark:text-primary-400">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-primary-900 dark:bg-primary-50 rounded-2xl p-8 text-primary-50 dark:text-primary-900 shadow-sm border border-primary-800 dark:border-primary-200">
              <h3 className="text-xl font-semibold mb-4">Why Work With Me?</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary-300 dark:bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Clean, efficient, and maintainable code</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary-300 dark:bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Responsive and user-friendly designs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary-300 dark:bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Timely delivery and clear communication</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary-300 dark:bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-primary-900 rounded-2xl p-8 shadow-sm border border-primary-200 dark:border-primary-800">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-50">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-primary-50 dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-xl text-primary-900 dark:text-primary-50 placeholder-primary-500 dark:placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-primary-50 dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-xl text-primary-900 dark:text-primary-50 placeholder-primary-500 dark:placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary-50 dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-xl text-primary-900 dark:text-primary-50 placeholder-primary-500 dark:placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-primary-50 dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-xl text-primary-900 dark:text-primary-50 placeholder-primary-500 dark:placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-primary-900 dark:bg-primary-50 text-primary-50 dark:text-primary-900 rounded-2xl font-semibold hover:bg-primary-800 dark:hover:bg-primary-100 transition-all duration-300 shadow-sm hover:shadow-md border border-primary-800 dark:border-primary-200"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                  <ArrowUpRight size={16} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 