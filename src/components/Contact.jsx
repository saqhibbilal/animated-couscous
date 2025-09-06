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
    <section id="contact" className="section-padding relative overflow-hidden" style={{backgroundColor: '#100811'}}>
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
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-primary-900 dark:text-primary-50 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base text-primary-600 dark:text-primary-400 mb-4 max-w-3xl mx-auto leading-relaxed">
            Ready to work together? Let's discuss your next project and bring your ideas to life.
          </p>
          <div className="w-12 h-0.5 bg-primary-900 dark:bg-primary-50 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="rounded-xl p-4 shadow-sm border" style={{backgroundColor: '#301934', borderColor: '#4B2650'}}>
              <h3 className="text-lg font-semibold text-white mb-3">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                I'm always open to discussing new opportunities, exciting projects, and potential collaborations. 
                Feel free to reach out if you'd like to work together or just want to say hello!
              </p>
              
              <div className="space-y-2">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{backgroundColor: '#4B2650'}}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-white">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-4 text-white shadow-sm border" style={{backgroundColor: '#4B2650', borderColor: '#301934'}}>
              <h3 className="text-base font-semibold mb-2">Why Work With Me?</h3>
              <ul className="space-y-1.5 text-xs">
                <li className="flex items-start space-x-1.5">
                  <span className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Clean, efficient, and maintainable code</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <span className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Responsive and user-friendly designs</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <span className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Timely delivery and clear communication</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <span className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
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
            <div className="rounded-xl p-6 shadow-sm border" style={{backgroundColor: '#301934', borderColor: '#4B2650'}}>
              <div className="flex items-center mb-4">
                <MessageSquare className="w-5 h-5 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-white mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-sm" style={{backgroundColor: '#4B2650', borderColor: '#301934'}}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-white mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-sm" style={{backgroundColor: '#4B2650', borderColor: '#301934'}}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-white mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-sm" style={{backgroundColor: '#4B2650', borderColor: '#301934'}}
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-white mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-2 py-2.5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none text-sm" style={{backgroundColor: '#4B2650', borderColor: '#301934'}}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 text-white rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md border text-sm" style={{backgroundColor: '#4B2650', borderColor: '#301934'}}
                >
                  <Send size={16} />
                  <span>Send Message</span>
                  <ArrowUpRight size={14} />
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