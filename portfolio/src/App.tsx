import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import Work from './pages/work';
import SkillsPage from './pages/skills';

function App() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-50 py-8 px-8 md:px-16">
        <nav className="flex justify-end space-x-8">
          <Link to="/" className="text-nav-text text-xl lg:text-nav-lg leading-none">home</Link>
          <Link to="/work" className="text-nav-text text-xl lg:text-nav-lg leading-none">work</Link>
          <Link to="/skills" className="text-nav-text text-xl lg:text-nav-lg leading-none">skills</Link>
          <Link to="/about" className="text-nav-text text-xl lg:text-nav-lg leading-none">about</Link>
          <Link to="/contact" className="text-nav-text text-xl lg:text-nav-lg leading-none">contact</Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
