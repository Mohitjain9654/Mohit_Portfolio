// src/components/VerticalEmail.jsx
import React from 'react';

const VerticalEmail = ({ emailAddress }) => {
    return (
        <div className="fixed flex items-center right-4 top-[70%] transform -translate-y-1/2 z-20">

            {/* Vertical Email Text */}
            <div
                className="text-white text-sm tracking-wide font-mono"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
                <a
                    href={`mailto:${emailAddress}`}
                    className="text-white hover:text-teal-400 transition-colors duration-300"
                    aria-label={`Send an email to ${emailAddress}`}
                >
                    {emailAddress}
                </a>
            </div>

            {/* Vertical Line - now truly vertical and next to text */}
            <div className="absolute block w-px h-[110px] ml-2 mt-[340px] mr-[20px] bg-neutral-500"></div>

        </div>
    );
};

export default VerticalEmail;
