import { Routes, Route, Link, useLocation } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import Work from './pages/work';
import SkillsPage from './pages/skills';
import AboutPage from './pages/about';
import ContactsPage from './pages/contact';

// --- Navigation Items ---
const navItems = [
  { path: '/', name: 'home' },
  { path: '/work', name: 'work' },
  { path: '/skills', name: 'skills' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
];

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-50 py-6 px-8 md:px-16">
        <nav className="flex justify-end space-x-1 md:space-x-2">
          {navItems.map((item) => {
            const isActive = item.path === location.pathname;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative text-lg leading-none px-3 py-1.5 rounded-lg transition-colors
                  ${isActive ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#FFF380] to-[#CA26FF]' : 'text-nav-text hover:text-gray-700'}
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
