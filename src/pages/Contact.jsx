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

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-white border border-[#1a1a1a]/10 rounded-[32px] overflow-hidden relative group max-w-5xl mx-auto shadow-xl">

            <div className="flex flex-col md:flex-row">
              {/* Left: Info */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative z-10">
                <h3 className="font-display text-[#1a1a1a] text-3xl md:text-4xl lg:text-5xl mb-4">Have a query?</h3>
                <p className="text-[#1a1a1a]/80 font-sans text-base lg:text-lg leading-relaxed mb-8">
                  Contact us via email. Our team will get back to you as soon as possible.
                </p>

                <div className="bg-[#FAFAF8] border border-[#1a1a1a]/5 p-5 lg:p-6 rounded-2xl w-full max-w-md flex flex-col gap-6">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#e69882] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div className="min-w-0">
                      <p className="text-[#1a1a1a]/50 text-xs font-bold uppercase tracking-wider mb-2">Scientific Office</p>
                      <p className="text-[#1a1a1a]/80 leading-relaxed font-sans text-sm">
                        Annora Pharma FZ-LLC<br />
                        Unit 3012, Block C, Al Razi Medical Complex,<br />
                        Building No.64, Dubai Healthcare City,<br />
                        P.O. Box 505259, Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  {/* Phone & Fax */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#e69882] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <div className="min-w-0">
                      <p className="text-[#1a1a1a]/50 text-xs font-bold uppercase tracking-wider mb-2">Contact</p>
                      <p className="text-[#1a1a1a]/80 font-sans text-sm">
                        Ph: +97142774518<br />
                        Fax: +97142774398
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#e69882] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <div className="min-w-0">
                      <p className="text-[#1a1a1a]/50 text-xs font-bold uppercase tracking-wider mb-2">Direct Email</p>
                      <a href="mailto:annorauae-admin@annorapharma.com" className="text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-colors truncate block font-sans text-sm">annorauae-admin@annorapharma.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="w-full lg:w-1/2 p-6 lg:p-8 xl:p-12 relative z-10">
                <div className="bg-white border border-[#1a1a1a]/5 rounded-[24px] p-6 lg:p-8 shadow-sm h-full flex flex-col justify-center">
                  <h4 className="font-display text-xl lg:text-2xl text-[#1a1a1a] mb-1">Send us a message</h4>

                  <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/60 uppercase tracking-wider">Name</label>
                        <input type="text" className="border border-[#1a1a1a]/10 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all bg-[#FAFAF8]" placeholder="Your full name" required />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/60 uppercase tracking-wider">Mobile Number</label>
                        <input type="tel" className="border border-[#1a1a1a]/10 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all bg-[#FAFAF8]" placeholder="+971 XX XXX XXXX" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/60 uppercase tracking-wider">Email</label>
                        <input type="email" className="border border-[#1a1a1a]/10 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all bg-[#FAFAF8]" placeholder="your@email.com" required />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/60 uppercase tracking-wider">Address</label>
                        <input type="text" className="border border-[#1a1a1a]/10 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all bg-[#FAFAF8]" placeholder="Your location" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 mt-2">
                      <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/60 uppercase tracking-wider">Message</label>
                      <textarea rows={4} className="border border-[#1a1a1a]/10 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all bg-[#FAFAF8] resize-none" placeholder="How can we help you?" required></textarea>
                    </div>

                    <button type="submit" className="mt-4 inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-sans font-semibold text-sm transition-all shadow-lg hover:shadow-xl bg-[#1a1a1a] text-white hover:bg-black hover:-translate-y-0.5">
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
