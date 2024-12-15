import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import MobileNav from './components/Layout/MobileNav';
import { useIsMobile } from './hooks/useIsMobile';
import { useStore } from './store/useStore';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Explore from './pages/Explore';
import Shorts from './pages/Shorts';
import Library from './pages/Library';

function App() {
  const { sidebarOpen, toggleSidebar } = useStore((state) => ({
    sidebarOpen: state.sidebarOpen,
    toggleSidebar: state.toggleSidebar,
  }));
  const isMobile = useIsMobile();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar onMenuClick={toggleSidebar} />
        {!isMobile && <Sidebar isOpen={sidebarOpen} />}
        <main 
          className={`pt-14 ${
            !isMobile && sidebarOpen ? 'md:pl-64' : ''
          } transition-all duration-300`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch/:videoId" element={<Watch />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </main>
        {isMobile && <MobileNav />}
      </div>
    </Router>
  );
}

export default App;