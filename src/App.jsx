import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import annoraLogo from '../src/assets/Annora Logo.png';

/* ─── Magnetic element ─── */
function Magnetic({ children, className, as: Tag = 'div' }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const handleMouse = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.2);
    y.set((e.clientY - r.top - r.height / 2) * 0.2);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={handleMouse} onMouseLeave={reset}
      className={className} transition={{ type: 'spring', stiffness: 150, damping: 15 }}>
      {children}
    </motion.div>
  );
}

/* ─── Stagger children ─── */
const stagger = { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
};

const LandingPage = () => {
  return (
    <div className="h-screen w-full bg-white overflow-hidden flex flex-col">

      {/* ─── Marquee Banner ─── */}
      <div className="w-full bg-[#0e7065] py-2 overflow-hidden flex whitespace-nowrap flex-shrink-0">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex items-center"
        >
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-white/90 text-[10px] tracking-[0.25em] uppercase font-sans font-medium px-8">
                Committed to Excellence in Healthcare
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#e69882]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── Nav: dead simple ─── */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-10 md:px-12 lg:px-16 py-5 flex-shrink-0"
      >
        <img src={annoraLogo} alt="Annora Pharma Logo" className="h-6 object-contain" />
        <div className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-[#1a1a1a]/50 text-[12px] font-sans hover:text-[#1a1a1a] transition-colors">Home Page</a>
          <a href="#" className="text-[#1a1a1a]/50 text-[12px] font-sans hover:text-[#1a1a1a] transition-colors">About Us</a>
          <a href="#" className="text-[#1a1a1a]/50 text-[12px] font-sans hover:text-[#1a1a1a] transition-colors">Products</a>
          <a href="#" className="text-[#1a1a1a]/50 text-[12px] font-sans hover:text-[#1a1a1a] transition-colors">News and Events</a>
          <a href="#" className="text-[#1a1a1a]/50 text-[12px] font-sans hover:text-[#1a1a1a] transition-colors">Careers</a>
          <a href="#" className="text-[#1a1a1a]/50 text-[12px] font-sans hover:text-[#1a1a1a] transition-colors">Pharmacovigilance</a>
          <a href="#" className="text-[#1a1a1a] font-semibold text-[12px] font-sans hover:text-[#0e7065] transition-colors">Contact</a>
        </div>
      </motion.header>

      {/* ─── Main: Bento grid ─── */}
      <motion.main
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-12 grid-rows-[1fr_auto] gap-3 px-4 md:px-6 pb-4 md:pb-6 min-h-0"
      >

        {/* ─── Hero text block ─── */}
        <motion.div
          variants={fadeUp}
          className="col-span-12 lg:col-span-5 row-span-1 bg-[#FAFAF8] flex flex-col justify-between p-8 md:p-12 relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="text-[#e69882] text-[11px] tracking-[0.3em] uppercase font-sans font-semibold mb-8">
              Annora Pharma-FZ LLC · UAE
            </div>
            <h1 className="font-display text-[#1a1a1a] text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] mb-6">
              Transforming lives<br />with high-quality<br />medication.
            </h1>
            <p className="text-[#1a1a1a]/60 text-[14px] leading-[1.8] font-sans mb-4">
              A UAE based pharmaceutical company engaged in marketing and supply of best-in-class branded generic medicine, to serve the unmet needs of the country.
            </p>
            <p className="text-[#1a1a1a]/40 text-[13px] leading-[1.7] font-sans hidden xl:block">
              We are committed to transform lives by providing easy access to high quality and affordable medication to patients and healthcare partners.
            </p>
          </div>

          <div className="flex items-center gap-8 mt-8 relative z-10">
            <Magnetic>
              <a href="mailto:info@annorapharma.com"
                className="bg-[#0e7065] text-white text-[12px] font-sans font-semibold tracking-wider uppercase px-7 py-4 inline-flex items-center gap-3 group hover:bg-[#0a5a51] transition-colors">
                Partner with us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* ─── Photo block ─── */}
        <motion.div
          variants={fadeUp}
          className="col-span-12 lg:col-span-7 row-span-1 overflow-hidden relative group"
        >
          <motion.img
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 16, ease: 'linear' }}
            src="https://annorapharma.com/Annora_files/images/Annora_bg.jpg"
            alt="Annora Pharma manufacturing facility"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[4s]"
          />
        </motion.div>

        {/* ─── Bottom info blocks ─── */}
        <motion.div variants={fadeUp} className="col-span-6 md:col-span-3 bg-[#0e7065] p-6 md:p-8 flex flex-col justify-between">
          <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-sans font-bold">Sourcing</span>
          <span className="font-display text-white text-[1.4rem] lg:text-[1.75rem] leading-[1.15] mt-12">USFDA / EU<br />Approved</span>
        </motion.div>

        <motion.div variants={fadeUp} className="col-span-6 md:col-span-3 bg-[#FAFAF8] p-6 md:p-8 flex flex-col justify-between border border-[#1a1a1a]/5">
          <span className="text-[#1a1a1a]/40 text-[10px] tracking-[0.2em] uppercase font-sans font-bold">Network</span>
          <span className="font-display text-[#0e7065] text-[1.4rem] lg:text-[1.75rem] leading-[1.15] mt-12">Global<br />Partnerships</span>
        </motion.div>

        <motion.div variants={fadeUp} className="col-span-6 md:col-span-3 bg-[#FAFAF8] p-6 md:p-8 flex flex-col justify-between border border-[#1a1a1a]/5">
          <span className="text-[#1a1a1a]/40 text-[10px] tracking-[0.2em] uppercase font-sans font-bold">Distribution</span>
          <span className="font-display text-[#1a1a1a] text-[1.4rem] lg:text-[1.75rem] leading-[1.15] mt-12">Fast & Smooth<br />Supply</span>
        </motion.div>

        <motion.div variants={fadeUp} className="col-span-6 md:col-span-3 bg-[#FDF4F2] p-6 md:p-8 flex flex-col justify-between border border-[#e69882]/10">
          <span className="text-[#d26245]/60 text-[10px] tracking-[0.2em] uppercase font-sans font-bold">Commitment</span>
          <span className="font-display text-[#d26245] text-[1.4rem] lg:text-[1.75rem] leading-[1.15] mt-12">Affordable<br />Medication</span>
        </motion.div>

      </motion.main>
    </div>
  );
};

export default LandingPage;
