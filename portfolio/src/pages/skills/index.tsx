    import React, { useState } from 'react';
    import { motion } from 'framer-motion';

    const LargeDesignIcon = () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M13 5H9V3h4v2zM5 15H3v4h2v-4z" />
    </svg>
    );
    const LargeCodeIcon = () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
    );
    const LargeLeadershipIcon = () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M17 20h5v-2a3 3 0 00-5.356-2.356M17 20H7m10 0v-2c0-.653-.084-1.284-.23-1.88M7 20H2v-2a3 3 0 015.356-2.356M7 20v-2c0-.653.084-1.284.23-1.88m6.54 0A3.001 3.001 0 0012 15c-1.657 0-3 1.343-3 3v.12M12 12a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
    );
    const LargeFoundationIcon = () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 6.253v13.5M8.25 6.253l-3.026 2.92c-.406.392-.406 1.022 0 1.414l4.242 4.119M15.75 6.253l3.026 2.92c.406.392.406 1.022 0 1.414l-4.242 4.119" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M3 3h18M3 21h18" />
    </svg>
    );


    // --- REFACTORED Skill Pill Component (Clear Glass) ---
    interface SkillPillProps {
    icon?: React.ReactNode;
    name: string;
    }

    const SkillPill: React.FC<SkillPillProps> = ({ icon, name }) => (
    <div className="
        flex items-center gap-2 
        bg-white/15                
        backdrop-blur-md             
        rounded-lg 
        px-3 py-1.5 
        border border-white/20     
    ">
        {icon}
        <span className="text-[#3d3d3d] text-xs font-medium">{name}</span>
    </div>
    );

    // --- REFACTORED Pillar Card Component (New Layout) ---
    interface PillarCardProps {
    largeIcon: React.ReactNode;
    title: string;
    description: string;
    skills: { name: string; items: string[] }[];
    }

    const PillarCard: React.FC<PillarCardProps> = ({ largeIcon, title, description, skills }) => (
    <div className="
        relative flex flex-col rounded-lg overflow-hidden 
        border border-gray-600/30       
        bg-white/10                     
        backdrop-blur-xl                
        shadow-lg
        h-full
        p-6 /* Padding on the main card */
        text-center /* Center-align all content */
    ">
        {/* 1. Big Icon */}
        <div className="flex justify-center text-[#3d3d3d] opacity-50 my-4">
        <div className="w-24 h-24">
            {largeIcon}
        </div>
        </div>

        {/* 2. Subject */}
        <h3 className="text-2xl font-bold text-[#3d3d3d] mb-4">{title}</h3>

        {/* 3. Rest of Content */}
        <p className="text-[#3d3d3d] text-sm mb-6">{description}</p>
        
        <div className="mt-auto"> {/* Pushes skills to the bottom */ }
        {skills.map((group) => (
            <div key={group.name} className="mb-4">
            <h4 className="text-sm font-semibold text-[#3d3d3d]/70 mb-3 uppercase tracking-wider">{group.name}</h4>
            <div className="flex flex-wrap gap-2 justify-center">
                {group.items.map((item) => (
                <SkillPill key={item} name={item} />
                ))}
            </div>
            </div>
        ))}
        </div>
    </div>
    );
   
    const pillars = [
    {
        largeIcon: <LargeDesignIcon />,
        title: "UI/UX & Product Design",
        description: "My specific interest and the foundation of all my projects. I focus on creating intuitive, clean, and user-centric designs.",
        skills: [
        { name: 'Core Skills', items: ['User Research', 'UI Design', 'Graphic Design'] },
        { name: 'Tools of the Trade', items: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva'] }
        ]
    },
    {
        largeIcon: <LargeCodeIcon />,
        title: "Development (Web & Mobile)",
        description: "I bring designs to life using modern technologies, building full-stack applications from the database to the frontend.",
        skills: [
        { name: 'Web Dev', items: ['React', 'JavaScript', 'NodeJS', 'Express', 'SERN Stack'] },
        { name: 'Mobile Dev', items: ['Flutter', 'Dart', 'FlutterFlow'] },
        { name: 'Databases & Cloud', items: ['Firebase', 'SQL', 'PostgreSQL', 'Google Cloud', 'Gemini API'] }
        ]
    },
    {
        largeIcon: <LargeLeadershipIcon />,
        title: "Leadership & Community",
        description: "Technology isn't just about code; it's about people. I manage projects, inspire teams, and communicate complex ideas.",
        skills: [
        { name: 'Core Skills', items: ['Community Leadership', 'Project Management', 'Communication', 'Team Collaboration'] },
        { name: 'Highlights', items: ['GDGC Lead', 'Event Organization', 'Business Pitching'] }
        ]
    },
    {
        largeIcon: <LargeFoundationIcon />,
        title: "Technical Foundations",
        description: "The core programming languages I've used for academic projects and solving complex problems.",
        skills: [
        { name: 'Languages & Concepts', items: ['Java (OOP)', 'C++ (OOP, Data Structures)', 'C', 'Python'] }
        ]
    }
    ];

    // --- Main Skills Page Component ---
    const SkillsPage = () => {
    const [currentPillar, setCurrentPillar] = useState(0);

    const prevPillar = () => {
        setCurrentPillar((prev) => (prev === 0 ? pillars.length - 1 : prev - 1));
    };

    const nextPillar = () => {
        setCurrentPillar((prev) => (prev === pillars.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="bg-main-bg font-sans text-nav-text min-h-screen p-12 relative overflow-hidden">
        
        {/* Background Gradient Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-blur-2 rounded-full opacity-30 blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-blur-1 rounded-full opacity-50 blur-[100px]"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-blur-1 rounded-full opacity-20 blur-[90px]"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-blur-2 rounded-full opacity-40 blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-blur-1 rounded-full opacity-20 blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-blur-2 rounded-full opacity-30 blur-[100px]"></div>

        <div className="container mx-auto relative">
              <h2
            className="text-5xl font-bold text-center mb-4 mt-10 bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #465EFB, #E845A3)' }}
            >
            My Skills and Expertise
            </h2>


            <p className="text-center text-lg text-[#3d3d3d] max-w-3xl mx-auto mb-12">
            I love the entire product journey, from the first idea and user research all the way to a fully developed, polished application.
            </p>

            {/* --- 4-Pillar Carousel Section --- */}
            <div className="relative max-w-4xl mx-auto mb-16">
            
            {/* Carousel Viewport */}
            <div className="overflow-hidden relative">
                {/* Carousel Track */}
                <motion.div
                className="flex"
                animate={{ x: `-${currentPillar * 100}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                {pillars.map((pillar, index) => (
                    <div key={index} className="w-full flex-shrink-0" style={{ minWidth: '100%' }}>
                    <div className="p-4"> 
                        <PillarCard
                        largeIcon={pillar.largeIcon}
                        title={pillar.title}
                        description={pillar.description}
                        skills={pillar.skills}
                        />
                    </div>
                    </div>
                ))}
                </motion.div>
            </div>

            {/* Carousel Arrows */}
            <button
                onClick={prevPillar}
                className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-2 text-[#3d3d3d] hover:bg-white/40 transition-all z-10"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
                onClick={nextPillar}
                className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-2 text-[#3d3d3d] hover:bg-white/40 transition-all z-10"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-3 mt-6">
                {pillars.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentPillar(index)}
                    className={`w-3 h-3 rounded-full transition-all
                    ${currentPillar === index ? 'bg-text-gradient' : 'bg-gray-400/50'}
                    `}
                />
                ))}
            </div>
            </div>

        </div>
        </div>
    );
    };

    export default SkillsPage;