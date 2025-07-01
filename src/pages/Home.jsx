import React, { useRef } from 'react';
import Hero from "../components/home_main";
import PortfolioSection from "../components/PortfolioSection";
import JourneySection from "../components/JourneySection";
import TechnologiesSection from "../components/TechnologiesSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
    
    const projectsRef = useRef(null);
    
    return (
        <>
            <Hero />
            <PortfolioSection />
            <JourneySection />
            <TechnologiesSection />
            <div ref={projectsRef}>
        <ProjectsSection />
      </div>
            <CertificationsSection />
            <ContactSection />
        </>
    );
};

export default Home;
