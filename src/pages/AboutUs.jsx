import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';

import imgB2 from '../assets/B2.PNG';
import imgB5 from '../assets/B5.PNG';
import imgB6 from '../assets/B6.PNG';

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
              Annora Pharma FZ-LLC is an ISO-certified pharmaceutical company committed to providing high-quality, affordable branded generic medications. With our state-of-the-art facility in the UAE, we are dedicated to improving healthcare outcomes across the region and beyond.
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
                Founded with a vision to make quality healthcare accessible, Annora Pharma has grown into a trusted name in the pharmaceutical industry. We develop and distribute branded generic medications that meet international quality standards.
              </p>
              <p className="text-[#1a1a1a]/70 text-lg font-sans leading-relaxed">
                Our commitment goes beyond manufacturing. We invest in research, development, and partnerships that enable us to bring life-changing treatments to patients who need them most.
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

      {/* Leadership */}
      <section className="w-full py-20 lg:py-28 px-6 md:px-12 lg:px-24 xl:px-32 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-[#0e7065] text-5xl md:text-6xl leading-none tracking-wide mb-6">Leadership</h2>
            <div className="w-16 h-[2px] bg-[#e69882] mx-auto mb-8" />
            <p className="text-[#1a1a1a]/70 text-xl font-sans leading-relaxed">
              Our leadership team brings decades of combined experience in pharmaceuticals, healthcare management, and global business strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dr. Ahmed Al Mansoori", role: "Chief Executive Officer", img: imgB5 },
              { name: "Sarah Hassan", role: "Chief Operating Officer", img: imgB6 },
              { name: "Rajesh Kumar", role: "Head of R&D", img: imgB2 },
            ].map((leader, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group">
                <div className="h-[350px] rounded-[24px] overflow-hidden mb-6 relative">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#0e7065]/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="font-display text-[#1a1a1a] text-2xl mb-1">{leader.name}</h3>
                <p className="font-sans text-[#0e7065] text-sm tracking-wide">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
