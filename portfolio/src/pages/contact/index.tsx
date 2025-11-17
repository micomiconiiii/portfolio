import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../../firebaseConfig'; // Adjust path as needed
import { collection, addDoc, Timestamp } from 'firebase/firestore';

// --- Icons for Links ---
const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.339-.024-3.067-1.868-3.067-1.87 0-2.156 1.464-2.156 2.971v5.699h-3v-11h2.869v1.314h.04c.402-.763 1.385-1.562 2.829-1.562 3.02 0 3.578 1.987 3.578 4.569v6.679z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.034c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.109-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// --- Framer Motion Animation Variants ---
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' as const } },
};

// --- Main Contact Page Component ---
const ContactsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts

    try {
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        message,
        timestamp: Timestamp.now(),
      });
      
      setSubmittedMessage('Thank you for your message! I will get back to you soon.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting message: ', error);
      setSubmittedMessage('Failed to send message. Please try again later.');
    } finally {
      setLoading(false); // Set loading to false when submission ends
      setTimeout(() => {
        setSubmittedMessage('');
      }, 5000);
    }
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
        {/* Gradient Heading */}
        <h2
            className="text-5xl font-bold text-center mb-4 mt-10 bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #465EFB, #E845A3)' }}
            >
            Get in Touch
            </h2>
        <p className="text-center text-lg text-[#3d3d3d] max-w-3xl mx-auto mb-12">
          I'm always open to new opportunities and interesting projects. Let's connect!
        </p>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            
            {/* --- Left Column: Links --- */}
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-[#3d3d3d] mb-6">
                Connect with Me
              </h3>
              <div className="space-y-5">
                <a 
                  href="https://linkedin.com/in/micoabas/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 group"
                >
                  <span className="bg-text-gradient rounded-full p-3 transition-transform group-hover:scale-110">
                    <LinkedInIcon />
                  </span>
                  <div>
                    <span className="font-semibold text-lg text-[#3d3d3d]">LinkedIn</span>
                    <p className="text-sm text-[#3d3d3d]/80">linkedin.com/in/micoabas</p>
                  </div>
                </a>
                <a 
                  href="https://github.com/micomiconiiii" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 group"
                >
                  <span className="bg-text-gradient rounded-full p-3 transition-transform group-hover:scale-110">
                    <GitHubIcon />
                  </span>
                  <div>
                    <span className="font-semibold text-lg text-[#3d3d3d]">GitHub</span>
                    <p className="text-sm text-[#3d3d3d]/80">github.com/micomiconiiii</p>
                  </div>
                </a>
                <a 
                  href="mailto:jhondelmico.abas.320401@gmail.com" 
                  className="flex items-center gap-4 group"
                >
                  <span className="bg-text-gradient rounded-full p-3 transition-transform group-hover:scale-110">
                    <MailIcon />
                  </span>
                  <div>
                    <span className="font-semibold text-lg text-[#3d3d3d]">Email</span>
                    <p className="text-sm text-[#3d3d3d]/80">jhondelmico.abas.320401@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* --- Right Column: Inquiry Form --- */}
            <div className="p-8 md:p-12 bg-white/10 md:bg-transparent border-t border-gray-600/30 md:border-t-0 md:border-l">
              <h3 className="text-3xl font-bold text-[#3d3d3d] mb-6">
                Send an Inquiry
              </h3>
              {submittedMessage ? (
                <div className="text-[#3d3d3d] font-semibold bg-white-200/50 border border-green-400 rounded-lg p-4">
                  {submittedMessage}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#3d3d3d] mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md border border-gray-600/30 text-[#3d3d3d] focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-[#3d3d3d]/60"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#3d3d3d] mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md border border-gray-600/30 text-[#3d3d3d] focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-[#3d3d3d]/60"
                      placeholder="juan@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-M medium text-[#3d3d3d] mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md border border-gray-600/30 text-[#3d3d3d] focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-[#3d3d3d]/60"
                      placeholder="Your message here..."
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-text-gradient text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 hover:opacity-90"
                      disabled={loading} // Disable button when loading
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactsPage;