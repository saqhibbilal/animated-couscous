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
    <section id="projects" className="section-padding bg-primary-50 dark:bg-primary-950 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-primary-900 dark:text-primary-50 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-primary-900 dark:bg-primary-50 mx-auto mb-8"></div>
          <p className="text-lg text-primary-600 dark:text-primary-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-white dark:bg-primary-900 rounded-2xl overflow-hidden shadow-sm border border-primary-200 dark:border-primary-800 hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-56 bg-gradient-to-br from-primary-200 to-primary-300 dark:from-primary-700 dark:to-primary-800 overflow-hidden">
                <motion.div
                  variants={imageVariants}
                  className="absolute inset-0 bg-primary-100 dark:bg-primary-800 group-hover:bg-primary-200 dark:group-hover:bg-primary-700 transition-colors duration-500"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-16 h-16 text-primary-600 dark:text-primary-400" />
                  </div>
                </motion.div>
                
                {/* Overlay with Links */}
                <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
                  >
                    <Github size={24} />
                  </motion.a>
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  )}
                </div>

                {/* Project Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-primary-900 dark:bg-primary-50 text-primary-50 dark:text-primary-900 rounded-2xl flex items-center justify-center text-sm font-semibold border border-primary-200 dark:border-primary-800">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300" />
                </div>
                
                <p className="text-primary-600 dark:text-primary-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-xl border border-primary-200 dark:border-primary-700"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-xl hover:bg-primary-200 dark:hover:bg-primary-700 transition-all duration-300 font-medium text-sm border border-primary-200 dark:border-primary-700"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-primary-900 dark:bg-primary-50 text-primary-50 dark:text-primary-900 rounded-xl hover:bg-primary-800 dark:hover:bg-primary-100 transition-all duration-300 font-medium text-sm shadow-sm hover:shadow-md"
                    >
                      <Eye size={16} />
                      <span>Live Demo</span>
                    </motion.a>
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
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/saqhibbilal"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-primary-900 dark:bg-primary-50 text-primary-50 dark:text-primary-900 rounded-2xl font-semibold hover:bg-primary-800 dark:hover:bg-primary-100 transition-all duration-300 shadow-sm hover:shadow-md border border-primary-800 dark:border-primary-200"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 