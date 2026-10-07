import { useState } from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import pvBanner from '../assets/PV-banner.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
};

export default function Pharmacovigilance() {
  const [form, setForm] = useState({ reporterName: '', email: '', mobile: '', productName: '', description: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/send.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'pharmacovigilance', ...form }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Something went wrong');
      setStatus('success');
      setForm({ reporterName: '', email: '', mobile: '', productName: '', description: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="w-full relative bg-[#FAFAF8]">
      <PageBanner title="Pharmacovigilance" image={pvBanner} imagePosition="object-[60%_center] md:object-center" heightClass="h-[50vh] min-h-[360px] md:h-[70vh] md:min-h-[500px]" />

      <section className="w-full pt-10 lg:pt-14 pb-10 lg:pb-12 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden">


        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 md:mb-20 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-[#1a1a1a] text-5xl md:text-6xl lg:text-[4.5rem] leading-none tracking-wide mb-6">
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
              <div className="w-12 h-12 bg-[#1a1a1a]/5 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="font-display text-[#1a1a1a] text-2xl mb-3">Call Us</h3>
              <p className="font-sans text-[#1a1a1a]/60 text-base leading-relaxed">
                24 hour helpline: <a href="tel:+97142774518" className="text-[#e69882] hover:underline font-semibold">+971 4 277 4518</a>
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white border border-[#1a1a1a]/5 rounded-[24px] p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#1a1a1a]/5 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-display text-[#1a1a1a] text-2xl mb-3">Email Us</h3>
              <p className="font-sans text-[#1a1a1a]/60 text-base leading-relaxed">
                Email us on: <a href="mailto:PVUAE@annorapharma.com" className="text-[#e69882] hover:underline font-semibold">PVUAE@annorapharma.com</a>
              </p>
            </motion.div>
          </div>

          {/* Report Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white border border-[#1a1a1a]/10 rounded-[32px] overflow-hidden relative group max-w-4xl mx-auto shadow-xl">
            <div className="p-8 lg:p-12 xl:p-16 relative z-10">
              <h3 className="font-display text-[#1a1a1a] text-3xl md:text-4xl mb-2">Submit your complaint here</h3>
              <p className="text-[#1a1a1a]/70 font-sans text-base mb-8">Your report helps us keep our products safe for everyone.</p>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="font-display text-2xl text-[#1a1a1a] mb-2">Report Submitted!</h4>
                  <p className="text-[#1a1a1a]/60 font-sans text-base mb-6">Thank you for your report. Our pharmacovigilance team will review it promptly.</p>
                  <button onClick={() => setStatus('idle')} className="text-[#e69882] font-sans font-semibold text-sm hover:underline">Submit another report</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/50 uppercase tracking-wider">Reporter Name</label>
                      <input type="text" name="reporterName" value={form.reporterName} onChange={handleChange} className="border border-[#1a1a1a]/10 bg-[#FAFAF8] rounded-xl px-4 py-3.5 font-sans text-sm text-[#1a1a1a] placeholder-[#1a1a1a]/40 outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all" placeholder="Your name" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/50 uppercase tracking-wider">Email</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} className="border border-[#1a1a1a]/10 bg-[#FAFAF8] rounded-xl px-4 py-3.5 font-sans text-sm text-[#1a1a1a] placeholder-[#1a1a1a]/40 outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all" placeholder="your@email.com" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/50 uppercase tracking-wider">Mobile</label>
                      <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} className="border border-[#1a1a1a]/10 bg-[#FAFAF8] rounded-xl px-4 py-3.5 font-sans text-sm text-[#1a1a1a] placeholder-[#1a1a1a]/40 outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all" placeholder="Your mobile" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/50 uppercase tracking-wider">Product Name</label>
                      <input type="text" name="productName" value={form.productName} onChange={handleChange} className="border border-[#1a1a1a]/10 bg-[#FAFAF8] rounded-xl px-4 py-3.5 font-sans text-sm text-[#1a1a1a] placeholder-[#1a1a1a]/40 outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all" placeholder="Name of the product" required />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/50 uppercase tracking-wider">Description of Adverse Event</label>
                    <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="border border-[#1a1a1a]/10 bg-[#FAFAF8] rounded-xl px-4 py-3.5 font-sans text-sm text-[#1a1a1a] placeholder-[#1a1a1a]/40 outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all resize-none" placeholder="Please describe the event in detail..." required></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 font-sans text-sm">
                      {errorMsg || 'Something went wrong. Please try again.'}
                    </div>
                  )}

                  <button type="submit" disabled={status === 'loading'} className="mt-4 inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-sans font-semibold text-sm transition-all shadow-lg hover:shadow-xl bg-[#1a1a1a] text-white hover:bg-black hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                    {status === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                        Submitting...
                      </>
                    ) : 'Submit Report'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
