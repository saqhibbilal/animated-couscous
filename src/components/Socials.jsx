import { motion } from 'framer-motion';
import { Github, Linkedin, BookOpen, Code, ExternalLink } from 'lucide-react';
import { socials } from '../data/portfolioData';

const Socials = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return <Github className="w-6 h-6" />;
      case 'linkedin':
        return <Linkedin className="w-6 h-6" />;
      case 'book-open':
        return <BookOpen className="w-6 h-6" />;
      case 'code':
        return <Code className="w-6 h-6" />;
      default:
        return <ExternalLink className="w-6 h-6" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="socials" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Connect With Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's connect! Follow me on social media to stay updated with my latest projects, 
            blog posts, and professional journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(social.icon)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {social.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {social.name === 'Medium' && 'Read my blog posts'}
                  {social.name === 'GitHub' && 'View my projects'}
                  {social.name === 'LinkedIn' && 'Connect professionally'}
                  {social.name === 'LeetCode' && 'Check my solutions'}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Feel free to reach out for collaborations, questions, or just to say hello!
          </p>
          <a
            href="mailto:saqhibbilal@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Socials; 