import React, { useState, useEffect } from 'react';
import portrait from '../../assets/mico-gdg.png';
import { NavLink } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [
    "UI/UX Designer",
    "Frontend Developer",
    "Graphic Designer",
    "Web Developer",
    "Mobile Developer"
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, typingSpeed]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    let updated = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updated);

    if (isDeleting) {
      setTypingSpeed(prev => prev / 2);
    }

    if (!isDeleting && updated === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updated === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <div className="bg-main-bg font-sans text-nav-text min-h-screen flex flex-col overflow-hidden">

      {/* Background Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-blur-2 rounded-full opacity-30 blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-blur-1 rounded-full opacity-50 blur-[100px]"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-blur-1 rounded-full opacity-20 blur-[90px]"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-blur-2 rounded-full opacity-40 blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-blur-1 rounded-full opacity-20 blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-blur-2 rounded-full opacity-30 blur-[100px]"></div>

      {/* HERO CONTAINER */}
      <div className="relative container mx-auto px-8 md:px-16 flex flex-col min-h-screen">

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 min-h-screen items-stretch">

          {/* LEFT COLUMN — Image aligned to bottom */}
          <div className="relative flex items-end justify-center">
            <img
              src={portrait}
              alt="Portrait of Mico Abas"
              className="max-h-[95vh] md:max-h-[85vh] w-auto object-contain rounded-lg"
            />
          </div>

          {/* RIGHT COLUMN — Text content */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <p className="text-2xl text-[#CA26FF]">Hi! I'm</p>

            <h1 className="text-7xl font-bold my-2">
              <span className="bg-text-gradient text-transparent bg-clip-text">
                Mico Abas
              </span>
            </h1>

            <p className="text-3xl text-[#CA26FF]">
              <i>{text}</i>
            </p>

            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <NavLink to="/work" className="bg-button-gradient text-white font-bold py-3 px-6 rounded-lg">
                View my work
              </NavLink>

              <NavLink to="/contact" className="text-nav-text border border-nav-text font-bold py-3 px-6 rounded-lg bg-transparent">
                Get in touch
              </NavLink>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
