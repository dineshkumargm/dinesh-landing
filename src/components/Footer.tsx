import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200/60 dark:border-gray-800 bg-white/30 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-800 dark:bg-white rounded-md flex items-center justify-center text-white dark:text-gray-900 font-bold text-sm">
            C
          </div>
          <span className="font-display font-bold text-lg text-gray-900 dark:text-white">Centillion Labs</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
          <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Solutions</a>
          <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Methodology</a>
          <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Case Studies</a>
          <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Careers</a>
          <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Privacy</a>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-500">
          © 2024 Centillion Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
