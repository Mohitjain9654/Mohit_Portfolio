// src/components/ProjectCard.jsx
import React from 'react';

// Reusable component for a single Project Card
const ProjectCard = ({ title, badge, description, liveLink, repoLink }) => {
    return (
        <div
            // Background gradient and border from the provided HTML snippet
            className="border border-zinc-800 hover:border-[#0ea5e9] rounded-xl p-6 flex flex-col w-[280px] sm:w-[320px] justify-between transition-transform hover:scale-105"
            style={{
                background: 'linear-gradient(to bottom right, black, transparent)', // Simulating bg-linear-to-br
            }}
        >
            <div className="flex items-center justify-between mb-4">
                {/* Title font-size and color from snippet */}
                <h3 className="text-white text-xl md:text-2xl font-extrabold">{title}</h3>
                {badge && (
                    // Badge styling from snippet: blue-cyan gradient
                    <p className="text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 rounded-full whitespace-nowrap">
                        {badge}
                    </p>
                )}
            </div>
            {/* Description text color and size from snippet */}
            <p className="text-neutral-400 text-sm leading-relaxed">
                {description}
            </p>
            <div className="flex gap-4 py-4"> {/* py-4 for vertical padding, gap-4 for button spacing */}
                {liveLink && (
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        {/* "View Live" button styling from snippet: blue-indigo gradient, rounded-full */}
                        <button
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs hover:opacity-90 h-9 px-4 py-2 has-[&>svg]:px-3 rounded-full"
                            style={{
                                background: 'linear-gradient(to top, #06b6d4, #4f46e5)', // Simulating bg-linear-to-t from-sky-500 to-indigo-500
                                color: 'white', // Text color for the button
                            }}
                        >
                            View Live
                        </button>
                    </a>
                )}
                {repoLink && (
                    <a href={repoLink} target="_blank" rel="noopener noreferrer">
                        {/* "View Repository" button styling, matching View Live */}
                        <button
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs hover:opacity-90 h-9 px-4 py-2 has-[&>svg]:px-3 rounded-full"
                             style={{
                                background: 'linear-gradient(to top, #06b6d4, #4f46e5)', // Simulating bg-linear-to-t from-sky-500 to-indigo-500
                                color: 'white', // Text color for the button
                            }}
                        >
                            View Repository
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;