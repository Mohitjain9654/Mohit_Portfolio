import React, { useRef, useEffect, useState } from 'react'; // Import useRef, useEffect, useState
import mohitPortrait from "../assets/MyPortfolio.jpeg"; // Ensure this path is correct relative to this file
import ScrollRotatingSVG from "./ScrollRotatingSVG"

const PortfolioSection = () => {
  const paragraphRefs = useRef([]);

  const [paragraphVisible, setParagraphVisible] = useState([]);

  useEffect(() => {

    setParagraphVisible(new Array(paragraphRefs.current.length).fill(false));

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Find the index of the observed paragraph
        const index = paragraphRefs.current.findIndex(ref => ref === entry.target);
        if (index !== -1) {
          setParagraphVisible(prevVisibility => {
            const newVisibility = [...prevVisibility];
            newVisibility[index] = entry.isIntersecting; // Update visibility based on intersection
            return newVisibility;
          });
        }
      });
    }, observerOptions);

    // Observe each paragraph
    paragraphRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Cleanup function: disconnect the observer when the component unmounts
    return () => {
      paragraphRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
      observer.disconnect();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Helper function to assign ref and index to each paragraph dynamically
  const setParagraphRef = (el, index) => {
    if (el) {
      paragraphRefs.current[index] = el;
    }
  };

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 relative z-10 overflow-hidden">

  <ScrollRotatingSVG
    className="absolute left-1/4 top-2/3 w-[90%] sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 opacity-10 -z-10 pointer-events-none"
    initialRotation={0}
    rotationSpeedFactor={0.15}
  />

  <div className="max-w-7xl  lg:ml-[190px] lg:mr-[190px] mx-auto mb-12">
    {/* Title */}
    <div className="flex items-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold whitespace-nowrap">My Portfolio</h2>
      <div className="flex-grow h-px ml-4 bg-neutral-500"></div>
    </div>

    <div className="flex flex-col md:flex-row items-start md:space-x-8 lg:space-x-12">
      {/* Text Content */}
      <div className="w-full md:w-2/3 space-y-6">
        {[0, 1, 2, 3].map((index) => (
          <p
            key={index}
            ref={el => setParagraphRef(el, index)}
            className={`text-gray-300 text-base sm:text-lg leading-relaxed transition-all duration-700 ease-out ${paragraphVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${index > 0 ? `delay-${index * 100}` : ''}`}
          >
            {index === 0 && (
              <>Hello! I’m <strong>Mohit Jain</strong>, a Full Stack Developer from India with a strong passion
              for creating sleek, responsive, and high-performance web applications. With hands-on experience
              in modern technologies like <strong>React.js, Node.js, Express.js, MongoDB, MySQL</strong>, and tools like
              <strong> Vite, Tailwind CSS, Git</strong>, I build digital solutions that are as functional as they are beautiful.</>
            )}
            {index === 1 && (
              <>My projects range from <strong>smart agriculture platforms</strong> using AI APIs, to
              <strong> hospital management dashboards</strong>, to a <strong>vehicle retrofitting eligibility app </strong>
               that integrates both manual form inputs and camera-based detection. I love building
              solutions that solve real-world problems.</>
            )}
            {index === 2 && (
              <>I’ve actively participated in hackathons like <strong>BuildWithIndia</strong>, constantly challenging myself
              with innovative ideas and efficient execution. I also enjoy working with open APIs and building user-centric
              dashboards, admin panels, and recommendation systems.</>
            )}
            {index === 3 && (
              <>When I’m not coding, you’ll find me exploring new tech stacks, contributing to open-source projects,
              or designing clean UI/UX components. I believe in continuous learning, community collaboration,
              and building with purpose.</>
            )}
          </p>
        ))}
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[30%] flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="relative w-full max-w-xs sm:max-w-sm">
          <img
            src={mohitPortrait}
            alt="Mohit Jain"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
          <div
            className="absolute top-0 right-0 w-14 h-14 sm:w-16 sm:h-16 border-t-2 border-r-2 transform translate-x-2 -translate-y-2 rounded-tr-lg"
            style={{ borderColor: '#66FCF1' }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-14 h-14 sm:w-16 sm:h-16 border-b-2 border-l-2 transform -translate-x-2 translate-y-2 rounded-bl-lg"
            style={{ borderColor: '#66FCF1' }}
          ></div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default PortfolioSection;
