import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Building, Award, ExternalLink, ArrowUpRight } from 'lucide-react';
import { workHistory } from '../data/portfolioData';
import { useRef } from 'react';

const WorkHistory = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="experience" className="section-padding relative overflow-hidden" style={{backgroundColor: '#100811'}}>
      {/* Parallax Background */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '60px 60px'
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
            Work Experience
          </h2>
          <div className="w-12 h-0.5 bg-primary-900 dark:bg-primary-50 mx-auto mb-4"></div>
          <p className="text-base text-primary-600 dark:text-primary-400 max-w-2xl mx-auto leading-relaxed">
            My professional journey in software development, from junior roles to senior positions
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Animated Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 overflow-hidden">
            {/* Base gradient line */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-300 via-purple-500 to-purple-300 dark:from-purple-600 dark:via-purple-400 dark:to-purple-600 opacity-30"></div>
            
            {/* Animated progress line with glow */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-400 via-purple-500 to-purple-400 dark:from-purple-500 dark:via-purple-300 dark:to-purple-500"
              style={{ 
                height: timelineProgress.get() + '%',
                boxShadow: '0 0 8px rgba(168, 85, 247, 0.4), 0 0 16px rgba(168, 85, 247, 0.2)'
              }}
              initial={{ height: '0%' }}
              animate={{ height: timelineProgress.get() + '%' }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-400 via-purple-300 to-purple-400 dark:from-purple-500 dark:via-purple-200 dark:to-purple-500"
              style={{ 
                height: timelineProgress.get() + '%',
                boxShadow: '0 0 12px rgba(168, 85, 247, 0.6), 0 0 24px rgba(168, 85, 247, 0.3)'
              }}
              animate={{ 
                opacity: [0.3, 0.8, 0.3],
                scaleX: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Sharp reveal line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-white via-purple-200 to-white dark:from-purple-100 dark:via-purple-300 dark:to-purple-100"
              style={{ height: timelineProgress.get() + '%' }}
              initial={{ height: '0%', opacity: 0 }}
              animate={{ 
                height: timelineProgress.get() + '%',
                opacity: [0, 1, 0.7, 1]
              }}
              transition={{ 
                height: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
                opacity: { duration: 0.6, ease: "easeOut" }
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-6">
            {workHistory.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="relative flex items-start group"
                whileHover={{
                  transition: { duration: 0.3 }
                }}
              >
                {/* Connection line on hover */}
                <motion.div
                  className="absolute left-6 top-1.5 w-6 h-0.5 bg-gradient-to-r from-purple-400 to-transparent opacity-0"
                  whileHover={{ 
                    opacity: 0.6,
                    scaleX: 1,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ scaleX: 0 }}
                />

                {/* Enhanced Timeline Dot */}
                <motion.div
                  variants={dotVariants}
                  className="absolute left-4 w-3 h-3 z-10"
                  whileHover={{ 
                    scale: 1.4,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 1.2 }}
                >
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute inset-0 w-3 h-3 bg-purple-400 dark:bg-purple-300 rounded-full opacity-0"
                    whileHover={{ 
                      opacity: 0.3,
                      scale: 2,
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  {/* Main dot */}
                  <motion.div
                    className="absolute inset-0 w-3 h-3 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-full border-2 border-white dark:border-primary-950 shadow-lg"
                    whileHover={{
                      boxShadow: '0 0 12px rgba(168, 85, 247, 0.6), 0 0 24px rgba(168, 85, 247, 0.3)',
                      transition: { duration: 0.2 }
                    }}
                  />
                  
                  {/* Inner highlight */}
                  <motion.div
                    className="absolute top-0.5 left-0.5 w-1 h-1 bg-white dark:bg-purple-100 rounded-full opacity-80"
                    whileHover={{ 
                      opacity: 1,
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                  />
                  
                  {/* Pulsing effect */}
                  <motion.div
                    className="absolute inset-0 w-3 h-3 bg-purple-400 dark:bg-purple-300 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Content Card */}
                <div className="ml-12 flex-1">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="rounded-lg p-4 shadow-sm border card-hover" style={{backgroundColor: '#301934', borderColor: '#4B2650'}}
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1.5">
                          {job.role}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-300">
                          <div className="flex items-center space-x-1.5">
                            <Building size={14} />
                            <span className="font-medium text-sm">{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Calendar size={14} />
                            <span className="text-sm">{job.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Experience Badge */}
                      <div className="mt-2 lg:mt-0">
                        <span className="inline-flex items-center px-2.5 py-1 text-white rounded-md text-xs font-medium border" style={{backgroundColor: '#4B2650', borderColor: '#301934'}}>
                          <Award size={12} className="mr-1" />
                          {index === 0 ? 'Current' : `${workHistory.length - index} years ago`}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-300 leading-relaxed mb-3">
                      {job.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-white mb-1.5 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {job.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="px-1.5 py-0.5 text-white text-xs rounded-md border" style={{backgroundColor: '#4B2650', borderColor: '#301934'}}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="border-t pt-3" style={{borderColor: '#4B2650'}}>
                      <h4 className="text-xs font-semibold text-white mb-1.5 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-0.5">
                        {index === 0 && (
                          <>
                            <li className="flex items-start space-x-2 text-xs text-gray-300">
                              <span className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Led development of 3 major web applications serving 10,000+ users</span>
                            </li>
                            <li className="flex items-start space-x-2 text-xs text-gray-300">
                              <span className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Mentored 5 junior developers and improved team productivity by 40%</span>
                            </li>
                            <li className="flex items-start space-x-2 text-xs text-gray-300">
                              <span className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Implemented CI/CD pipelines reducing deployment time by 60%</span>
                            </li>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <li className="flex items-start space-x-2 text-xs text-gray-300">
                              <span className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Built responsive user interfaces for 8 client projects</span>
                            </li>
                            <li className="flex items-start space-x-2 text-xs text-gray-300">
                              <span className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Collaborated with design and backend teams to deliver high-quality products</span>
                            </li>
                            <li className="flex items-start space-x-2 text-xs text-gray-300">
                              <span className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Optimized application performance resulting in 30% faster load times</span>
                            </li>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <li className="flex items-start space-x-2 text-xs text-gray-300">
                              <span className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Developed 15+ custom websites for various clients</span>
                            </li>
                            <li className="flex items-start space-x-2 text-xs text-gray-300">
                              <span className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Worked with multiple frameworks and technologies to meet diverse requirements</span>
                            </li>
                            <li className="flex items-start space-x-2 text-xs text-gray-300">
                              <span className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Maintained and updated existing client websites ensuring optimal performance</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="rounded-xl p-6 text-white shadow-sm border" style={{backgroundColor: '#301934', borderColor: '#4B2650'}}>
            <h3 className="text-xl font-semibold mb-3">Interested in Working Together?</h3>
            <p className="text-sm text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's connect and explore how we can work together to bring your ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 px-6 py-3 text-white rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md border" style={{backgroundColor: '#4B2650', borderColor: '#301934'}}
            >
              <ExternalLink size={16} />
              <span>Get In Touch</span>
              <ArrowUpRight size={14} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkHistory; 