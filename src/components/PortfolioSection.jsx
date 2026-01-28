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
  <>Hello! I’m <strong>Mohit Jain</strong>, a Computer Science undergraduate (2027) from India with a strong interest in
  <strong> Artificial Intelligence and Machine Learning</strong>. I enjoy working with data and building intelligent
  systems that can solve real-world problems. My foundation in
  <strong> data structures, algorithms, and object-oriented programming</strong> helps me understand how things work
  beyond just using libraries.</>
)}

{index === 1 && (
  <>I have hands-on experience in <strong>machine learning and computer vision</strong>.
  I was a <strong>Top 40 Finalist</strong> at the <strong>BuildWithDelhi 2.0</strong> hackathon, where I worked on a
  <strong> YOLOv8-based safety detection system</strong>. During the project, I handled data preparation,
  model training, and evaluation, and learned how strongly model performance depends on data quality and tuning.</>
)}

{index === 2 && (
  <>In 2025, I was <strong>selected for the Amazon ML Summer School (MLSS)</strong>, a competitive program focused on
  strengthening machine learning fundamentals. I have also completed certifications such as
  <strong>Google Cloud Associate Cloud Engineer</strong>, <strong>Azure AI Fundamentals</strong>, and
  <strong>NVIDIA Transformer-Based NLP</strong>, which helped me understand how ML systems are built and used in practice.</>
)}
{index === 3 && (
  <>Along with ML, I build <strong>full-stack applications</strong> to turn ideas into working products.
  I’ve developed web applications with REST APIs, databases, and dashboards, which helps me connect
  <strong>machine learning models with real-world use cases</strong>. I like learning deeply, improving step by step,
  and building things that are simple, reliable, and useful.</>
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
