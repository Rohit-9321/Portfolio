import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const experiences = [
    {
  id: 1,
  title: 'Backend Developer Intern',
  company: 'Arthlete (Startup)',
  location: 'Remote',
  duration: '2025',
  description: 'Worked as a backend developer intern contributing to the design and development of scalable APIs and database management for a fitness platform.',
  achievements: [
    'Developed and optimized RESTful APIs for core platform features',
    'Improved database queries and reduced response time by 25%',
    'Collaborated with frontend team to integrate APIs seamlessly',
  ],
  technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
}

  ];

  return (
    <section id="experience" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transform md:-translate-x-3 z-10 flex items-center justify-center"
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.3 }}
                >
                  <Briefcase size={12} className="text-black" />
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20" />
                </motion.div>

                {/* Experience card */}
                <motion.div
                  className={`ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } w-full md:w-6/12`}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -10,
                    rotateY: index % 2 === 0 ? 2 : -2
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="group relative backdrop-blur-md bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/20 rounded-2xl p-8 shadow-2xl">
                    {/* Dynamic gradient background */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(59, 130, 246, 0.05))',
                      }}
                    />

                    <div className="relative z-10">
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300 mb-2">
                          {experience.title}
                        </h3>
                        <p className="text-blue-400 font-semibold text-lg mb-3">
                          {experience.company}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-400 text-sm mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            {experience.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-cyan-400 font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start gap-3 text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: index * 0.3 + achIndex * 0.1 }}
                            >
                              <span className="text-cyan-400 mt-1.5">•</span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-300"
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 212, 255, 0.2)' }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;