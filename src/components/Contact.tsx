import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-16"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="space-y-8"
          >
            <p className="text-lg text-gray-300">
              Feel free to reach out to me for collaborations, opportunities, or just to say hi!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-400" />
                <span>mail.gupta.rohit99@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-green-400" />
                <span>+91 9321451171</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-red-400" />
                <span>Uttan Bhayander West , Mumbai Maharastra, India(401106)</span>
              </div>
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            action="https://formspree.io/f/mwprenjg"
            method="POST"
            className="space-y-6"
          >
            {/* Hidden fields */}
            <input type="hidden" name="_subject" value="New Contact Form Submission!" />
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
