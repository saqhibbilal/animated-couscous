import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Code, Users, Award, Clock } from 'lucide-react';
import { personalInfo, resumeUrl } from '../data/portfolioData';

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "25+" },
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Clock, label: "Hours Coded", value: "2000+" },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Senior Developer",
      description: "Leading development teams and architecting scalable solutions",
      company: "Tech Company Inc."
    },
    {
      year: "2021",
      title: "Full Stack Developer",
      description: "Building end-to-end applications and mentoring junior developers",
      company: "Startup XYZ"
    },
    {
      year: "2019",
      title: "Frontend Developer",
      description: "Creating responsive user interfaces and optimizing user experience",
      company: "Digital Agency"
    },
    {
      year: "2018",
      title: "Started Coding Journey",
      description: "Began learning web development and building first projects",
      company: "Self-Taught"
    }
  ];

  const skills = [
    "React & Next.js", "Node.js & Express", "TypeScript", "Python",
    "AWS & Cloud", "Docker & Kubernetes", "MongoDB & PostgreSQL", "GraphQL"
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = `${personalInfo.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-primary-950">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-primary-900 dark:text-primary-50 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-primary-900 dark:bg-primary-50 mx-auto mb-8"></div>
          <p className="text-lg text-primary-600 dark:text-primary-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and delivering exceptional user experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Personal Summary */}
            <div className="bg-primary-50 dark:bg-primary-900 rounded-2xl p-8 shadow-sm border border-primary-200 dark:border-primary-800">
              <h3 className="text-2xl font-semibold mb-6 text-primary-900 dark:text-primary-50">Who I Am</h3>
              <p className="text-primary-600 dark:text-primary-400 leading-relaxed mb-6">
                {personalInfo.about}
              </p>
              
              {/* Location & Availability */}
              <div className="flex items-center space-x-6 text-sm text-primary-500 dark:text-primary-400">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-primary-900 rounded-2xl p-6 text-center shadow-sm border border-primary-200 dark:border-primary-800 hover:shadow-md transition-all duration-300 group"
                >
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-semibold text-primary-900 dark:text-primary-50 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-600 dark:text-primary-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="bg-primary-900 dark:bg-primary-50 rounded-2xl p-8 text-primary-50 dark:text-primary-900 text-center shadow-sm border border-primary-800 dark:border-primary-200"
            >
              <h3 className="text-xl font-semibold mb-4">Want to know more?</h3>
              <p className="text-primary-300 dark:text-primary-600 mb-6 leading-relaxed">
                Download my detailed resume to learn more about my experience and skills
              </p>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleResumeDownload}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white dark:bg-primary-900 text-primary-900 dark:text-primary-50 rounded-2xl font-semibold hover:bg-primary-100 dark:hover:bg-primary-800 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Timeline & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Timeline */}
            <div className="bg-primary-50 dark:bg-primary-900 rounded-2xl p-8 shadow-sm border border-primary-200 dark:border-primary-800">
              <h3 className="text-2xl font-semibold mb-8 text-primary-900 dark:text-primary-50">My Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-primary-300 dark:border-primary-700"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full -translate-x-[9px]"></div>
                    <div className="mb-2">
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-primary-900 dark:text-primary-50 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                      {item.company}
                    </p>
                    <p className="text-primary-600 dark:text-primary-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-primary-50 dark:bg-primary-900 rounded-2xl p-8 shadow-sm border border-primary-200 dark:border-primary-800">
              <h3 className="text-2xl font-semibold mb-6 text-primary-900 dark:text-primary-50">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-white dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-xl text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-700 transition-all duration-300 border border-primary-200 dark:border-primary-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 