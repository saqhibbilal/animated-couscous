import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Skills from './components/Skills';

import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { useScrollProgress } from './hooks/useScrollProgress';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const scrollProgress = useScrollProgress();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50" style={{backgroundColor: '#150317'}}>
        <div className="text-center">
          <div className="relative mb-8">
            {/* Sharp and Clean Loading Animation */}
            <div className="loading-container">
              <div className="loading-grid">
                <div className="loading-square"></div>
                <div className="loading-square"></div>
                <div className="loading-square"></div>
                <div className="loading-square"></div>
                <div className="loading-square"></div>
                <div className="loading-square"></div>
                <div className="loading-square"></div>
                <div className="loading-square"></div>
                <div className="loading-square"></div>
              </div>
            </div>
            
            {/* Loading text */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Loading Portfolio...
              </h2>
              <div className="flex justify-center space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
          
          {/* Custom CSS for sharp loading animation */}
          <style jsx>{`
            .loading-container {
              width: 80px;
              height: 80px;
              margin: 0 auto 2rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .loading-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 6px;
              width: 80px;
              height: 80px;
            }
            
            .loading-square {
              width: 20px;
              height: 20px;
              background: linear-gradient(45deg, #ffffff, #e0e0e0);
              border-radius: 3px;
              animation: pulse 1.5s ease-in-out infinite;
            }
            
            .loading-square:nth-child(1) { animation-delay: 0s; }
            .loading-square:nth-child(2) { animation-delay: 0.1s; }
            .loading-square:nth-child(3) { animation-delay: 0.2s; }
            .loading-square:nth-child(4) { animation-delay: 0.3s; }
            .loading-square:nth-child(5) { animation-delay: 0.4s; }
            .loading-square:nth-child(6) { animation-delay: 0.5s; }
            .loading-square:nth-child(7) { animation-delay: 0.6s; }
            .loading-square:nth-child(8) { animation-delay: 0.7s; }
            .loading-square:nth-child(9) { animation-delay: 0.8s; }
            
            @keyframes pulse {
              0%, 100% { 
                opacity: 0.3;
                transform: scale(0.8);
              }
              50% { 
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: '#100811'}}>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50" style={{backgroundColor: '#4B2650'}}>
        <div 
          className="h-full bg-blue-600 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <WorkHistory />
        <Education />
        <Certificates />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Theme Toggle Button - Commented out for dark mode only */}
      {/* <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      >
        {isDark ? (
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button> */}
    </div>
  );
}

export default App;
