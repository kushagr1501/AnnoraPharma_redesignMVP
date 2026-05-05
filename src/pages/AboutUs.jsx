import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';

import imgB2 from '../assets/B2.PNG';

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0e7065]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 md:mb-20 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-[#0e7065] text-5xl md:text-6xl lg:text-[4.5rem] leading-none tracking-wide mb-6">
              Who We Are
            </h2>
            <div className="w-16 h-[2px] bg-[#e69882] mx-auto mb-8" />
            <p className="text-[#1a1a1a]/70 text-xl lg:text-[1.4rem] font-sans leading-relaxed">
              <span className="font-bold text-[#0e7065]">Annora Pharma-FZ LLC</span> is a UAE based pharmaceutical company engaged in marketing and supply of best-in-class branded generic medicine, to serve the unmet needs of the country.
            </p>
          </motion.div>

          {/* Split Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-[400px] lg:h-[500px] rounded-[24px] overflow-hidden">
              <img src={imgB2} alt="Annora Pharma Team" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col gap-6">
              <h3 className="font-display text-[#1a1a1a] text-3xl md:text-4xl">Our Story</h3>
              <p className="text-[#1a1a1a]/70 text-lg font-sans leading-relaxed">
                We are committed to transform lives by providing easy access to high quality and affordable medication to patients and healthcare partners. To ensure delivery of the best-in-class quality products to our customers, we source products from USFDA/European approved manufacturing facilities from our partners across the globe.
              </p>
              <p className="text-[#1a1a1a]/70 text-lg font-sans leading-relaxed">
                Backed by strong global partners having state-of-the-art manufacturing facilities and highly qualified research team. We have a well-entrenched supply and distribution network to ensure faster and smooth supply of the medicines.
              </p>
              <div className="flex gap-8 mt-4">
                <div className="flex flex-col">
                  <span className="font-display text-[#0e7065] text-4xl">100+</span>
                  <span className="font-sans text-[#1a1a1a]/50 text-sm mt-1">Products</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-[#0e7065] text-4xl">15+</span>
                  <span className="font-sans text-[#1a1a1a]/50 text-sm mt-1">Countries</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-[#0e7065] text-4xl">500+</span>
                  <span className="font-sans text-[#1a1a1a]/50 text-sm mt-1">Team Members</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
