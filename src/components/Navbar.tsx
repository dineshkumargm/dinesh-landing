import React from 'react';
import { Link2, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

export default function Navbar({ isDark, toggleDark }: NavbarProps) {
  return (
    <nav className="w-full px-6 py-5 flex items-center justify-between max-w-7xl mx-auto z-50 relative">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-800 dark:bg-white rounded-md flex items-center justify-center text-white dark:text-gray-900 font-bold">
          <Link2 className="w-5 h-5 transform rotate-45" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-gray-900 dark:text-white">Centillion Labs</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
        <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Talent</a>
        <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Solutions</a>
        <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Insights</a>
        <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Pricing</a>
      </div>
      <div className="flex items-center gap-6">
        <button 
          onClick={toggleDark}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <a className="text-sm font-semibold text-gray-900 dark:text-white hidden sm:block" href="#">Log In</a>
        <a className="px-5 py-2.5 bg-primary dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg text-sm hover:opacity-90 transition-opacity shadow-lg shadow-gray-200/50 dark:shadow-none" href="#">
          Join Now
        </a>
      </div>
    </nav>
  );
}
