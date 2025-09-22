import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImg from '../assets/profile.jpeg'; // Ensure you have a profile image in the specified path

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="about" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative backdrop-blur-md bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl" />
            
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(0, 212, 255, 0.1), transparent)',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">
                    Passionate Developer & Problem Solver
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I’m a Full Stack Developer with experience in React.js, Node.js, databases, Java APIs,and Docker. 
                    I have completed an internship as a backend developer, where I gained hands-on experience building and maintaining robust backend systems. 
                    I focus on creating clean, responsive, and efficient web applications and enjoy working on projects end-to-end
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community. I believe 
                    in continuous learning and staying up-to-date with the latest industry trends.
                  </p>

                  <motion.div
                    className="flex flex-wrap gap-4 pt-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((trait, index) => (
                      <motion.span
                        key={trait}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      >
                        {trait}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <div className="relative w-80 h-80 mx-auto">
                    {/* Profile image placeholder with animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="absolute inset-0 rounded-full object-cover w-full h-full z-10"
                    />

                    
                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400"
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ⚡
                    </motion.div>
                    
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400"
                      animate={{ y: [5, -5, 5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      🚀
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;