import { useState } from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import careerBanner from '../assets/Career.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
};

export default function Careers() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', coverNote: '' });
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
        body: JSON.stringify({ formType: 'careers', ...form }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Something went wrong');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', position: '', coverNote: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="w-full relative bg-[#FAFAF8] min-h-screen">
      <PageBanner title="Careers" image={careerBanner} imagePosition="object-[60%_top] md:object-[center_10%]" heightClass="h-[50vh] min-h-[360px] md:h-[70vh] md:min-h-[500px]" />

      <section className="w-full pt-10 lg:pt-14 pb-20 lg:pb-32 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden">


        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 md:mb-20 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-[#1a1a1a] text-5xl md:text-6xl lg:text-[4.5rem] leading-none tracking-wide mb-6">
              Join Our Team
            </h2>
            <div className="w-16 h-[2px] bg-[#e69882] mx-auto mb-8" />
            <p className="text-[#1a1a1a]/70 text-xl lg:text-[1.4rem] font-sans leading-relaxed">
              We're always looking for passionate individuals who share our commitment to making quality healthcare accessible. Explore current openings and build your career with Annora Pharma.
            </p>
          </motion.div>

          {/* Application Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white border border-[#1a1a1a]/10 rounded-[32px] overflow-hidden relative group max-w-4xl mx-auto shadow-xl">
            <div className="p-8 lg:p-12 xl:p-16 relative z-10">
              <h3 className="font-display text-[#1a1a1a] text-3xl md:text-4xl mb-2">Apply Now</h3>
              <p className="text-[#1a1a1a]/70 font-sans text-base mb-8">Fill in your details and we'll get in touch if there's a match.</p>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="font-display text-2xl text-[#1a1a1a] mb-2">Application Submitted!</h4>
                  <p className="text-[#1a1a1a]/60 font-sans text-base mb-6">Thank you for your interest. Our team will review your application and get back to you soon.</p>
                  <button onClick={() => setStatus('idle')} className="text-[#e69882] font-sans font-semibold text-sm hover:underline">Submit another application</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/50 uppercase tracking-wider">Full Name</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} className="border border-[#1a1a1a]/10 bg-[#FAFAF8] rounded-xl px-4 py-3.5 font-sans text-sm text-[#1a1a1a] placeholder-[#1a1a1a]/40 outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all" placeholder="Your full name" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/50 uppercase tracking-wider">Email</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} className="border border-[#1a1a1a]/10 bg-[#FAFAF8] rounded-xl px-4 py-3.5 font-sans text-sm text-[#1a1a1a] placeholder-[#1a1a1a]/40 outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/50 uppercase tracking-wider">Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="border border-[#1a1a1a]/10 bg-[#FAFAF8] rounded-xl px-4 py-3.5 font-sans text-sm text-[#1a1a1a] placeholder-[#1a1a1a]/40 outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all" placeholder="+971 XX XXX XXXX" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/50 uppercase tracking-wider">Position of Interest</label>
                      <input type="text" name="position" value={form.position} onChange={handleChange} className="border border-[#1a1a1a]/10 bg-[#FAFAF8] rounded-xl px-4 py-3.5 font-sans text-sm text-[#1a1a1a] placeholder-[#1a1a1a]/40 outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all" placeholder="e.g. Marketing Manager" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] font-bold text-[#1a1a1a]/50 uppercase tracking-wider">Cover Note</label>
                    <textarea name="coverNote" value={form.coverNote} onChange={handleChange} rows={4} className="border border-[#1a1a1a]/10 bg-[#FAFAF8] rounded-xl px-4 py-3.5 font-sans text-sm text-[#1a1a1a] placeholder-[#1a1a1a]/40 outline-none focus:border-[#1a1a1a]/30 focus:ring-1 focus:ring-[#1a1a1a]/10 transition-all resize-none" placeholder="Tell us a little about yourself..." />
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
                    ) : 'Submit Application'}
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
