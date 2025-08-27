'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function NavigationBar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 transition-all duration-300 w-full ${isScrolled ? 'shadow-md' : ''}`}
    >
      <div 
        className={` py-4 transition-all duration-300 ${
          isScrolled 
            ? 'glass-effect backdrop-blur-lg rounded-lg mx-24' 
            : 'bg-transparent'
        }`}
      >
        <div className="container  mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-foreground">MyAIVerse</span>
          </div>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary transition-colors duration-200 border border-border/50"
            aria-label="Toggle theme"
            disabled={!mounted}
          >
            {!mounted ? (
              <div className="w-5 h-5" />
            ) : theme === 'light' ? (
              <Moon className="w-5 h-5 text-muted-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}