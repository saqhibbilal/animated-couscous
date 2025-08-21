import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo, socials } from '../data/portfolioData';
import GameModal from './GameModal';

const Hero = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);

  const floatingElements = [
    { id: 1, x: 10, y: 20, size: 60, delay: 0 },
    { id: 2, x: 80, y: 60, size: 40, delay: 2 },
    { id: 3, x: 20, y: 80, size: 80, delay: 4 },
    { id: 4, x: 70, y: 10, size: 50, delay: 1 },
    { id: 5, x: 90, y: 40, size: 30, delay: 3 },
  ];

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-50 dark:bg-primary-950 pt-16">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/spacy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Light overlay for subtle text enhancement */}
          <div className="absolute inset-0 bg-white/10 dark:bg-black/20"></div>
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)]"></div>

        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-primary-300/20 dark:bg-primary-600/20 rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Main Content */}
        <div className="container-custom relative z-10 px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-left space-y-8"
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg sm:text-xl text-white font-medium tracking-wide drop-shadow-lg"
              >
                Hello, I'm
              </motion.p>

              {/* Name with Apple-style font */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-5xl sm:text-6xl lg:text-7xl text-white drop-shadow-2xl"
                style={{ 
                  fontFamily: "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Segoe UI', 'Roboto', sans-serif",
                  fontWeight: '600',
                  letterSpacing: '-0.04em',
                  fontSmooth: 'always',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  textRendering: 'optimizeLegibility',
                  fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1'
                }}
              >
                {personalInfo.name}
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-xl sm:text-2xl lg:text-3xl text-white font-medium tracking-wide drop-shadow-lg"
              >
                {personalInfo.title}
              </motion.p>


            </motion.div>

            {/* Right Side - Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center lg:items-start space-y-8"
            >
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col gap-4 w-full max-w-sm"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-10 py-4 bg-white text-black rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-100 backdrop-blur-sm"
                >
                  Get Started
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-black rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  View Projects
                </motion.button>
              </motion.div>

              {/* Social Links - Centered with View Projects button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex justify-center items-center space-x-6 w-full max-w-sm"
              >
                {socials.slice(0, 3).map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="p-4 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl text-black hover:text-gray-700 transition-all duration-300 hover:bg-white hover:shadow-lg"
                  >
                    {social.name === 'LinkedIn' && <Linkedin size={24} />}
                    {social.name === 'GitHub' && <Github size={24} />}
                    {social.name === 'Medium' && <ExternalLink size={24} />}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white drop-shadow-lg"
          >
            <span className="text-sm mb-3 font-medium tracking-wide">Scroll Down</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </section>

      {/* Game Modal */}
      <GameModal isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </>
  );
};

export default Hero; 