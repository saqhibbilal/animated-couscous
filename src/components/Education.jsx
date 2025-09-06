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
    <section id="education" className="section-padding relative overflow-hidden" style={{backgroundColor: '#100811'}}>
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
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-primary-900 dark:text-primary-50 tracking-tight">
            Education
          </h2>
          <p className="text-base text-primary-600 dark:text-primary-400 mb-4 max-w-3xl mx-auto leading-relaxed">
            My academic journey has been focused on building a strong foundation in technology 
            and developing practical skills through hands-on projects and continuous learning.
          </p>
          <div className="w-12 h-0.5 bg-primary-900 dark:bg-primary-50 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="relative group"
            >
              
              <motion.div
                whileHover={{ y: -4 }}
                className="relative rounded-xl p-4 shadow-sm border hover:shadow-lg transition-all duration-300 group h-full flex flex-col" style={{backgroundColor: '#301934', borderColor: '#4B2650'}}
              >
                {/* Institution Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${getColorClass(edu.type)} rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(edu.type)}
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2.5 py-0.5 rounded-lg text-xs font-medium border ${
                      edu.type === 'college' 
                        ? 'bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-300 border-primary-200 dark:border-primary-700' 
                        : 'bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-300 border-primary-200 dark:border-primary-700'
                    }`}>
                      {edu.type === 'college' ? 'College' : 'School'}
                    </span>
                  </div>
                </div>

                {/* Institution Details */}
                <div className="space-y-3 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-gray-200 transition-colors duration-300">
                      {edu.institution}
                    </h3>
                    <p className="text-base font-medium text-gray-300">
                      {edu.degree}
                    </p>
                  </div>

                  {/* Location and Duration */}
                  <div className="flex flex-wrap gap-3 text-xs text-gray-300">
                    <div className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1.5" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-gray-300 leading-relaxed text-sm">
                    <p>{edu.description}</p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-1.5 mt-auto">
                    <div className="flex items-center text-xs font-medium text-white">
                      <Award className="w-3.5 h-3.5 mr-1.5 text-gray-300" />
                      <span>Key Achievements</span>
                    </div>
                    <ul className="space-y-0.5 ml-5">
                      {edu.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="text-xs text-gray-300 flex items-start"
                        >
                          <span className="w-1 h-1 bg-white rounded-full mt-1.5 mr-1.5 flex-shrink-0"></span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-500/20 transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Education; 