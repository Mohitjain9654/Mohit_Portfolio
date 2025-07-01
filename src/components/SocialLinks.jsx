// src/components/SocialLinks.jsx
import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import desired icons

const SocialLinks = () => {
    // Define your social links here
    const links = [
        { id: 1, icon: <FaGithub size={20} />, url: 'https://github.com/Mohitjain9654' }, // Replace with your GitHub URL
        { id: 2, icon: <FaLinkedinIn size={20} />, url: 'https://www.linkedin.com/in/mohit-jain-dev/' }, // Replace with your LinkedIn URL
        { id: 3, icon: <FaInstagram size={20} />, url: 'https://instagram.com/mohitjain.co' }, // Replace with your Instagram URL
        { id: 4, icon: <FaTwitter size={20} />, url: 'https://twitter.com/mohitjain4488' },   // Replace with your Twitter URL
    ];

    return (
        // This container stacks the icons vertically (flex-col) and centers them horizontally (items-center)
        <div className="flex flex-col items-center p-2"> {/* Added p-2 for some internal padding */}
            {links.map(({ id, icon, url }) => (
                <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-3 text-gray-400 hover:text-white transition-colors duration-300" // my-3 for vertical spacing
                    aria-label={`Link to ${url.split('.')[1]}`} // Accessibility improvement
                >
                    {icon}
                </a>
            ))}
            {/* Optional: Add a small fixed line at the bottom, if desired */}
            <div className="block w-px h-[110px] bg-neutral-500 mt-4"></div>
        </div>
    );
};

export default SocialLinks;