import { motion } from 'framer-motion';
import MicoProfileImage from '../../assets/mico-pxm.jpg'; // <-- 1. Import the image


const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);


// --- Framer Motion Animation Variants ---
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' as const } },
};

// --- Main About Page Component ---
const AboutPage = () => {
  return (
    <div className="bg-main-bg font-sans text-nav-text min-h-screen p-12 relative overflow-hidden">
      
      {/* Background Gradient Blobs (Copied from other pages) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-blur-2 rounded-full opacity-30 blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-blur-1 rounded-full opacity-50 blur-[100px]"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-blur-1 rounded-full opacity-20 blur-[90px]"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-blur-2 rounded-full opacity-40 blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-blur-1 rounded-full opacity-20 blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-blur-2 rounded-full opacity-30 blur-[100px]"></div>

      <div className="container mx-auto relative">
        {/* Gradient Heading */}
        <h2
            className="text-5xl font-bold text-center mb-4 mt-10 bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #465EFB, #E845A3)' }}
            >
            About Me
            </h2>

        {/* --- Main Content Card --- */}
        <motion.div
          className="
            relative rounded-lg overflow-hidden 
            border border-gray-600/30       
            bg-white/10                     
            backdrop-blur-xl                
            shadow-lg
            max-w-5xl mx-auto
          "
          variants={cardVariants}
          initial="hidden"
          animate="show"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* --- Left Column: Photo and Links --- */}
            <div className="md:col-span-1 p-8 flex flex-col items-center md:items-start">
              <img
                src={MicoProfileImage} // <-- 2. Use the imported image variable
                alt="Jhondel Mico Abas"
                className="rounded-full w-48 h-48 md:w-full md:h-auto md:rounded-lg object-cover shadow-md mb-8"
              />
              <div className="w-full space-y-3">
                {/* --- Social Links Removed --- */}
                <a href="/CV-Abas-2025.pdf" download="CV-Abas-2025.pdf" className="flex items-center gap-3 text-[#3d3d3d] hover:text-cyan-600 transition-colors">
                  <DownloadIcon />
                  <span className="font-medium">Download Resume</span>
                </a>
              </div>
            </div>

            {/* --- Right Column: Bio Narrative --- */}
            <div className="md:col-span-2 p-8 md:pl-0">
              <h3 className="text-3xl font-bold text-[#3d3d3d] mb-4">
                Hello! I'm Mico Abas.
              </h3>
              <div className="space-y-4 text-[#3d3d3d] text-base leading-relaxed">
                <p>
                  I'm a developer, designer, and community leader currently studying Information Technology at the Technological University of the Philippines-Manila as a DOST-SEI Scholar.
                </p>
                <p>
                  My passion lies at the intersection of beautiful design and functional technology. I'm not just focused on <strong>how</strong> to build an app, but <strong>why</strong> we're building it and <strong>who</strong> we're building it for. This led me to my specific interest in UI/UX, where I've had the privilege to work as a System Analyst and UI/UX Designer for the <strong>DOST</strong> and as a Graphic Artist for <strong>Security Bank</strong>.
                </p>
                <p>
                  I believe a great design deserves to be brought to life. I build full-stack web applications using the <strong>SERN (SQL, Express, React, NodeJS)</strong> stack and create cross-platform mobile apps with <strong>Flutter, Dart,</strong> and <strong>Firebase</strong>.
                </p>
                <p>
                  Beyond code, I'm deeply committed to community. As the Lead/President of the <strong>Google Developer Groups on Campus (GDGoC)</strong>, I organize hackathons, workshops, and summits to help empower my fellow students and bridge the gap between technology and other fields.
                </p>
                <p className="font-semibold pt-2">
                  I'm always open to new opportunities and interesting projects. Feel free to connect!
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;