import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import VerticalEmail from '../components/VerticalEmail';
import SocialLinks from '../components/SocialLinks'; 
import ProjectsSection from "../components/ProjectsSection";

const Hero = ({ projectsRef }) => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const [text] = useTypewriter({
        words: ["Hi, I'm"],
        loop: false,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 1000,
    });

    return (
        <section className="relative w-full h-screen bg-black text-white font-sans overflow-hidden">
            {/* Particle background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: false,
                    background: { color: "#000000" },
                    particles: {
                        number: { value: 100 },
                        size: { value: { min: 1, max: 2 } },
                        move: { enable: true, speed: 0.4 },
                        opacity: { value: 0.4 },
                    },
                }}
                className="absolute inset-0"
            />

            {/* Vertical Email (Hidden on small screens) */}
            <div className="hidden lg:block fixed">
                <VerticalEmail emailAddress="mohitjain965405@gmail.com" />
            </div>

            {/* Social Links (Hide on very small screens) */}
            <div className="hidden sm:block fixed left-4 top-[80%] transform -translate-y-1/2 z-20">
                <SocialLinks />
            </div>

            {/* Center Content */}
            <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-4 md:px-8">
                {/* Typewriter intro and name */}
                <div className="flex flex-wrap justify-center items-baseline gap-2 sm:gap-4">
                    <span className="text-white font-bold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        {text}<Cursor />
                    </span>
                    <span className="stroke-text font-extrabold uppercase tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                        MOHIT JAIN
                    </span>
                </div>

                {/* Subtitle */}
                <p className="mt-6 text-gray-300 max-w-xl text-base sm:text-lg md:text-xl px-4">
                    Aspiring AI/ML Engineer focused on building intelligent, reliable systems.
                </p>

                {/* CTA Button */}
                <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg transition-all duration-300" onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>
                    VIEW PROJECTS
                </button>
            </div>

            {/* Stroke text style */}
            <style>{`
                .stroke-text {
                    -webkit-text-stroke: 2px white;
                    color: transparent;
                }
            `}</style>
        </section>
    );
};

export default Hero;
