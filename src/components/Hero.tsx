import React from 'react';
import { ArrowRight, Send, Cloud, Brain, Terminal, User, BadgeCheck, List, Globe, Building2, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="relative z-20 max-w-2xl">
          <h1 className="font-display text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-gray-900 dark:text-white">
            Access World-Class <br/>
            <span className="text-gradient">AI & Cloud Talent</span> <br/>
            <span className="text-gray-800 dark:text-gray-200">Accelerated Innovation</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
            Connect with the top 1% of engineers and researchers. Scale your AI initiatives instantly with vetted experts.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg text-base font-medium shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
              Start Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="inline-flex items-center gap-3 bg-white/60 dark:bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 dark:border-white/10 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                <Send className="w-3 h-3 text-purple-600 dark:text-purple-400 transform -rotate-45" />
                Sarah just joined
              </span>
            </div>
          </div>
        </div>
        
        <div className="relative h-[500px] w-full flex items-center justify-center lg:translate-x-10">
          <div className="orbit-circle w-[200px] h-[200px] dark:border-white/10"></div>
          <div className="orbit-circle w-[400px] h-[400px] dark:border-white/10"></div>
          <div className="orbit-circle w-[600px] h-[600px] dark:border-white/10"></div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <div className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-1">100+</div>
            <div className="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase">Experts</div>
          </div>
          
          <div className="floating-icon w-14 h-14 top-[58%] left-[45%] text-blue-500" style={{ animationDelay: '0s' }}>
            <Cloud className="w-6 h-6" />
          </div>
          <div className="floating-icon w-12 h-12 top-[65%] left-[25%] text-purple-500" style={{ animationDelay: '1.5s' }}>
            <Brain className="w-6 h-6" />
          </div>
          <div className="floating-icon w-14 h-14 top-[45%] left-[10%] text-pink-500" style={{ animationDelay: '2.5s' }}>
            <Terminal className="w-6 h-6" />
          </div>
          <div className="floating-icon w-12 h-12 top-[25%] left-[75%] overflow-hidden p-1 bg-white dark:bg-gray-800" style={{ animationDelay: '0.5s' }}>
            <div className="w-full h-full bg-emerald-100 dark:bg-emerald-900 rounded-md flex items-center justify-center text-emerald-600 dark:text-emerald-300">
              <User className="w-5 h-5" />
            </div>
          </div>
          <div className="floating-icon w-14 h-14 top-[80%] left-[65%] overflow-hidden p-1 bg-white dark:bg-gray-800" style={{ animationDelay: '3s' }}>
            <img alt="Abstract 3d shape" className="w-full h-full object-cover rounded-md opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWxNDYu2yX5IHgZbwjEQR7Wg3jp0ztovi9F-goqk07efadGaXtpfJoTHSIdKPotQ9BQi1YyMCh8loNcf4vh6RQo31ZoRFyJDoQ3CvwpDwntxEfQ-8BnoAq6DzQokM8ZASNHOkbVNqonb4xDXLKCxlEpW_6BghGejBgkzKjZNHUniQCPfut5n4vF-l1Yz5rnNvCqYmmRDlRSnGSvG1he3tmUqvfYb349fddtkGUTauQcZl77hJ2sGmgsTXBJwNPCjI7DNN22FrcSjA" />
          </div>
          <div className="floating-icon w-12 h-12 top-[20%] left-[80%] overflow-hidden p-1 bg-white dark:bg-gray-800" style={{ animationDelay: '2s' }}>
            <div className="w-full h-full bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-300">
              <BadgeCheck className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-lg text-gray-700 dark:text-gray-300">
            <List className="w-6 h-6" /> DataFlow
          </div>
          <div className="flex items-center gap-2 font-bold text-lg text-gray-700 dark:text-gray-300">
            <Globe className="w-6 h-6" /> CloudCore
          </div>
          <div className="flex items-center gap-2 font-bold text-lg text-gray-700 dark:text-gray-300">
            <Building2 className="w-6 h-6" /> NexusAI
          </div>
          <div className="flex items-center gap-2 font-bold text-lg text-gray-700 dark:text-gray-300">
            <Layers className="w-6 h-6" /> StrataSphere
          </div>
        </div>
      </div>
    </header>
  );
}
