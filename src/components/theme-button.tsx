'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTheme(theme === 'light' ? 'dark' : 'light');
    
    // Reset animation after completion
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className='fixed top-4 right-4 z-50 rounded-full hover:scale-110 active:scale-95'
      aria-label='Toggle theme'
      disabled={!mounted}
    >
      {!mounted ? (
        <div className='w-4 h-4' />
      ) : theme === 'light' ? (
        <Moon 
          className='w-4 h-4 transition-all duration-300' 
          style={{
            animation: isAnimating ? 'theme-switch 0.5s ease-in-out' : undefined,
          }}
        />
      ) : (
        <Sun 
          className='w-4 h-4 transition-all duration-300' 
          style={{
            animation: isAnimating ? 'theme-switch 0.5s ease-in-out' : undefined,
          }}
        />
      )}
    </Button>
  );
}