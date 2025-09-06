import { useState, useEffect } from 'react';

export const useTheme = () => {
  // Force dark mode only - light mode commented out for future use
  const [isDark, setIsDark] = useState(true); // Always true for dark mode only
  
  // const [isDark, setIsDark] = useState(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme) {
  //     return savedTheme === 'dark';
  //   }
  //   return window.matchMedia('(prefers-color-scheme: dark)').matches;
  // });

  useEffect(() => {
    const root = window.document.documentElement;
    // Always use dark mode
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    
    // Original theme switching logic - commented out for future use
    // if (isDark) {
    //   root.classList.add('dark');
    //   localStorage.setItem('theme', 'dark');
    // } else {
    //   root.classList.remove('dark');
    //   localStorage.setItem('theme', 'light');
    // }
  }, [isDark]);

  // Toggle function commented out since we only use dark mode
  // const toggleTheme = () => {
  //   setIsDark(!isDark);
  // };

  return { isDark, toggleTheme: () => {} }; // Empty function for compatibility
}; 