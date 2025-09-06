import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo, socials } from '../data/portfolioData';
import GameModal from './GameModal';

const Hero = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" style={{backgroundColor: '#100811'}}>
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
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}></div>
        </div>

        {/* Main Content */}
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-left space-y-6"
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-base sm:text-lg text-white font-medium tracking-wide drop-shadow-lg"
              >
                Hello, I'm
              </motion.p>

              {/* Name with Apple-style font */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl text-white drop-shadow-2xl"
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
                className="text-lg sm:text-xl lg:text-2xl text-white font-medium tracking-wide drop-shadow-lg"
              >
                {personalInfo.title}
              </motion.p>


            </motion.div>

            {/* Right Side - Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center lg:items-start space-y-6"
            >
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col gap-3 w-full max-w-xs"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-8 py-3 bg-white text-black rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-100 backdrop-blur-sm"
                >
                  Get Started
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black rounded-xl font-semibold text-base transition-all duration-300 backdrop-blur-sm"
                >
                  View Projects
                </motion.button>
              </motion.div>

              {/* Social Links - Centered with View Projects button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex justify-center items-center space-x-4 w-full max-w-xs"
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
                    className="p-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl text-black hover:text-gray-700 transition-all duration-300 hover:bg-white hover:shadow-lg"
                  >
                    {social.name === 'LinkedIn' && <Linkedin size={20} />}
                    {social.name === 'GitHub' && <Github size={20} />}
                    {social.name === 'Medium' && <ExternalLink size={20} />}
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white drop-shadow-lg"
          >
            <span className="text-xs mb-2 font-medium tracking-wide">Scroll Down</span>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* Game Modal */}
      <GameModal isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </>
  );
};

export default Hero; 