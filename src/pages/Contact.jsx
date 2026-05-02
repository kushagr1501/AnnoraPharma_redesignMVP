import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
};

export default function Contact() {
  return (
    <div className="w-full relative bg-[#FAFAF8] min-h-screen">
      <PageBanner title="Contact Us" />
      
      <div className="w-full pb-20 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10 pt-8">

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-gradient-to-br from-[#0e7065] via-[#116259] to-[#073631] rounded-[32px] overflow-hidden relative group max-w-5xl mx-auto shadow-xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#0e7065]/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

          <div className="flex flex-col md:flex-row">
            {/* Left: Info */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative z-10">
              <h3 className="font-display text-white text-3xl md:text-4xl lg:text-5xl mb-4">Have a query?</h3>
              <p className="text-white/80 font-sans text-base lg:text-lg leading-relaxed mb-8">
                Contact us via email. Our team will get back to you as soon as possible.
              </p>

              <div className="bg-white/10 backdrop-blur-sm p-5 lg:p-6 rounded-2xl w-full max-w-sm">
                <div className="flex flex-col gap-4 font-sans text-white/90 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#e69882] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <div className="min-w-0">
                      <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Direct Email</p>
                      <a href="mailto:annorauae-admin@annorapharma.com" className="hover:text-[#e69882] transition-colors truncate block">annorauae-admin@annorapharma.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="w-full lg:w-1/2 p-6 lg:p-8 xl:p-12 relative z-10">
              <div className="bg-white/95 backdrop-blur-md rounded-[24px] p-6 lg:p-8 shadow-2xl h-full flex flex-col justify-center">
                <h4 className="font-display text-xl lg:text-2xl text-[#1a1a1a] mb-1">Send us a message</h4>

                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/60 uppercase tracking-wider">Name</label>
                      <input type="text" className="border border-[#1a1a1a]/10 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:border-[#0e7065] focus:ring-1 focus:ring-[#0e7065]/20 transition-all bg-[#FAFAF8]" placeholder="Your full name" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/60 uppercase tracking-wider">Mobile Number</label>
                      <input type="tel" className="border border-[#1a1a1a]/10 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:border-[#0e7065] focus:ring-1 focus:ring-[#0e7065]/20 transition-all bg-[#FAFAF8]" placeholder="+971 XX XXX XXXX" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/60 uppercase tracking-wider">Email</label>
                      <input type="email" className="border border-[#1a1a1a]/10 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:border-[#0e7065] focus:ring-1 focus:ring-[#0e7065]/20 transition-all bg-[#FAFAF8]" placeholder="your@email.com" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/60 uppercase tracking-wider">Address</label>
                      <input type="text" className="border border-[#1a1a1a]/10 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:border-[#0e7065] focus:ring-1 focus:ring-[#0e7065]/20 transition-all bg-[#FAFAF8]" placeholder="Your location" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/60 uppercase tracking-wider">Message</label>
                    <textarea rows={4} className="border border-[#1a1a1a]/10 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:border-[#0e7065] focus:ring-1 focus:ring-[#0e7065]/20 transition-all bg-[#FAFAF8] resize-none" placeholder="How can we help you?" required></textarea>
                  </div>

                  <button type="submit" className="mt-4 inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-sans font-semibold text-sm transition-all shadow-lg hover:shadow-xl bg-[#0e7065] text-white hover:bg-[#0a524a] hover:-translate-y-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
