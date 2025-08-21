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
    <section id="experience" className="section-padding bg-white dark:bg-primary-950 relative overflow-hidden">
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-primary-900 dark:text-primary-50 tracking-tight">
            Work Experience
          </h2>
          <div className="w-16 h-0.5 bg-primary-900 dark:bg-primary-50 mx-auto mb-6"></div>
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
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-300 dark:from-primary-600 dark:via-primary-400 dark:to-primary-600">
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary-600 dark:bg-primary-400"
              style={{ height: timelineProgress.get() + '%' }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {workHistory.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="relative flex items-start group"
              >
                {/* Timeline Dot */}
                <motion.div
                  variants={dotVariants}
                  className="absolute left-6 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-primary-950 shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"
                />

                {/* Content Card */}
                <div className="ml-16 flex-1">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="bg-primary-50 dark:bg-primary-900 rounded-xl p-6 shadow-sm border border-primary-200 dark:border-primary-800 card-hover"
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-50 mb-2">
                          {job.role}
                        </h3>
                        <div className="flex items-center space-x-6 text-primary-600 dark:text-primary-400">
                          <div className="flex items-center space-x-2">
                            <Building size={16} />
                            <span className="font-medium">{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} />
                            <span>{job.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Experience Badge */}
                      <div className="mt-3 lg:mt-0">
                        <span className="inline-flex items-center px-3 py-1.5 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-medium border border-primary-200 dark:border-primary-700">
                          <Award size={14} className="mr-1" />
                          {index === 0 ? 'Current' : `${workHistory.length - index} years ago`}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-primary-600 dark:text-primary-400 leading-relaxed mb-4">
                      {job.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-primary-700 dark:text-primary-300 mb-2 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="px-2 py-1 bg-white dark:bg-primary-800 text-primary-700 dark:text-primary-300 text-xs rounded-lg border border-primary-200 dark:border-primary-700"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="border-t border-primary-200 dark:border-primary-700 pt-4">
                      <h4 className="text-xs font-semibold text-primary-700 dark:text-primary-300 mb-2 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {index === 0 && (
                          <>
                            <li className="flex items-start space-x-2 text-xs text-primary-600 dark:text-primary-400">
                              <span className="w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Led development of 3 major web applications serving 10,000+ users</span>
                            </li>
                            <li className="flex items-start space-x-2 text-xs text-primary-600 dark:text-primary-400">
                              <span className="w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Mentored 5 junior developers and improved team productivity by 40%</span>
                            </li>
                            <li className="flex items-start space-x-2 text-xs text-primary-600 dark:text-primary-400">
                              <span className="w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Implemented CI/CD pipelines reducing deployment time by 60%</span>
                            </li>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <li className="flex items-start space-x-2 text-xs text-primary-600 dark:text-primary-400">
                              <span className="w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Built responsive user interfaces for 8 client projects</span>
                            </li>
                            <li className="flex items-start space-x-2 text-xs text-primary-600 dark:text-primary-400">
                              <span className="w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Collaborated with design and backend teams to deliver high-quality products</span>
                            </li>
                            <li className="flex items-start space-x-2 text-xs text-primary-600 dark:text-primary-400">
                              <span className="w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Optimized application performance resulting in 30% faster load times</span>
                            </li>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <li className="flex items-start space-x-2 text-xs text-primary-600 dark:text-primary-400">
                              <span className="w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Developed 15+ custom websites for various clients</span>
                            </li>
                            <li className="flex items-start space-x-2 text-xs text-primary-600 dark:text-primary-400">
                              <span className="w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span>Worked with multiple frameworks and technologies to meet diverse requirements</span>
                            </li>
                            <li className="flex items-start space-x-2 text-xs text-primary-600 dark:text-primary-400">
                              <span className="w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full mt-1.5 flex-shrink-0"></span>
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
          <div className="bg-primary-900 dark:bg-primary-50 rounded-xl p-6 text-primary-50 dark:text-primary-900 shadow-sm border border-primary-800 dark:border-primary-200">
            <h3 className="text-xl font-semibold mb-3">Interested in Working Together?</h3>
            <p className="text-sm text-primary-300 dark:text-primary-600 mb-4 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's connect and explore how we can work together to bring your ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white dark:bg-primary-900 text-primary-900 dark:text-primary-50 rounded-xl font-semibold hover:bg-primary-100 dark:hover:bg-primary-800 transition-all duration-300 shadow-sm hover:shadow-md border border-primary-200 dark:border-primary-700"
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