import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
};

export default function Pharmacovigilance() {
  return (
    <div className="w-full relative bg-[#FAFAF8] min-h-screen">
      <PageBanner title="Pharmacovigilance" />

      <section className="w-full py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0e7065]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 md:mb-20 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-[#0e7065] text-5xl md:text-6xl lg:text-[4.5rem] leading-none tracking-wide mb-6">
              Drug Safety
            </h2>
            <div className="w-16 h-[2px] bg-[#e69882] mx-auto mb-8" />
            <p className="text-[#1a1a1a]/70 text-xl lg:text-[1.4rem] font-sans leading-relaxed">
              At Annora Pharma, patient safety is our highest priority. Our pharmacovigilance team continuously monitors the safety profile of our products to ensure the well-being of patients.
            </p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white border border-[#1a1a1a]/5 rounded-[24px] p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#0e7065]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0e7065]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-display text-[#1a1a1a] text-2xl mb-3">Our Commitment</h3>
              <p className="font-sans text-[#1a1a1a]/60 text-base leading-relaxed">
                We are committed to the highest standards of drug safety and continuously work to identify, assess, and minimize risks associated with our pharmaceutical products.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white border border-[#1a1a1a]/5 rounded-[24px] p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#0e7065]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0e7065]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-display text-[#1a1a1a] text-2xl mb-3">Report an Adverse Event</h3>
              <p className="font-sans text-[#1a1a1a]/60 text-base leading-relaxed">
                If you experience or observe any side effect or adverse event related to our products, please report it immediately to help us maintain the highest safety standards.
              </p>
            </motion.div>
          </div>

          {/* Report Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-gradient-to-br from-[#0e7065] via-[#116259] to-[#073631] rounded-[32px] overflow-hidden relative group max-w-4xl mx-auto shadow-xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-1000" />

            <div className="p-8 lg:p-12 xl:p-16 relative z-10">
              <h3 className="font-display text-white text-3xl md:text-4xl mb-2">Submit a Safety Report</h3>
              <p className="text-white/70 font-sans text-base mb-8">Your report helps us keep our products safe for everyone.</p>

              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-wider">Reporter Name</label>
                    <input type="text" className="border border-white/10 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3.5 font-sans text-sm text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all" placeholder="Your name" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-wider">Email</label>
                    <input type="email" className="border border-white/10 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3.5 font-sans text-sm text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-wider">Product Name</label>
                  <input type="text" className="border border-white/10 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3.5 font-sans text-sm text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all" placeholder="Name of the product" required />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-wider">Description of Adverse Event</label>
                  <textarea rows={4} className="border border-white/10 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3.5 font-sans text-sm text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all resize-none" placeholder="Please describe the event in detail..." required></textarea>
                </div>

                <button type="submit" className="mt-4 inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-sans font-semibold text-sm transition-all shadow-lg hover:shadow-xl bg-white text-[#0e7065] hover:bg-[#FAFAF8] hover:-translate-y-0.5">
                  Submit Report
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
