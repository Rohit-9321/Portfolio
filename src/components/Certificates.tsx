import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Calendar, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      issuer: 'AWS Academy',
      date: '2025-04-16',
      image: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758437467/WhatsApp_Image_2025-09-21_at_12.17.23_o7lv9d.jpg',
      credentialUrl: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758437467/WhatsApp_Image_2025-09-21_at_12.17.23_o7lv9d.jpg',
    },
    {
      id: 2,
      title: ' Introduction to Prompt Engineering with GitHub Copilo',
      issuer: 'Microsoft & Simplilearn SkillUp',
      date: '2025-09-04',
      image: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758437467/WhatsApp_Image_2025-09-21_at_12.18.30_hrhko3.jpg',
      credentialUrl: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758437467/WhatsApp_Image_2025-09-21_at_12.18.30_hrhko3.jpg',
    },
    
    {
      id: 3,
      title: 'Introduction to Prompt Engineering',
      issuer: 'Simplilearn SkillUp',
      date: '2025-09-04',
      image: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758437467/WhatsApp_Image_2025-09-21_at_12.18.56_ch7wob.jpg',
      credentialUrl: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758437467/WhatsApp_Image_2025-09-21_at_12.18.56_ch7wob.jpg',
    },
    {
      id: 4,
      title: 'Introduction to Front End Development',
      issuer: 'Simplilearn SkillUp',
      date: '2025-01-09',
      image: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758437467/WhatsApp_Image_2025-09-21_at_12.19.11_ijsjyw.jpg',
      credentialUrl: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758437467/WhatsApp_Image_2025-09-21_at_12.19.11_ijsjyw.jpg',
    },
    {
      id: 5,
      title: ' Introduction to MongoDB',
      issuer: 'Simplilearn SkillUp',
      date: '2025-05-02',
      image: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758437467/WhatsApp_Image_2025-09-21_at_12.19.36_ky2lu4.jpg',
      credentialUrl: 'https://res.cloudinary.com/dbiapbspe/image/upload/v1758437467/WhatsApp_Image_2025-09-21_at_12.19.36_ky2lu4.jpg',
    },
  ];

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const currentCert = certificates[currentIndex];

  return (
    <section id="certificates" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Single Certificate Display with Navigation */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevCertificate}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white shadow-lg transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={certificates.length <= 1}
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button
            onClick={nextCertificate}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white shadow-lg transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={certificates.length <= 1}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Certificate Card */}
          <motion.div
            key={currentCert.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="mx-16"
          >
            <motion.div
              className="group relative backdrop-blur-md bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/20 rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                boxShadow: '0 25px 50px rgba(0, 212, 255, 0.3)'
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated border glow */}
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

              {/* Certificate Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={currentCert.image}
                  alt={currentCert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Award Icon */}
                <motion.div
                  className="absolute top-6 right-6 p-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Award className="w-6 h-6 text-black" />
                </motion.div>
              </div>

              {/* Certificate Content */}
              <div className="relative z-10 p-8">
                <motion.h3 
                  className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {currentCert.title}
                </motion.h3>
                
                <motion.p 
                  className="text-blue-400 font-semibold text-xl mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {currentCert.issuer}
                </motion.p>
                
                <motion.div 
                  className="flex items-center gap-3 text-gray-400 text-lg mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Calendar size={18} />
                  {currentCert.date}
                </motion.div>

                <motion.a
                  href={currentCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl transition-all duration-300 text-lg font-semibold text-black shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(0, 212, 255, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <ExternalLink size={20} />
                  View Credential
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Certificate Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {certificates.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Certificate Counter */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-gray-400 text-sm">
              {currentIndex + 1} of {certificates.length} Certificates
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
