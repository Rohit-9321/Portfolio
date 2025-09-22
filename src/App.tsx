import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white min-h-screen space-y-8">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <WorkExperience />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;