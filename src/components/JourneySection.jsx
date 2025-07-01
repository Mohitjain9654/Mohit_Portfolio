import React, { useRef, useEffect, useState, useCallback } from 'react';

// Reusable Journey Item
const JourneyItem = ({ title, date, description, alignRight, isVisible }) => {
  return (
    <div className={`flex w-full ${alignRight ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex flex-col ${alignRight ? 'items-end pr-4 sm:pr-8 md:pr-12' : 'items-start pl-4 sm:pl-8 md:pl-12'} w-full md:w-1/2`}
      >
        <div
          className={`bg-neutral-800 border border-neutral-700 rounded-lg p-5 max-w-sm w-full shadow-lg
            transition-all duration-700 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <h3 className="text-teal-400 font-bold text-lg mb-2">{title}</h3>
          <p className="text-neutral-400 text-sm mb-3">{date}</p>
          <p className="text-neutral-300 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

const JourneySection = () => {
  const journeyData = [
    {
      title: 'B.Tech – Computer Science with Specialization in AIML',
      date: 'Manav Rachna International Institute Of Research And Studies (May 2023 - Present)',
      description: "Focused on full-stack development, artificial intelligence, and machine learning. Engaged in practical projects involving React.js, Node.js, MongoDB, and APIs.",
      alignRight: true,
    },
    {
      title: 'High School – PCM',
      date: 'Rawal International School, 2022-2023',
      description: "Completed high school with a focus on Physics, Chemistry, and Mathematics. Although I had no prior experience with coding, I was deeply fascinated by Artificial Intelligence and knew I wanted to pursue a career in it.",
      alignRight: false,
    },
  ];

  const itemRefs = useRef([]);
  const [itemVisibility, setItemVisibility] = useState(new Array(journeyData.length).fill(false));

  const setItemRef = useCallback((el, index) => {
    if (el) {
      itemRefs.current[index] = el;
    }
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = itemRefs.current.findIndex(ref => ref === entry.target);
        if (index !== -1) {
          setItemVisibility(prevVisibility => {
            const newVisibility = [...prevVisibility];
            newVisibility[index] = entry.isIntersecting;
            return newVisibility;
          });
        }
      });
    }, observerOptions);

    itemRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      itemRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto lg:ml-[100px] lg:mr-[100px]">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-300 mb-16 text-center">
          My Journey
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-neutral-700"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-teal-400"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-teal-400"></div>

          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center w-full my-10 relative transition-all duration-700 ease-out`}
              ref={(el) => setItemRef(el, index)}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-400 rounded-full z-10"></div>

              {/* Content */}
              <JourneyItem {...item} isVisible={itemVisibility[index]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
