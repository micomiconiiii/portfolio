import React from 'react';
import portrait from '../../assets/mico-gdg.png';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-main-bg font-sans text-nav-text min-h-screen flex flex-col">
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-blur-2 rounded-full opacity-30 blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-blur-1 rounded-full opacity-50 blur-[100px]"></div>

      <div className="relative container mx-auto px-8 md:px-16 flex-grow flex flex-col">
        {/* Navbar */}
        <header className="py-8">
          <nav className="flex justify-end space-x-8">
            <a href="#work" className="text-nav-text text-xl lg:text-nav-lg leading-none">work</a>
            <a href="#skills" className="text-nav-text text-xl lg:text-nav-lg leading-none">skills</a>
            <a href="#about" className="text-nav-text text-xl lg:text-nav-lg leading-none">about</a>
            <a href="#contact" className="text-nav-text text-xl lg:text-nav-lg leading-none">contact</a>
          </nav>
        </header>

        {/* Hero Section */}
        
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 grow">
            {/* Left Column: Image */}
            <div className="flex justify-center flex-grow flex items-end">
              <img 
                src={portrait} 
                alt="Portrait of Mico Abas" 
                className="rounded-lg w-full h-auto max-w-sm md:max-w-md"
              />
            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <p className="text-2xl text-[#CA26FF]">Hi! I'm</p>
              <h1 className="text-7xl font-bold my-2">
                <span className="bg-text-gradient text-transparent bg-clip-text">
                  Mico Abas
                </span>
              </h1>
              <p className="text-3xl text-[#CA26FF]">UI/UX Designer</p>
              
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="bg-button-gradient text-white font-bold py-3 px-6 rounded-lg">
                  View my work
                </button>
                <button className="text-nav-text border border-nav-text font-bold py-3 px-6 rounded-lg bg-transparent">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
   
      </div>
    </div>
  );
};

export default LandingPage;
