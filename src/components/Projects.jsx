import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, Eye, Code, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useRef } from 'react';

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden" style={{backgroundColor: '#100811'}}>
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
      </motion.div>

      <div className="container-custom relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-primary-900 dark:text-primary-50 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-0.5 bg-primary-900 dark:bg-primary-50 mx-auto mb-4"></div>
          <p className="text-base text-primary-600 dark:text-primary-400 max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative rounded-lg overflow-hidden shadow-sm border card-hover" style={{backgroundColor: '#301934', borderColor: '#4B2650'}}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-36 overflow-hidden" style={{background: 'linear-gradient(135deg, #4B2650, #301934)'}}>
                <motion.div
                  variants={imageVariants}
                  className="absolute inset-0 transition-colors duration-500" style={{backgroundColor: '#4B2650'}}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
                
                {/* Overlay with Links */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
                  >
                    <Github size={18} />
                  </motion.a>
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                </div>

                {/* Project Number Badge */}
                <div className="absolute top-2 right-2 w-6 h-6 text-white rounded-lg flex items-center justify-center text-xs font-semibold border" style={{backgroundColor: '#301934', borderColor: '#4B2650'}}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 flex flex-col h-full">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <p className="text-xs text-gray-300 mb-3 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-1.5 py-0.5 text-white text-xs font-medium rounded-md border" style={{backgroundColor: '#4B2650', borderColor: '#301934'}}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons - Uniform Width */}
                <div className="flex space-x-2 mt-auto">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center space-x-1.5 button-secondary"
                  >
                    <Github size={14} />
                    <span className="text-xs">Code</span>
                  </motion.a>
                  
                  {project.liveLink ? (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center space-x-1.5 button-primary"
                    >
                      <Eye size={14} />
                      <span className="text-xs">Live Demo</span>
                    </motion.a>
                  ) : (
                    <div className="flex-1"></div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.a
            href="https://github.com/saqhibbilal"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center space-x-2 px-5 py-2.5 text-white rounded-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md border" style={{backgroundColor: '#301934', borderColor: '#4B2650'}}
          >
            <Github size={16} />
            <span className="text-sm">View All Projects on GitHub</span>
            <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 