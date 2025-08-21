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
    <section id="certificates" className="section-padding bg-white dark:bg-primary-950 relative overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-primary-900 dark:text-primary-50 tracking-tight">
            Certificates & Achievements
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
                className="relative bg-primary-50 dark:bg-primary-900 rounded-2xl p-6 shadow-sm border border-primary-200 dark:border-primary-800 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6" />
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
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>

                {/* Certificate Content */}
                <div className="space-y-3">
                  {/* Course Name */}
                  <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {certificate.title}
                  </h3>

                  {/* Issuer Organization */}
                  <div className="flex items-center text-sm text-primary-600 dark:text-primary-400">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{certificate.issuer}</span>
                  </div>

                  {/* Certificate ID */}
                  {certificate.credentialId && (
                    <div className="flex items-center text-sm text-primary-600 dark:text-primary-400">
                      <Hash className="w-4 h-4 mr-2" />
                      <span className="font-mono text-xs">{certificate.credentialId}</span>
                    </div>
                  )}

                  {/* Issue Date */}
                  {certificate.date && (
                    <div className="flex items-center text-sm text-primary-600 dark:text-primary-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{certificate.date}</span>
                    </div>
                  )}

                  {/* Certificate Image Placeholder */}
                  <div className="mt-4 p-4 bg-white dark:bg-primary-800 rounded-xl border-2 border-dashed border-primary-300 dark:border-primary-600">
                    <div className="flex flex-col items-center text-center">
                      <Image className="w-8 h-8 text-primary-400 mb-2" />
                      <p className="text-xs text-primary-500 dark:text-primary-400">
                        Certificate Image
                      </p>
                      <p className="text-xs text-primary-400 dark:text-primary-500">
                        (Add certificate image here)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                {certificate.link && (
                  <div className="mt-4 pt-4 border-t border-primary-200 dark:border-primary-700">
                    <motion.a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-800/50 rounded-xl hover:bg-primary-200 dark:hover:bg-primary-800 transition-all duration-300 border border-primary-200 dark:border-primary-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </motion.a>
                  </div>
                )}

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
          <div className="bg-primary-50 dark:bg-primary-900 rounded-2xl p-12 shadow-sm border border-primary-200 dark:border-primary-800">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
              <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-50">
                Continuous Professional Development
              </h3>
            </div>
            <p className="text-primary-600 dark:text-primary-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              I believe in staying current with industry best practices and technologies. 
              These certifications represent my commitment to professional growth and expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-xl font-medium border border-primary-200 dark:border-primary-700">
                {certificates.length} Certifications
              </span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-xl font-medium border border-primary-200 dark:border-primary-700">
                Industry Recognized
              </span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-xl font-medium border border-primary-200 dark:border-primary-700">
                Verified Credentials
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates; 