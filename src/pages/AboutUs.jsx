import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';

import imgB2 from '../assets/B2.PNG';

import iconExcellence from '../assets/phrama-excellence.svg';
import iconCountries from '../assets/countries-served.svg';
import iconProducts from '../assets/products.svg';
import iconMfg from '../assets/manufacturing-facilities.svg';
import iconEmployees from '../assets/emplyee-globe.svg';

const heteroAdvantageData = [
  { icon: iconExcellence, value: "30 +", label: "Years of pharmaceutical excellence" },
  { icon: iconCountries, value: "145 +", label: "Countries supplied" },
  { icon: iconProducts, value: "300 +", label: "Products in portfolio" },
  { icon: iconMfg, value: "36 +", label: "State-of-the-art manufacturing sites" },
  { icon: iconEmployees, value: "30,000+", label: "Employees worldwide" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
};

export default function AboutUs() {
  return (
    <div className="w-full relative bg-[#FAFAF8] min-h-screen">
      <PageBanner title="About Us" />

      {/* Who We Are */}
      <section className="w-full py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden">


        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 md:mb-20 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-[#1a1a1a] text-5xl md:text-6xl lg:text-[4.5rem] leading-none tracking-wide mb-6">
              Who We Are
            </h2>
            <div className="w-16 h-[2px] bg-[#e69882] mx-auto mb-8" />
            <p className="text-[#1a1a1a]/70 text-xl lg:text-[1.4rem] font-sans leading-relaxed">
              <span className="font-bold text-[#1a1a1a]">Annora</span>, a subsidiary of the <a href="https://www.hetero.com/" target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a] underline hover:text-[#e69882] transition-colors">Hetero Group</a>, which is one of the world’s leading producers of key Active Pharmaceutical Ingredients (APIs) and generic formulations, with a presence in 145+ countries and backed by more than 30 years of experience in the pharma sector. We endeavour to serve patients by transforming science and technology into therapies that improve health outcomes and enhance people’s lives.
            </p>
            <p className="text-[#1a1a1a]/70 text-xl lg:text-[1.4rem] font-sans leading-relaxed font-medium mt-6">
              A trusted partner of choice for multinational pharma companies and major global procurement bodies.
            </p>
          </motion.div>

          {/* The Hetero Advantage */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="w-full bg-white rounded-3xl border border-[#1a1a1a]/10 p-8 md:p-12 shadow-sm mt-8 relative">
            
            {/* SVG Filter to tint icons to #0e7065 */}
            <svg width="0" height="0" className="absolute">
              <filter id="green-tint">
                <feColorMatrix
                  type="matrix"
                  values="
                    0 0 0 0 0.0549
                    0 0 0 0 0.4392
                    0 0 0 0 0.3960
                    0 0 0 1 0
                  "
                />
              </filter>
            </svg>

            <h3 className="font-display text-[#1a1a1a] text-2xl md:text-3xl mb-10 text-left">
              The Hetero Advantage
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]/10">
              {heteroAdvantageData.map((item, index) => (
                <div key={index} className={`flex flex-col items-center px-4 ${index > 0 ? 'pt-8 lg:pt-0' : ''}`}>
                  <div className="h-16 md:h-20 mb-6 flex items-center justify-center">
                    <img 
                      src={item.icon} 
                      alt={item.label} 
                      className="h-full object-contain" 
                      style={{ filter: 'url(#green-tint)' }} 
                    />
                  </div>
                  <h4 className="font-display text-[#1a1a1a] text-3xl md:text-4xl mb-3">{item.value}</h4>
                  <p className="font-sans text-[#1a1a1a]/70 text-sm md:text-base leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
