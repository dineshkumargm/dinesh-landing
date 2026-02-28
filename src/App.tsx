/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);

  return (
    <div className="font-sans antialiased text-gray-800 bg-background-light dark:bg-background-dark dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <div className="fixed inset-0 w-full h-full bg-mesh-gradient dark:bg-mesh-gradient-dark pointer-events-none -z-10"></div>
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
