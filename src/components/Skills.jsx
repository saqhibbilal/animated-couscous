import { motion } from 'framer-motion';
import { Code, Database, Palette, Wrench, BookOpen, Zap } from 'lucide-react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5" />,
      skills: skills.languages,
      color: 'text-primary-600'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Zap className="w-5 h-5" />,
      skills: skills.frameworks,
      color: 'text-primary-600'
    },
    {
      title: 'Databases',
      icon: <Database className="w-5 h-5" />,
      skills: skills.databases,
      color: 'text-primary-600'
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="w-5 h-5" />,
      skills: skills.tools,
      color: 'text-primary-600'
    },
    {
      title: 'Libraries & Styling',
      icon: <Palette className="w-5 h-5" />,
      skills: skills.libraries,
      color: 'text-primary-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-primary-50 dark:bg-primary-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-primary-900 dark:text-primary-50 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-base text-primary-600 dark:text-primary-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and frameworks I use to build modern, scalable applications.
          </p>
          <div className="w-16 h-0.5 bg-primary-900 dark:bg-primary-50 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-primary-900 rounded-xl p-6 shadow-sm border border-primary-200 dark:border-primary-800 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-800 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-50">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    className="flex items-center p-2 rounded-lg bg-primary-50 dark:bg-primary-800/50 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors duration-200 group/skill"
                  >
                    <span className="text-sm font-medium text-primary-700 dark:text-primary-300 group-hover/skill:text-primary-900 dark:group-hover/skill:text-primary-50 transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white dark:bg-primary-900 rounded-xl p-8 shadow-sm border border-primary-200 dark:border-primary-800">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2" />
              <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-50">
                Continuous Learning
              </h3>
            </div>
            <p className="text-sm text-primary-600 dark:text-primary-400 mb-6 max-w-2xl mx-auto leading-relaxed">
              I believe in staying current with industry best practices and emerging technologies. 
              My learning approach combines theoretical knowledge with hands-on project experience.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1.5 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                Always Learning
              </span>
              <span className="px-3 py-1.5 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                Problem Solver
              </span>
              <span className="px-3 py-1.5 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                Team Player
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 