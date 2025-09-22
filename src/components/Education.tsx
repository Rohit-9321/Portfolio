import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, Award, Book } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const education = [
    {
      id: 1,
      degree: 'B.E. in Computer Engineering (Pursuing - Final Year, CGPA 8.375)',
      school: 'Shree L.R. Tiwari College of Engineering',
      location: 'Mumbai, India',
      duration: 'Sep 2022 – Jun 2026',
      gpa: '8.375/10',
      description: 'Currently pursuing a Bachelor of Engineering in Computer Engineering with a strong foundation in software development, problem solving, and system design.',
      achievements: [
        'Maintained a CGPA of 8.375',
        'Worked on academic projects showcasing practical applications of computer science',
        'Actively participated in technical workshops.',
      ],
      courses: ['Data Structures & Algorithms', 'Database Management Systems', 'Operating Systems', 'Computer Networks'],
    },
    {
      id: 2,
      degree: 'HSC in Science (PCMB - 68.80%)',
      school: 'S.T. Joseph High College, Uttan',
      location: 'Mumbai, India',
      duration: 'Jul 2021 – Mar 2022',
      gpa: '68.80%',
      description: 'Completed Higher Secondary Certificate with focus on Physics, Chemistry, Mathematics, and Biology.',
      achievements: [
        'Cleared JEE Main, qualified to attempt JEE Advanced'
      ],
      courses: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    },
    {
      id: 3,
      degree: 'SSC (78.80%)',
      school: 'S.T. Joseph High School, Uttan',
      location: 'Mumbai, India',
      duration: 'Jul 2019 – Mar 2020',
      gpa: '78.80%',
      description: 'Completed Secondary School Certificate with focus on core subjects and extracurricular activities.',
      achievements: [
        'Secured 78.80% in SSC Board Examination',
        'Active participant in sports and cultural activities',
      ],
      courses: ['Mathematics', 'Science', 'English', 'Social Studies'],
    }

  ];

  return (
    <section id="education" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 transform md:-translate-x-0.5" />

          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, rotateY: index % 2 === 0 ? -15 : 15 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.4 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline dot with icon */}
                <motion.div
                  className="absolute left-4 md:left-1/2 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transform md:-translate-x-6 z-10 flex items-center justify-center shadow-lg"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 180,
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)'
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <GraduationCap size={20} className="text-black" />
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-pulse opacity-30" />
                </motion.div>

                {/* Education card */}
                <motion.div
                  className={`ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  } w-full md:w-6/12`}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -15,
                    rotateX: 5,
                    rotateY: index % 2 === 0 ? 3 : -3
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="group relative backdrop-blur-md bg-gradient-to-br from-cyan-900/15 to-blue-900/15 border border-cyan-500/30 rounded-3xl p-8 shadow-2xl">
                    {/* Animated border gradient */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(45deg, rgba(0, 212, 255, 0.2), rgba(59, 130, 246, 0.2), rgba(0, 212, 255, 0.2))',
                        backgroundSize: '200% 200%',
                      }}
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400/30 rounded-full"
                      animate={{ 
                        y: [-3, 3, -3],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10">
                      <div className="mb-6">
                        <motion.div
                          className="flex items-start justify-between mb-4"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.6, delay: index * 0.4 + 0.2 }}
                        >
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300 mb-2">
                              {edu.degree}
                            </h3>
                            <p className="text-blue-400 font-semibold text-lg mb-2">
                              {edu.school}
                            </p>
                          </div>
                          <motion.div
                            className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl"
                            whileHover={{ rotate: 12, scale: 1.1 }}
                          >
                            <Award className="w-6 h-6 text-cyan-400" />
                          </motion.div>
                        </motion.div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-400 text-sm mb-6">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            {edu.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <Book size={14} />
                            GPA: {edu.gpa}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                          <Award size={16} />
                          Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start gap-3 text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: index * 0.4 + achIndex * 0.1 }}
                            >
                              <span className="text-cyan-400 mt-1.5">•</span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                          <Book size={16} />
                          Key Courses:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <motion.span
                              key={course}
                              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-300"
                              whileHover={{ 
                                scale: 1.1, 
                                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                                boxShadow: '0 0 15px rgba(0, 212, 255, 0.4)'
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: index * 0.4 + courseIndex * 0.05 }}
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
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

export default Education;