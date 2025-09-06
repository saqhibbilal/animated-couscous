import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, ExternalLink, Calendar, Hash, Building, Image, ArrowUpRight } from 'lucide-react';
import { certificates } from '../data/portfolioData';
import { useRef } from 'react';

const Certificates = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section id="certificates" className="section-padding relative overflow-hidden" style={{backgroundColor: '#100811'}}>
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '65px 65px'
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-primary-900 dark:text-primary-50 tracking-tight">
            Certifications
          </h2>
          <p className="text-lg text-primary-600 dark:text-primary-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and achievements that demonstrate my commitment to 
            continuous learning and expertise in various technologies.
          </p>
          <div className="w-16 h-0.5 bg-primary-900 dark:bg-primary-50 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="relative rounded-xl p-4 shadow-sm border hover:shadow-lg transition-all duration-300 group h-full flex flex-col" style={{backgroundColor: '#301934', borderColor: '#4B2650'}}
              >
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-5 h-5" />
                  </div>
                  {certificate.link && (
                    <motion.a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>

                {/* Certificate Content */}
                <div className="space-y-2 flex-1 flex flex-col">
                  {/* Course Name */}
                  <h3 className="text-base font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
                    {certificate.title}
                  </h3>

                  {/* Issuer Organization */}
                  <div className="flex items-center text-xs text-gray-300">
                    <Building className="w-3.5 h-3.5 mr-1.5" />
                    <span>{certificate.issuer}</span>
                  </div>

                  {/* Certificate ID */}
                  {certificate.credentialId && (
                    <div className="flex items-center text-xs text-gray-300">
                      <Hash className="w-3.5 h-3.5 mr-1.5" />
                      <span className="font-mono text-xs">{certificate.credentialId}</span>
                    </div>
                  )}

                  {/* Issue Date */}
                  {certificate.date && (
                    <div className="flex items-center text-xs text-gray-300">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      <span>{certificate.date}</span>
                    </div>
                  )}

                </div>

                {/* Action Button */}
                {certificate.link && (
                  <div className="mt-auto pt-3 border-t" style={{borderColor: '#4B2650'}}>
                    <motion.a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center w-full px-3 py-1.5 text-xs font-medium text-white rounded-lg transition-all duration-300 border" style={{backgroundColor: '#4B2650', borderColor: '#301934'}}
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      View Certificate
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                    </motion.a>
                  </div>
                )}

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

export default Certificates; 