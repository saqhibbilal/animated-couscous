import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { scrollToSection } from '../utils/smoothScroll';
import { personalInfo, resumeUrl } from '../data/portfolioData';
import GameModal from './GameModal';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    { name: 'Education', href: 'education' },
    { name: 'Skills', href: 'skills' },
    { name: 'Contact', href: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = `${personalInfo.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-primary-900/90 backdrop-blur-md shadow-sm border-b border-primary-200 dark:border-primary-800'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 px-6 sm:px-8 lg:px-12">
            {/* Solve This Button */}
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsGameOpen(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-primary-900 dark:bg-primary-50 text-primary-50 dark:text-primary-900 rounded-2xl transition-all duration-300 font-medium text-sm hover:bg-primary-800 dark:hover:bg-primary-100 shadow-sm hover:shadow-md"
            >
              <span>Solve This</span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-50 transition-all duration-300 font-medium text-sm tracking-wide"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-3 rounded-2xl bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-700 transition-all duration-300"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              {/* Resume Download */}
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleResumeDownload}
                className="flex items-center space-x-2 px-6 py-3 bg-primary-900 dark:bg-primary-50 text-primary-50 dark:text-primary-900 rounded-2xl transition-all duration-300 font-medium text-sm hover:bg-primary-800 dark:hover:bg-primary-100 shadow-sm hover:shadow-md"
              >
                <Download size={16} />
                <span>Resume</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-2xl bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-400"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="md:hidden bg-white/95 dark:bg-primary-900/95 backdrop-blur-md border-t border-primary-200 dark:border-primary-800"
              >
                <div className="px-6 py-6 space-y-4">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-50 transition-all duration-300 font-medium py-3 text-sm tracking-wide"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  
                  <div className="flex items-center justify-between pt-6 border-t border-primary-200 dark:border-primary-800">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={toggleTheme}
                      className="p-3 rounded-2xl bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-400"
                    >
                      {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={handleResumeDownload}
                      className="flex items-center space-x-2 px-6 py-3 bg-primary-900 dark:bg-primary-50 text-primary-50 dark:text-primary-900 rounded-2xl transition-all duration-300 font-medium text-sm"
                    >
                      <Download size={16} />
                      <span>Resume</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Game Modal */}
      <GameModal isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </>
  );
};

export default Navbar; 