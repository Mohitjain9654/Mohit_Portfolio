// src/components/TechnologiesSection.jsx
import React, { useRef, useEffect, useState, useCallback } from 'react';

// Data for technologies with CDN image URLs
const technologyData = {
    Frontend: [
        { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
    Backend: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', bgWhite: true }, // Add bg-white for Express.js
        { name: 'React Router', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg' },
        { name: 'Nodemon', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg' },
    ],
    Database: [
        { name: 'Mongoose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
    Tools: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ]
};

const TechnologiesSection = () => {
    // Refs for each category section for Intersection Observer
    const categoryRefs = useRef({});
    // State to track visibility of each section
    const [sectionVisibility, setSectionVisibility] = useState({});

    // Effect to set up Intersection Observers for each category
    useEffect(() => {
        const observerOptions = {
            root: null, // Use the viewport
            rootMargin: '0px',
            threshold: 0.2, // Trigger when 20% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const categoryId = entry.target.id;
                setSectionVisibility(prev => ({
                    ...prev,
                    [categoryId]: entry.isIntersecting,
                }));
            });
        }, observerOptions);

        // Observe each category div
        Object.values(categoryRefs.current).forEach(ref => {
            if (ref) {
                observer.observe(ref);
            }
        });

        // Cleanup observer on component unmount
        return () => {
            Object.values(categoryRefs.current).forEach(ref => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
            observer.disconnect();
        };
    }, []);

    // Function to handle scroll-to-section (for category labels)
    const scrollToCategory = useCallback((id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <section id="tech-stack" className="bg-black text-white py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-20"> {/* Changed gap-12 to gap-20 for more vertical separation */}
                <h2 className="text-4xl font-extrabold text-white mb-8 text-center hidden">
                    Technologies {/* Kept title, but hidden, as screenshot doesn't show it as main title */}
                </h2>

                {Object.entries(technologyData).map(([category, techList]) => (
                    <div
                        key={category}
                        id={category.toLowerCase().replace(/\s/g, '-')} // e.g., "frontend", "backend"
                        ref={el => categoryRefs.current[category.toLowerCase().replace(/\s/g, '-')] = el}
                        className={`flex flex-col md:flex-row gap-8 items-start
                                    transition-all duration-700 ease-out transform
                                    ${sectionVisibility[category.toLowerCase().replace(/\s/g, '-')] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                    >
                        {/* Label - sticky positioning for larger screens */}
                        <div className="w-full md:w-1/5 text-gray-400 text-lg font-bold sticky top-[72px] z-10"> {/* top-18 is 72px */}
                            <div
                                className="category-label cursor-pointer hover:text-white transition"
                                onClick={() => scrollToCategory(category.toLowerCase().replace(/\s/g, '-'))}
                            >
                                {category.toUpperCase()}
                            </div>
                        </div>

                        {/* Tech Grid */}
                        <div className="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-6"> {/* gap-6, gap-4 as per snippet */}
                            {techList.map((tech, index) => (
                                <div key={index} className="flex items-center gap-2"> {/* gap-2 for tight icon-text spacing */}
                                    {tech.icon && (
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className={`w-6 h-6 ${tech.bgWhite ? 'bg-white rounded-full p-0.5' : ''}`} // Apply bg-white/rounded/padding if needed
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/24x24/FF0000/FFFFFF?text=X"; }} // Fallback for broken images
                                        />
                                    )}
                                    {tech.textOnly ? (
                                        <span className={`text-lg font-semibold ${tech.color}`}>{tech.name}</span>
                                    ) : (
                                        <span className="text-lg">{tech.name}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesSection;