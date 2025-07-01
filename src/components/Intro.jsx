// src/components/Intro.jsx
import { useEffect } from "react";

const name = "MOHIT JAIN";

const Intro = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const chars = name.split("");

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center relative">
      <style>{`
        @keyframes blinkColor {
          0% { color: #f87171; opacity: 1; }     /* red-400 */
          25% { color: #60a5fa; opacity: 0.8; }  /* blue-400 */
          50% { color: #34d399; opacity: 0.6; }  /* green-400 */
          75% { color: #facc15; opacity: 0.8; }  /* yellow-400 */
          100% { color: #f87171; opacity: 1; }   /* red-400 */
        }
      `}</style>

      <div className="flex space-x-1">
        {chars.map((char, idx) => (
          <span
            key={idx}
            className="text-5xl md:text-9xl font-extrabold uppercase"
            style={{
              fontFamily: '"Special Gothic Expanded One", , sans-serif',
              animation: `blinkColor 2s infinite`,
              animationDelay: `${idx * 0.15}s`,
              animationTimingFunction: "ease-in-out",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Intro;
