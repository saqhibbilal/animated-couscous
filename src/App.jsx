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
      <div className="fixed inset-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Loading Portfolio...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
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

      {/* Theme Toggle Button */}
      <button
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
      </button>
    </div>
  );
}

export default App;
