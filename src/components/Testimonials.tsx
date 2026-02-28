import React from 'react';
import { Star, Triangle, ToggleRight, CircleDashed, Network, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300 mb-6">Trusted by Innovators</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Accelerating Growth for <br/>
            <span className="text-indigo-600 dark:text-indigo-400">Market Leaders</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Leading CTOs and tech visionaries rely on Centillion Labs to scale their AI infrastructure and cloud capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <img alt="Portrait of James Wilson" className="w-12 h-12 rounded-lg object-cover bg-gray-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG2ZBixTYemJXH7kaGDS6HPWEcvPOOcwkd_qJBsBL-CXVLYmaHV-PiBE4OXhOd0FmD39YtVuQd5e-ErKszVueMh3k2gfr1QXG-zWidJ_1BzaTKenbsXX0c4cs34OAKGBsovL9C4SYx2z5RQ6stB6sANCOCoTklAaJM02Old5_CWrfRWX-HGD-ARza_wHwfHFiSogD4Do3AS1fX400XuJn0VBWqRs52FrBTclnugGEOZbSTkP-6255ZwkWe4h6fU0OZrl4-O9aS_WQ" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white leading-tight">James Wilson</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">CTO at FinScale</p>
                </div>
              </div>
              <span className="text-4xl text-gray-200 dark:text-gray-600 font-serif leading-none">”</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
              "Centillion Labs didn't just provide talent; they embedded a culture of innovation that transformed our legacy systems into a modern AI powerhouse in record time."
            </p>
          </div>
          
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl ring-1 ring-gray-100 dark:ring-gray-700 relative transform md:-translate-y-4">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent dark:from-white/5 dark:to-transparent opacity-50 rounded-2xl pointer-events-none"></div>
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="flex items-center gap-4">
                <img alt="Portrait of Elena Rodriguez" className="w-12 h-12 rounded-lg object-cover bg-gray-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAvGA5pe4JuPirYClNiUOAYkclMYwVSAey828M8VOAd1_EcOlSTefkdQJhJT7p-M-TKzSNbSyvfBc3YWEZl9ucdbF-jgFsw686XdhXiZLj7Pr4xsDMnxFF0MYnzroazezZC-0r3kc8XFL2qikhZPSN4FudohSztnRtxHmBkShHs9QR9TGibPrd-MoJzb7U5seTajSU-vSPqET2C3xOqvoMdYS7RCvZ_QpN5cEkXgJbv796Qgt54bwVjTrMl9T0JtcKN5bSGPd1FhM" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white leading-tight">Elena Rodriguez</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">VP Engineering, CloudFlow</p>
                </div>
              </div>
              <span className="text-4xl text-gray-200 dark:text-gray-600 font-serif leading-none">”</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
              "The depth of expertise in cloud architecture was immediately apparent. They helped us cut our infrastructure costs by 40% while doubling our processing speed."
            </p>
            <div className="flex gap-1 text-amber-400 relative z-10">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
          </div>
          
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <img alt="Portrait of Marcus Chen" className="w-12 h-12 rounded-lg object-cover bg-gray-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLU2_NxwThiIonBWVOK9FJriFlqSoa1kfiOrp3KvRgR9xlESqs3PD2GxImg_mnyY2fBZVroTM8DQB0bCBlScjApWplPEKk7ZZbcYcqcLee5XeXM9chSenN5tDCp23x7RugdNUFyjlarP52IV5j6HEA3CoEc4MGkScf-fNORpu8q7ftLZLsDR_WQamAPirYe0dRmu2YhS_s36TJfFPY9RtM__iaquuZyAvtNtpOJZncD74sBUsfq1vKTsHBEzjKKYcFypfug7QMF7U" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white leading-tight">Marcus Chen</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Director of AI, DataSphere</p>
                </div>
              </div>
              <span className="text-4xl text-gray-200 dark:text-gray-600 font-serif leading-none">”</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
              "Finding specialized AI talent is incredibly difficult. Centillion made it look easy, connecting us with top-tier specialists who hit the ground running on Day 1."
            </p>
          </div>
        </div>
        
        <div className="mt-20 border-t border-gray-200/60 dark:border-gray-700/60 pt-10">
          <p className="text-center text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-8">Powering Next-Gen Companies</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 dark:opacity-40">
            <div className="flex items-center gap-2 font-medium text-gray-600 dark:text-gray-400">
              <Triangle className="w-5 h-5" /> Dreamure
            </div>
            <div className="flex items-center gap-2 font-medium text-gray-600 dark:text-gray-400">
              <ToggleRight className="w-5 h-5" /> SWITCH.WIN
            </div>
            <div className="flex items-center gap-2 font-medium text-gray-600 dark:text-gray-400">
              <CircleDashed className="w-5 h-5" /> Blusphere
            </div>
            <div className="flex items-center gap-2 font-medium text-gray-600 dark:text-gray-400">
              <Network className="w-5 h-5" /> PinSpace
            </div>
            <div className="flex items-center gap-2 font-medium text-gray-600 dark:text-gray-400">
              <Sparkles className="w-5 h-5" /> Visionix
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
