import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, School, ArrowUpRight } from 'lucide-react';
import { education } from '../data/portfolioData';
import { useRef } from 'react';

const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  const getIcon = (type) => {
    return type === 'college' ? <GraduationCap className="w-6 h-6" /> : <School className="w-6 h-6" />;
  };

  const getColorClass = (type) => {
    return type === 'college' 
      ? 'from-primary-600 to-primary-700' 
      : 'from-primary-500 to-primary-600';
  };

  return (
    <section id="education" className="section-padding bg-primary-50 dark:bg-primary-950 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '70px 70px'
        }}></div>
      </motion.div>

      <div className="container-custom relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-primary-900 dark:text-primary-50 tracking-tight">
            Education
          </h2>
          <p className="text-lg text-primary-600 dark:text-primary-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            My academic journey has been focused on building a strong foundation in technology 
            and developing practical skills through hands-on projects and continuous learning.
          </p>
          <div className="w-16 h-0.5 bg-primary-900 dark:bg-primary-50 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline connector */}
              {index < education.length - 1 && (
                <div className="hidden lg:block absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-primary-300 to-primary-500 dark:from-primary-600 dark:to-primary-400 transform -translate-x-1/2 z-0"></div>
              )}
              
              <motion.div
                whileHover={{ y: -4 }}
                className="relative bg-white dark:bg-primary-900 rounded-2xl p-8 shadow-sm border border-primary-200 dark:border-primary-800 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Institution Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${getColorClass(edu.type)} rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(edu.type)}
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-xl text-xs font-medium border ${
                      edu.type === 'college' 
                        ? 'bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-300 border-primary-200 dark:border-primary-700' 
                        : 'bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-300 border-primary-200 dark:border-primary-700'
                    }`}>
                      {edu.type === 'college' ? 'College' : 'School'}
                    </span>
                  </div>
                </div>

                {/* Institution Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-50 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {edu.institution}
                    </h3>
                    <p className="text-lg font-medium text-primary-600 dark:text-primary-400">
                      {edu.degree}
                    </p>
                  </div>

                  {/* Location and Duration */}
                  <div className="flex flex-wrap gap-4 text-sm text-primary-600 dark:text-primary-400">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-primary-600 dark:text-primary-400 leading-relaxed">
                    <p>{edu.description}</p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm font-medium text-primary-700 dark:text-primary-300">
                      <Award className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                      <span>Key Achievements</span>
                    </div>
                    <ul className="space-y-1 ml-6">
                      {edu.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="text-sm text-primary-600 dark:text-primary-400 flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-500/20 transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-primary-900 rounded-2xl p-12 shadow-sm border border-primary-200 dark:border-primary-800">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
              <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-50">
                Academic Excellence
              </h3>
            </div>
            <p className="text-primary-600 dark:text-primary-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              My educational background has provided me with a strong theoretical foundation 
              and practical skills that I continue to build upon through continuous learning and hands-on projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-xl font-medium border border-primary-200 dark:border-primary-700">
                Strong Foundation
              </span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-xl font-medium border border-primary-200 dark:border-primary-700">
                Practical Skills
              </span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-xl font-medium border border-primary-200 dark:border-primary-700">
                Continuous Learning
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 