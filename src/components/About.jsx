import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{backgroundColor: '#100811'}}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-primary-900 dark:text-primary-50 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-primary-900 dark:bg-primary-50 mx-auto mb-4"></div>
        </motion.div>

        {/* About Me Content */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          className="max-w-6xl mx-auto"
          >
            <div className="rounded-xl p-6 shadow-sm border" style={{backgroundColor: '#301934', borderColor: '#4B2650'}}>
            <p className="text-base text-white leading-relaxed mb-4">
              I'm a software engineer with a strong foundation in systems and scalability, solid on the fundamentals of software development and distributed computing, but restless to go beyond them. Every day, I'm pushing deeper into the internals - LLMs, multi-agent AI, embedded ML, high-performance computing - knowing I'll break things, but also knowing that every new mistake is a step forward.
            </p>
            
            <p className="text-base text-white leading-relaxed mb-4">
              What I build and learn revolves around data. From low-level streams and edge devices to large-scale distributed systems and AI pipelines - that's the thread I follow. Some days it feels like clarity, other days it's chaos. But that's the work: staying in the tension, adapting, and figuring it out, one system, one model, one bug at a time.
            </p>
            
            <p className="text-base text-white leading-relaxed mb-4">
              Right now, I'm especially locked into AI and intelligent systems - not just using them, but working on their guts, understanding how they reason, collaborate, and scale. I want to be part of shaping how machines think and interact, even if it means stumbling, iterating, and, yeah - making a new mistake tomorrow.
            </p>
            
            <p className="text-base text-white leading-relaxed mb-4">
              To keep sharpening, I throw myself into hackathons, open source, and deep-dive case studies of how the big players build at scale. It's where I test what I know, learn what I don't, and stay adaptable in an industry that moves faster than anyone can keep up with.
            </p>
            
            <p className="text-base text-white leading-relaxed">
              And outside the tech bubble? I play football, run track, and wrestle with new languages - human ones and programming ones alike. It's the same drive: keep moving, keep learning, stay uncomfortable.
            </p>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default About; 