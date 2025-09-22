import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'FitTrack',
      description: 'Full-stack fitness tracking web application with React, Node.js, and MongoDB. Admins can assign exercises to users, and users can view and follow their assigned workouts while tracking their progress.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758433264/WhatsApp_Image_2025-09-21_at_11.10.42_ilotpm.jpg',
      github: 'https://github.com/Rohit-9321/FitTrack',
      demo: 'https://tinyurl.com/29t4mtyj',
    },
    {
      id: 2,
      title: 'Levitate - UPSC Portal for YouTubers',
      description: 'A platform designed for UPSC content creators and aspirants. Users can watch UPSC-related YouTube videos curated by creators and take interactive quizzes to test their knowledge and track progress.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758434130/WhatsApp_Image_2025-09-21_at_11.15.51_icu4wb.jpg',
      github: 'https://github.com/Rohit-9321/Levitate',
      demo: 'https://levitate-frontend.onrender.com/',
    },
    {
      id: 3,
      title: 'Inventory Management',
      description: 'System used to store all products',
      tech: ['React','Node.js', 'Express', 'MongoDB' ],
      image: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758548124/WhatsApp_Image_2025-09-22_at_19.04.25_jrqp8n.jpg',
      github: 'https://github.com/Rohit-9321/SidhhantAgarwa',
      demo: 'https://sidhhantagarwa-frontend.onrender.com/',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing projects and skills with modern animations and optimized performance.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758435361/WhatsApp_Image_2025-09-21_at_11.44.01_jum3gj.jpg',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative backdrop-blur-md bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/25"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-blue-600/30 border border-blue-500/40 rounded-full text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all duration-300 text-sm font-medium text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-lg transition-colors duration-300 text-sm font-medium text-gray-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;