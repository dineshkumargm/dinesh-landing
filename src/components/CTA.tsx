import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden glass-panel bg-white/40 dark:bg-gray-800/40 border border-white/50 dark:border-gray-700 shadow-2xl p-12 md:p-20 text-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-b from-purple-100/50 to-transparent dark:from-purple-900/20 blur-3xl -z-10"></div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Join the <span className="text-gradient">Future</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Ready to revolutionize your workflow? Partner with Centillion Labs and unlock the potential of enterprise-grade AI and cloud solutions today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Consult an Expert <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white dark:bg-transparent dark:border dark:border-gray-500 dark:text-white text-gray-800 rounded-lg font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-600">
              View Solutions <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
