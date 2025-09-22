import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Wrench, MessageSquare } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skillCategories = [
    {
      category: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      skills: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js',],
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      skills: ['Node.js', 'Express.js', 'Python', 'MySQL', 'MongoDB','Spring Boot'],
      color: 'from-blue-400 to-blue-600',
    },
    {
      category: 'Tools & DevOps',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Cloudinary','Git', 'GitHub', 'Docker', 'AWS', 'Visual Studio Code','intellij idea'],
      color: 'from-purple-400 to-purple-600',
    },
    {
      category: 'Languages',
      icon: <MessageSquare className="w-6 h-6" />,
      skills: ['JavaScript','Java', 'TypeScript', 'Python', 'C++', 'SQL', 'Bash'],
      color: 'from-green-400 to-green-600',
    },
  ];

  return (
    <section id="skills" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="relative group"
            >
              <div className="backdrop-blur-md bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/20 rounded-2xl p-8 shadow-2xl">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                />
                
                {/* Floating particles effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </motion.div>

                <div className="relative z-10">
                  {/* Category header */}
                  <motion.div
                    className="flex items-center gap-4 mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`p-3 bg-gradient-to-r ${category.color} rounded-xl shadow-lg`}
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      whileTap={{ rotate: -12, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-black">
                        {category.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">
                      {category.category}
                    </h3>
                  </motion.div>

                  {/* Skills grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          type: "spring",
                          bounce: 0.4
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -5,
                          boxShadow: '0 10px 25px rgba(0, 212, 255, 0.2)',
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group/skill relative p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300 cursor-pointer"
                      >
                        {/* Skill glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-blue-500/0 rounded-xl"
                          whileHover={{ 
                            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(59, 130, 246, 0.1))'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Skill text */}
                        <span className="relative z-10 text-center block text-gray-300 group-hover/skill:text-cyan-300 font-medium transition-colors duration-300">
                          {skill}
                        </span>
                        
                        {/* Hover indicator */}
                        <motion.div
                          className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover/skill:opacity-100"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Skill count indicator */}
                  <motion.div
                    className="mt-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.2 + 0.5 }}
                  >
                    <span className="text-sm text-gray-400">
                      {category.skills.length} Skills
                    </span>
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + 0.8 }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-md bg-gradient-to-r from-cyan-900/10 to-blue-900/10 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-cyan-300 mb-4">Always Learning</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
              Web3 development, AI/ML integration, and cloud-native architectures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;