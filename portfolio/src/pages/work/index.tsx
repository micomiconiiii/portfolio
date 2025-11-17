import React, { useState } from 'react';
import { motion } from 'framer-motion'; 

// Asset Imports
import SinagPreview from '../../assets/Sinag-preview.png';
import TuroPreview from '../../assets/turo-preview.png';
import Clinident from '../../assets/Clinident.png';
import Akbai from '../../assets/akbai.png';
import Kifikofi from '../../assets/kifikofi.png';
import Pims from '../../assets/pims.png';

// --- FULL Project Data ---
const projects = [
  {
    title: 'Sinag',
    description: 'An AI-powered Smart Energy Tracking System with Blockchain Integration.',
    imageUrl: SinagPreview,
    tags: ['React', 'Thirdweb', 'Blockchain'],
    type: 'web',
    liveUrl: '#', 
    repoUrl: 'https://github.com/AlexGaledo/Sinag.git'
  },
  {
    title: 'Turo',
    description: 'A swipe-based mentorship matching platform connecting mentors and mentees.',
    imageUrl: TuroPreview,
    tags: ['Flutter', 'Firebase'],
    type: 'mobile',
    repoUrl: 'https://github.com/micomiconiiii/Turo'
  },
  {
    title: 'Clinident',
    description: 'A UI/UX prototype for a dental clinic management system.',
    imageUrl: Clinident,
    tags: ['Figma', 'UI/UX'],
    type: 'uiux',
    liveUrl: 'https://www.figma.com/proto/QEuQ6ha2MtJfK1Ps0RPAG4/Mico-Dent?node-id=9-61&t=H34hdK2jKxVVrzp4-1&scaling=contain&content-scaling=fixed&page-id=0%3A1'
  },
  { // <-- This was missing
    title: 'AkBai',
    description: 'A mobile app that assists tourists in their travels.',
    imageUrl: Akbai,
    tags: ['FlutterFlow', 'Mobile'],
    type: 'mobile',
    liveUrl: '#',
  },
  { // <-- This was missing
    title: 'Kifi Kofi',
    description: 'A UI/UX design for a coffee shop application.',
    imageUrl: Kifikofi,
    tags: ['Figma', 'UI/UX'],
    type: 'uiux',
    liveUrl: 'https://www.figma.com/proto/p2G4TdFEeFbgBcwy7snxRa/KOFI?node-id=120-72&p=f&t=C8X4OoxRWBB2CLVf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=76%3A23&show-proto-sidebar=1'
  },
  { // <-- This was missing
    title: 'Project and Inventory Management System',
    description: 'A UI/UX design for a project management information system of DOST.',
    imageUrl: Pims,
    tags: ['Figma', 'UI/UX', 'DOST'],
    type: 'uiux',
    liveUrl: '#',
  },
];

// --- Framer Motion Animation Variants ---
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// --- Project Card Component Interface ---
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

// --- REFACTORED ProjectCard Component (Visible Text & Gradient Tags) ---
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  repoUrl,
}) => {
  return (
    <div
      className="
        group rounded-lg overflow-hidden 
        border border-gray-600/30       
        bg-white/10                     
        backdrop-blur-xl                
        shadow-lg
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-cyan-400/20
        flex flex-col                   
      "
    >
      {/* Image container for clipping the zoom */}
      <div className="overflow-hidden h-64">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content Area (Always Visible) */}
      <div 
        className="
          p-6 flex flex-col justify-between 
          flex-1                           
        "
      >
        {/* Top part: Title and Description */}
        <div>
          {/* Changed title to a darker color for visibility */}
          <h3 className="text-xl font-bold text-[#3d3d3d] mb-2">{title}</h3> 
          {/* Changed description to a darker color for visibility */}
          <p className="text-[#3d3d3d] text-sm mb-4">{description}</p> 
        </div>

        {/* Bottom part: Tags and Links */}
        <div>
          {/* Tech Tags (Pills) */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                // Apply the gradient background to the tags
                className="
                  bg-text-gradient text-white  /* Uses the same gradient as filter buttons */
                  text-xs font-medium px-3 py-1 rounded-full
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex gap-4 items-center">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                // Changed link color for visibility, kept hover for interaction
                className="font-medium text-[#3d3d3d] hover:text-cyan-600 transition-colors" 
              >
                Live Demo
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                // Changed link color for visibility, kept hover for interaction
                className="font-medium text-[#3d3d3d] hover:text-cyan-600 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main WorkPage Component ---
const WorkPage = () => {
  const [filter, setFilter] = useState('all'); 

  const filteredProjects = projects.filter((project) =>
    filter === 'all' ? true : project.type === filter
  );

  const getButtonClass = (type: string) => {
    return filter === type
      ? 'bg-text-gradient text-white' 
      : 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-300'; 
  };

  return (
    <div className="bg-main-bg font-sans text-nav-text min-h-screen p-12 relative">
      
      {/* Background Gradient Blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-blur-2 rounded-full opacity-30 blur-[100px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-blur-2 rounded-full opacity-30 blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-blur-1 rounded-full opacity-50 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-blur-2 rounded-full opacity-40 blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-blur-1 rounded-full opacity-20 blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto relative">
        <h2
            className="text-5xl font-bold text-center mb-4 mt-10 bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #465EFB, #E845A3)' }}
            >
            My Work
            </h2>

        {/* --- Filter Buttons --- */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-lg font-medium transition-all ${getButtonClass('all')}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-5 py-2 rounded-lg font-medium transition-all ${getButtonClass('web')}`}
          >
            Web Dev
          </button>
          <button
            onClick={() => setFilter('mobile')}
            className={`px-5 py-2 rounded-lg font-medium transition-all ${getButtonClass('mobile')}`}
          >
            Mobile Dev
          </button>
          <button
            onClick={() => setFilter('uiux')}
            className={`px-5 py-2 rounded-lg font-medium transition-all ${getButtonClass('uiux')}`}
          >
            UI/UX
          </button>
        </div>

        {/* --- Animated Project Grid --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          animate="show"
          key={filter} 
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                liveUrl={project.liveUrl}
                repoUrl={project.repoUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkPage;