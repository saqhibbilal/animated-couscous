import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Code, Users, Award, Clock, Zap, Github, Trophy, Star } from 'lucide-react';
import { personalInfo, resumeUrl } from '../data/portfolioData';

const About = () => {
  const metrics = [
    { icon: Code, label: "Technologies Mastered", value: "15+" },
    { icon: Zap, label: "AI/ML Projects", value: "8+" },
    { icon: Github, label: "Open Source Contributions", value: "12+" },
    { icon: Trophy, label: "Hackathons Won", value: "5+" },
  ];

  const skills = [
    "React & Next.js", "Node.js & Express", "TypeScript", "Python",
    "AWS & Cloud", "Docker & Kubernetes", "MongoDB & PostgreSQL", "GraphQL"
  ];

  const hackathons = [
    {
      name: "TechCrunch Disrupt",
      achievement: "1st Place - AI Innovation",
      year: "2023",
      description: "Built an AI-powered sign language recognition system"
    },
    {
      name: "Microsoft Imagine Cup",
      achievement: "Regional Finalist",
      year: "2022", 
      description: "Developed a sustainable energy management platform"
    },
    {
      name: "Google Developer Days",
      achievement: "Best ML Project",
      year: "2021",
      description: "Created a real-time traffic prediction system"
    }
  ];

  const openSource = [
    {
      project: "TensorFlow",
      contribution: "Bug fixes and documentation",
      impact: "Used by 100K+ developers"
    },
    {
      project: "React Native",
      contribution: "Performance optimizations",
      impact: "Improved app startup time by 15%"
    },
    {
      project: "Kubernetes",
      contribution: "Feature development",
      impact: "Enhanced container orchestration"
    }
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-primary-900 dark:text-primary-50 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-primary-900 dark:bg-primary-50 mx-auto mb-6"></div>
          <p className="text-base text-primary-600 dark:text-primary-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and delivering exceptional user experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Personal Info & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Personal Summary */}
            <div className="bg-primary-50 dark:bg-primary-900 rounded-xl p-6 shadow-sm border border-primary-200 dark:border-primary-800">
              <h3 className="text-xl font-semibold mb-4 text-primary-900 dark:text-primary-50">Who I Am</h3>
              <p className="text-sm text-primary-600 dark:text-primary-400 leading-relaxed mb-4">
                {personalInfo.about}
              </p>
              
              {/* Location & Availability */}
              <div className="flex items-center space-x-6 text-xs text-primary-500 dark:text-primary-400">
                <div className="flex items-center space-x-2">
                  <MapPin size={14} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={14} />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-500 rounded-xl p-6 text-white shadow-sm"
            >
              <div className="flex items-start space-x-3">
                <Star className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm italic mb-2 leading-relaxed">
                    "{personalInfo.quote}"
                  </p>
                  <p className="text-xs opacity-90">— {personalInfo.quoteAuthor}</p>
                </div>
              </div>
            </motion.div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-primary-900 rounded-xl p-4 text-center shadow-sm border border-primary-200 dark:border-primary-800 card-hover"
                >
                  <metric.icon className="w-6 h-6 text-primary-600 dark:text-primary-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xl font-semibold text-primary-900 dark:text-primary-50 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-primary-600 dark:text-primary-400">
                    {metric.label}
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
              className="bg-primary-900 dark:bg-primary-50 rounded-xl p-6 text-primary-50 dark:text-primary-900 text-center shadow-sm border border-primary-800 dark:border-primary-200"
            >
              <h3 className="text-lg font-semibold mb-3">Want to know more?</h3>
              <p className="text-sm text-primary-300 dark:text-primary-600 mb-4 leading-relaxed">
                Download my detailed resume to learn more about my experience and skills
              </p>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleResumeDownload}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white dark:bg-primary-900 text-primary-900 dark:text-primary-50 rounded-xl font-semibold hover:bg-primary-100 dark:hover:bg-primary-800 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills, Hackathons & Open Source */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Skills */}
            <div className="bg-primary-50 dark:bg-primary-900 rounded-xl p-6 shadow-sm border border-primary-200 dark:border-primary-800">
              <h3 className="text-xl font-semibold mb-4 text-primary-900 dark:text-primary-50">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 bg-white dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-medium hover:bg-primary-100 dark:hover:bg-primary-700 transition-all duration-300 border border-primary-200 dark:border-primary-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Hackathons */}
            <div className="bg-primary-50 dark:bg-primary-900 rounded-xl p-6 shadow-sm border border-primary-200 dark:border-primary-800">
              <h3 className="text-xl font-semibold mb-4 text-primary-900 dark:text-primary-50 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                Hackathon Achievements
              </h3>
              <div className="space-y-3">
                {hackathons.map((hackathon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-primary-800 rounded-lg p-3 border border-primary-200 dark:border-primary-700"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-semibold text-primary-900 dark:text-primary-50">
                        {hackathon.name}
                      </h4>
                      <span className="text-xs text-primary-600 dark:text-primary-400">
                        {hackathon.year}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-primary-600 dark:text-primary-400 mb-1">
                      {hackathon.achievement}
                    </p>
                    <p className="text-xs text-primary-500 dark:text-primary-500">
                      {hackathon.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Open Source Contributions */}
            <div className="bg-primary-50 dark:bg-primary-900 rounded-xl p-6 shadow-sm border border-primary-200 dark:border-primary-800">
              <h3 className="text-xl font-semibold mb-4 text-primary-900 dark:text-primary-50 flex items-center">
                <Github className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                Open Source Impact
              </h3>
              <div className="space-y-3">
                {openSource.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-primary-800 rounded-lg p-3 border border-primary-200 dark:border-primary-700"
                  >
                    <h4 className="text-sm font-semibold text-primary-900 dark:text-primary-50 mb-1">
                      {project.project}
                    </h4>
                    <p className="text-xs text-primary-600 dark:text-primary-400 mb-1">
                      {project.contribution}
                    </p>
                    <p className="text-xs text-primary-500 dark:text-primary-500">
                      {project.impact}
                    </p>
                  </motion.div>
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