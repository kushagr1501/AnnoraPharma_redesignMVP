import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';

import imgB3 from '../assets/B3.PNG';
import imgB4 from '../assets/B4.PNG';
import imgB7 from '../assets/B7.PNG';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
};

export default function NewsEvents() {
  const newsItems = [
    {
      title: "Annora Pharma Expands Distribution Network",
      date: "April 2026",
      description: "Annora Pharma announces partnerships with new distributors across the Middle East and North Africa, strengthening our commitment to accessible healthcare.",
      img: imgB3,
      tag: "Expansion"
    },
    {
      title: "New Anti-Diabetic Range Launch",
      date: "March 2026",
      description: "We are proud to introduce our latest line of anti-diabetic medications, developed to provide affordable treatment options for patients across the region.",
      img: imgB4,
      tag: "Product Launch"
    },
    {
      title: "Annual Healthcare Summit 2026",
      date: "February 2026",
      description: "Annora Pharma participated in the UAE Healthcare Summit, showcasing our latest innovations in branded generic pharmaceuticals.",
      img: imgB7,
      tag: "Event"
    },
  ];

  return (
    <div className="w-full relative bg-[#FAFAF8] min-h-screen">
      <PageBanner title="News & Events" />

      <section className="w-full py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0e7065]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 md:mb-20 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-[#0e7065] text-5xl md:text-6xl lg:text-[4.5rem] leading-none tracking-wide mb-6">
              Latest Updates
            </h2>
            <div className="w-16 h-[2px] bg-[#e69882] mx-auto mb-8" />
            <p className="text-[#1a1a1a]/70 text-xl lg:text-[1.4rem] font-sans leading-relaxed">
              Stay informed about Annora Pharma's latest developments, product launches, and community initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group cursor-pointer">
                <div className="bg-white border border-[#1a1a1a]/5 rounded-[24px] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(14,112,101,0.15)] transition-all duration-500 h-full flex flex-col">
                  <div className="h-[240px] w-full relative overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-[#0e7065] text-white font-sans text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="font-sans text-[#0e7065] text-xs font-bold tracking-wider uppercase mb-3">{item.date}</span>
                    <h3 className="font-display text-xl text-[#1a1a1a] mb-3 group-hover:text-[#0e7065] transition-colors duration-300">{item.title}</h3>
                    <p className="font-sans text-[#1a1a1a]/60 text-sm leading-relaxed flex-1">{item.description}</p>
                    <div className="w-8 h-[2px] bg-[#e69882] mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
