// src/components/ProjectsSection.jsx
import React, { useRef, useEffect, useState, useCallback } from 'react';
import ProjectCard from './ProjectCard'; // Ensure this import path is correct

const ProjectsSection = () => {
    // Data for projects as provided in the snippet (ensure descriptions match)
    const projectsData = [
        {
            title: "Vehicle Retrofitting App",
            badge: "Myself",
            description: "A smart web app to check EV retrofitting eligibility using manual input or camera upload. Built with React, Vite, Express, Next.js.",
            liveLink: "https://vehicle-retrofit-app.vercel.app/",
            repoLink: "https://github.com/Mohitjain9654/vehicle-retrofit-app",
        },
        {
            title: "DestinAI - Travel Recommender",
            badge: "Smart App",
            description: "A rule-based travel assistant that suggests destinations based on user preferences like weather, budget, and activities. Built with React Native and Vite.",
            // liveLink: "https://your-destinai-link.vercel.app/",
            repoLink: "https://github.com/Mohitjain9654/DestinAI",
        },
        {
            title: "MediTrack: Hospital Inventory Dashboard",
            badge: "Myself",
            description: "A full-stack web application designed to manage hospital inventory efficiently, including medical equipment, supplies, medicines, and staff operations.",
            // liveLink: "https://cairbnb-project.onrender.com/",
            repoLink: "https://github.com/Mohitjain9654/Hospital-Inventory-Management-System",
        },
        {
            title: "MediSync: Hospital Management Dashboard",
            badge: "Myself",
            description: "A full-stack hospital management system built with React Vite, Express.js, and MySQL. Enables doctors to manage appointments, patients, and schedules efficiently. Includes modules for patient records, billing, and medical staff.",
            // liveLink: "https://your-medisync-link.vercel.app/",
            repoLink: "https://github.com/Mohitjain9654/DBMS_PBL-Hspital-Dashboard"
        },
        {
            title: "NetStream: Netflix Clone",
            badge: "Tutorial",
            description: "A static Netflix clone built using only HTML, CSS, and JavaScript. Features a responsive layout, interactive movie thumbnails, and a clean, modern design inspired by the original Netflix interface.",
            // liveLink: "https://netflix-clone-mohit.vercel.app/",
            repoLink: "https://github.com/Mohitjain9654/Website-practice/tree/main/Netflix"
        },
        {
            title: "C Chat Terminal",
            badge: "Myself",
            description: "A real-time terminal-based chat application written in C using socket programming and multithreading. Enables bidirectional communication between two terminals on the same machine or local network. Useful for understanding client-server models and raw network communication.",
            // liveLink: "",
            repoLink: "https://github.com/Mohitjain9654/Real-time-chat-application" // Replace with your actual repo link
        },
        // You can add more projects here if needed
    ];

    const sectionRef = useRef(null);
    const projectsContainerRef = useRef(null); // Ref for the horizontally scrolling container

    // State for the vertical background text animations
    const [leftBgTextTranslateY, setLeftBgTextTranslateY] = useState(0);
    const [rightBgTextTranslateX, setRightBgTextTranslateX] = useState(600);
    const [leftBgTextTranslateX, setLeftBgTextTranslateX] = useState(-600); // <-- Missing in your code
    const [rightBgTextTranslateY, setRightBgTextTranslateY] = useState(0); // Starts at 0, moves up/down

    // State for the horizontal scroll of project cards
    const [projectsTranslateX, setProjectsTranslateX] = useState(0);

    // Scroll listener for all animations
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !projectsContainerRef.current) return;

            const sectionRect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // --- Background Text Animation (Up/Down based on scroll within section) ---
            // Animate only when section is in or near viewport
            let bgTextProgress = 0;
            if (sectionRect.top < viewportHeight && sectionRect.bottom > 0) {
                // Calculate progress from 0 (section bottom just entering viewport) to 1 (section top reaching viewport top)
                bgTextProgress = (viewportHeight - sectionRect.top) / (sectionRect.height * 2 + viewportHeight);
                bgTextProgress = Math.max(0, Math.min(1, bgTextProgress));
            }

            // Left "Projects" text: from bottom (positive Y) to top (negative Y)
            // Range 0 to 600 (adjust as needed based on desired movement extent)
            setLeftBgTextTranslateX(-700 + 600 * bgTextProgress); // Moves from -600px to 0px

            // Right "PROJ" text: from top (negative Y) to bottom (positive Y)
            // Range -600 to 0 (adjust as needed)
            setRightBgTextTranslateX(150 * (1 - bgTextProgress)); // moves from right (600px) to 0px



            // --- Project Cards Horizontal Scroll Animation ---
            // This is trickier as it's not a simple visibility, but controlled horizontal scroll.
            // The snippet shows `transform: translate(-23.722%, 0%)`.
            // We need to calculate how much to translate based on scroll.

            const containerWidth = projectsContainerRef.current.scrollWidth; // Total width of all cards combined
            const visibleWidth = projectsContainerRef.current.offsetWidth; // Visible width of the container

            if (containerWidth > visibleWidth) {
                const scrollableDistance = containerWidth - visibleWidth;

                const scrollStartRatio = 0.8;
                const scrollEndRatio = 0.2;

                const sectionScrollHeight = sectionRect.height * (scrollStartRatio - scrollEndRatio);
                const currentScrollInEffect = viewportHeight * scrollStartRatio - sectionRect.top;

                let horizProgress = Math.max(0, Math.min(1, currentScrollInEffect / sectionScrollHeight));

                const targetPercentage = -80; // From your snippet
                setProjectsTranslateX(targetPercentage * (1 - horizProgress));

            } else {
                setProjectsTranslateX(0);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Set initial positions on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="tech-stack" className="bg-black text-white py-20 px-6 relative overflow-hidden" ref={sectionRef}>
            <div className="max-w-7xl mx-auto flex flex-col gap-20 overflow-hidden">
                <h2 className="text-white text-3xl md:text-4xl font-extrabold text-center pb-10">
                    Project's
                </h2>

                <div className="relative w-full pb-10">

                    <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 z-20 bg-gradient-to-r from-black to-transparent"></div>
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 z-20 bg-gradient-to-l from-black to-transparent"></div>

                    <div
                        className="absolute left-0 uppercase text-neutral-300 text-6xl sm:text-7xl md:text-9xl font-extrabold -rotate-90 opacity-40 select-none pointer-events-none"
                        style={{
                            transform: `translate3d(${leftBgTextTranslateX}px, 0px, 0px) rotate(-180deg)`,
                            willChange: 'transform',
                        }}
                    >
                        <h3>Project's</h3>
                    </div>


                    <div
                        className="absolute right-0 uppercase stroke-text text-neutral-300 text-6xl sm:text-7xl md:text-9xl font-extrabold -rotate-90 opacity-40 select-none pointer-events-none"
                        style={{
                            transform: `translate3d(${rightBgTextTranslateX}px, 0px, 0px)`,
                            willChange: 'transform',
                        }}
                    >
                        <h3>Project's</h3>
                    </div>

                    <div className="relative w-full pb-10 overflow-x-auto scroll-smooth" ref={projectsContainerRef}>


                        <div
                            ref={projectsContainerRef}
                            className="flex gap-5 p-10 w-max"
                            style={{
                                transform: `translateX(${projectsTranslateX}%)`,
                                willChange: 'transform',
                            }}
                        >
                            {projectsData.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                // isVisible and delay removed as animation is handled by translateX on container
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;