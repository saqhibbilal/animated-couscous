import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo, socials } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-900 dark:bg-primary-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-primary-50 mb-4">
                {personalInfo.name}
              </h3>
              <p className="text-primary-300 leading-relaxed">
                {personalInfo.about}
              </p>
              <div className="flex items-center space-x-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-primary-800 dark:bg-primary-900 rounded-xl flex items-center justify-center text-primary-300 hover:text-primary-50 hover:bg-primary-700 dark:hover:bg-primary-800 transition-all duration-300 border border-primary-700 dark:border-primary-800"
                  >
                    {social.name === 'LinkedIn' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                    {social.name === 'GitHub' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>}
                    {social.name === 'Medium' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>}
                    {social.name === 'LeetCode' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.049 4.655.5.5 0 0 0 .5.407h1.064a.5.5 0 0 0 .5-.407 3.267 3.267 0 0 1 .651-2.893l3.854-4.126 5.406-5.788A1.374 1.374 0 0 0 13.483 0zm-2.866 12.041a1.374 1.374 0 0 0-.961.438L1.116 18.226l-3.854 4.126a5.266 5.266 0 0 0-1.049 4.655.5.5 0 0 0 .5.407h1.064a.5.5 0 0 0 .5-.407 3.267 3.267 0 0 1 .651-2.893l3.854-4.126 5.406-5.788a1.374 1.374 0 0 0-.961-.438z"/></svg>}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-primary-50 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-primary-300 hover:text-primary-50 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-primary-50 mb-4">
                Contact Info
              </h3>
              <div className="space-y-2">
                <p className="text-primary-300">
                  <span className="font-medium">Email:</span> {personalInfo.email}
                </p>
                <p className="text-primary-300">
                  <span className="font-medium">Location:</span> {personalInfo.location}
                </p>
                <p className="text-primary-300">
                  <span className="font-medium">Available:</span> For opportunities
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-800 dark:border-primary-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-primary-400 text-sm flex items-center"
              >
                © 2024 {personalInfo.name}. Made with{' '}
                <Heart className="w-4 h-4 mx-1 text-red-500" />
                {' '}and lots of coffee.
              </motion.p>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-800 dark:bg-primary-900 text-primary-300 hover:text-primary-50 rounded-xl transition-all duration-300 border border-primary-700 dark:border-primary-800"
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm">Back to Top</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 