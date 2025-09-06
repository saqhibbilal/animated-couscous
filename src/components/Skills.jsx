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
    <section id="skills" className="section-padding" style={{backgroundColor: '#100811'}}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-primary-900 dark:text-primary-50 tracking-tight">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="rounded-lg p-4 shadow-sm border card-hover" style={{backgroundColor: '#301934', borderColor: '#4B2650'}}
            >
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 rounded-md flex items-center justify-center text-white mr-2 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#4B2650'}}>
                  {category.icon}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    className="flex items-center p-1.5 rounded-md transition-colors duration-200 group/skill" style={{backgroundColor: '#4B2650'}}
                  >
                    <span className="text-xs font-medium text-white group-hover/skill:text-gray-200 transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills; 