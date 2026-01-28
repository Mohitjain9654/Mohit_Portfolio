import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import oracle_vector from "../assets/Oracle_AI_Vector.png";
import microsoft_ai900 from "../assets/microsoft-certified-azure-ai-fundamentals.png";
import AI_ibm from "../assets/AI-IBM.png";
import google_cloud_ace from "../assets/google-cloud-ace.png";
import nvidia_dli from "../assets/nvidia-dli.png";

// Reusable Certificate Card component
const CertificateCard = ({ logoUrl, title, issuer, issuedDate, expiryDate, certificateLink }) => {
    return (
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 shadow-xl flex flex-col justify-between h-full transition-transform duration-300 hover:scale-[1.02]">
            {/* Top: Logo + External link */}
            <div className="flex justify-between items-start mb-4">
                {logoUrl ? (
                    <img
                        src={logoUrl}
                        alt={`${issuer} Logo`}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/40x40/525252/FFFFFF?text=Logo";
                        }}
                    />
                ) : (
                    <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center text-neutral-300 text-lg font-bold">
                        Cert
                    </div>
                )}

                {certificateLink && (
                    <a
                        href={certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-teal-400 transition-colors"
                        aria-label={`View ${title} Certificate`}
                    >
                        <FaExternalLinkAlt size={16} />
                    </a>
                )}
            </div>

            {/* Middle: Title + Issuer */}
            <div className="mb-4 flex-grow">
                <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                <p className="text-neutral-400 text-sm">{issuer}</p>
            </div>

            {/* Bottom: Date Info */}
            <div className="text-neutral-500 text-xs">
                <p>Issued {issuedDate}</p>
                <p>{expiryDate ? `Expires ${expiryDate}` : 'No Expiration Date'}</p>
            </div>
        </div>
    );
};

// Main Certifications Section
const CertificationsSection = () => {
    const certificationsData = [
        {
            logoUrl: google_cloud_ace,
            title: "Associate Cloud Engineer",
            issuer: "Google Cloud",
            issuedDate: "January 2026",
            expiryDate: "January 2029",
            certificateLink: "https://www.credly.com/badges/f3824ab0-94b0-42ec-ae58-25dd3c5caeeb"
        },
        {
            logoUrl: nvidia_dli,
            title: "Introduction to Transformer-Based Natural Language Processing",
            issuer: "NVIDIA Deep Learning Institute",
            issuedDate: "July 23, 2025",
            expiryDate: null,
            certificateLink: "https://drive.google.com/file/d/1GM8gB8PuMi_c75jTxU6qraOhxVFgLJDU/view?usp=drive_link"
        },
        {
            logoUrl: microsoft_ai900,
            title: "Azure AI Fundamentals (AI-900)",
            issuer: "Microsoft",
            issuedDate: "February 7, 2025",
            certificateLink: "https://drive.google.com/file/d/1jXceYaR0qVKI5EjzQG9mSf45CT6r4SIP/view?usp=drive_link",
        },
        {
            logoUrl: AI_ibm,
            title: "Artificial Intelligence Fundamentals",
            issuer: "IBM",
            issuedDate: "Jun 28, 2025",
            expiryDate: null,
            certificateLink: "https://drive.google.com/file/d/1nAnnUb2GFlQAnpnB-rDzhX-yUzvpTynv/view?usp=drive_link",
        },
        {
            logoUrl: oracle_vector,
            title: "Oracle AI Vector Search",
            issuer: "Oracle",
            issuedDate: "May 12, 2025",
            expiryDate: null,
            certificateLink: "https://drive.google.com/file/d/1cVjCp5_UtfdzjI9CKCnjZ7sDqJTQXCG1/view?usp=drive_link",
        },
        {
            logoUrl: "https://img.theweek.in/content/dam/week/week/news/biz-tech/images/2025/3/25/Deloitte-new.jpg",
            title: "Technology Virtual Internship",
            issuer: "Deloitte (via Forage)",
            issuedDate: "June 11, 2025",
            certificateLink: "https://drive.google.com/file/d/1s1SrRhki_rPLd2iFIeIjBUKiiEPOzPRW/view?usp=drive_link",
        },
    ];

    return (
        <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mr-[150px] lg:ml-[150px]">
                {/* Section Header */}
                <div className="flex items-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-left whitespace-nowrap">
                        Certifications
                    </h2>
                    <div className="flex-grow h-px ml-4 bg-neutral-500"></div>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                    {certificationsData.map((cert, index) => (
                        <CertificateCard key={index} {...cert} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
