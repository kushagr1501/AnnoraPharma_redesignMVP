import React from 'react';
import { motion } from 'framer-motion';
import bannerImg from '../assets/Annora_bg2.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
};

export default function PageBanner({ title }) {
  return (
    <div className="relative w-full h-[55vh] min-h-[400px] flex flex-col items-center justify-end overflow-hidden">
      <img src={bannerImg} alt="Annora Facility Banner" className="absolute inset-0 w-full h-full object-cover object-top" />
      <div className="absolute inset-0 bg-[#0e7065]/50 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/20 to-transparent" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32 pb-12">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-display text-white text-5xl md:text-6xl lg:text-[5rem] drop-shadow-2xl">
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
