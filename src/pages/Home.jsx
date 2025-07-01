import React from 'react'; // React is implicitly imported for JSX usage
import Hero from "../components/home_main";
import PortfolioSection from "../components/PortfolioSection";
import JourneySection from "../components/JourneySection";
import TechnologiesSection from "../components/TechnologiesSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
    return (
        <>
            <Hero />
            <PortfolioSection />
            <JourneySection />
            <TechnologiesSection />
            <ProjectsSection />
            <CertificationsSection />
            <ContactSection />
        </>
    );
};

export default Home;