import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
};

export default function Careers() {
  return (
    <div className="w-full relative bg-[#FAFAF8] min-h-screen">
      <PageBanner title="Careers" />

      <section className="w-full py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0e7065]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 md:mb-20 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-[#0e7065] text-5xl md:text-6xl lg:text-[4.5rem] leading-none tracking-wide mb-6">
              Join Our Team
            </h2>
            <div className="w-16 h-[2px] bg-[#e69882] mx-auto mb-8" />
            <p className="text-[#1a1a1a]/70 text-xl lg:text-[1.4rem] font-sans leading-relaxed">
              We're always looking for passionate individuals who share our commitment to making quality healthcare accessible. Explore current openings and build your career with Annora Pharma.
            </p>
          </motion.div>

          {/* Application Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-gradient-to-br from-[#0e7065] via-[#116259] to-[#073631] rounded-[32px] overflow-hidden relative group max-w-4xl mx-auto shadow-xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-1000" />

            <div className="p-8 lg:p-12 xl:p-16 relative z-10">
              <h3 className="font-display text-white text-3xl md:text-4xl mb-2">Apply Now</h3>
              <p className="text-white/70 font-sans text-base mb-8">Fill in your details and we'll get in touch if there's a match.</p>

              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-wider">Full Name</label>
                    <input type="text" className="border border-white/10 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3.5 font-sans text-sm text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all" placeholder="Your full name" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-wider">Email</label>
                    <input type="email" className="border border-white/10 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3.5 font-sans text-sm text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-wider">Phone</label>
                    <input type="tel" className="border border-white/10 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3.5 font-sans text-sm text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all" placeholder="+971 XX XXX XXXX" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-wider">Position of Interest</label>
                    <input type="text" className="border border-white/10 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3.5 font-sans text-sm text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all" placeholder="e.g. Marketing Manager" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-wider">Cover Note</label>
                  <textarea rows={4} className="border border-white/10 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3.5 font-sans text-sm text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all resize-none" placeholder="Tell us a little about yourself..." />
                </div>

                <button type="submit" className="mt-4 inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-sans font-semibold text-sm transition-all shadow-lg hover:shadow-xl bg-white text-[#0e7065] hover:bg-[#FAFAF8] hover:-translate-y-0.5">
                  Submit Application
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
