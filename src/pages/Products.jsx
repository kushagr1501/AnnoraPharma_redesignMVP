import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';

import imgB1 from '../assets/B1.PNG';
import imgB2 from '../assets/B2.PNG';
import imgB3 from '../assets/B3.PNG';
import imgB4 from '../assets/B4.PNG';
import imgB5 from '../assets/B5.PNG';
import imgB6 from '../assets/B6.PNG';
import imgB7 from '../assets/B7.PNG';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
};

export default function Products() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Approx width of one card + gap
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const productCategories = [
    { name: "Anti-bacterial drugs", img: imgB1 },
    { name: "Anti-diabetic range", img: imgB2 },
    { name: "Anti-viral drugs", img: imgB3 },
    { name: "Cardiovascular drugs", img: imgB4 },
    { name: "CNS drugs", img: imgB5 },
    { name: "Erectile dysfunction", img: imgB6 },
    { name: "Gastrointestinal", img: imgB7 },
    { name: "Injectable range", img: imgB1 },
    { name: "Pain medications", img: imgB2 },
    { name: "Respiratory drugs", img: imgB3 },
    { name: "Urology drugs", img: imgB4 },
  ];

  return (
    <div className="w-full relative bg-[#FAFAF8] min-h-screen">
      <PageBanner title="Products" />



      {/* ─── Product Categories Section ─── */}
      <section className="w-full bg-[#FAFAF8] py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0e7065]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="mb-12 md:mb-16 text-center max-w-4xl mx-auto flex flex-col items-center"
          >
            <h2 className="font-display text-[#0e7065] text-5xl md:text-6xl lg:text-[4.5rem] leading-none tracking-wide mb-6">
              Therapeutic Segments
            </h2>
            <div className="w-16 h-[2px] bg-[#e69882] mx-auto mb-8" />
            <p className="text-[#1a1a1a]/70 text-xl lg:text-[1.4rem] font-sans leading-relaxed">
              Our current product basket caters to the most critical therapeutic segments such as:
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => scroll('left')} 
                className="p-3 rounded-full border border-[#0e7065]/20 text-[#0e7065] bg-white hover:bg-[#0e7065] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                aria-label="Scroll left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={() => scroll('right')} 
                className="p-3 rounded-full border border-[#0e7065]/20 text-[#0e7065] bg-white hover:bg-[#0e7065] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                aria-label="Scroll right"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </motion.div>

          {/* Horizontal Carousel for Products */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="w-full relative"
          >
            <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-16 pt-4 px-6 md:px-12 lg:px-24 xl:px-32 -mx-6 md:-mx-12 lg:-mx-24 xl:-mx-32 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {productCategories.map((product, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 20 } }
                  }}
                  className="flex-none w-[280px] md:w-[320px] snap-center group cursor-pointer"
                >
                  <div className="bg-white border border-[#1a1a1a]/5 rounded-[24px] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(14,112,101,0.2)] transition-all duration-500 h-[380px] flex flex-col relative">
                    <div className="h-[240px] w-full bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-[#0e7065]/20 group-hover:bg-transparent transition-colors duration-500 mix-blend-multiply" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-center bg-white relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                      <h3 className="font-display text-2xl text-[#1a1a1a] group-hover:text-[#0e7065] transition-colors duration-300">
                        {product.name}
                      </h3>
                      <div className="w-8 h-[2px] bg-[#e69882] mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
