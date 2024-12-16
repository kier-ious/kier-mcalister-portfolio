import React from 'react';
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Navbar />
    <ProfileSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default App;
