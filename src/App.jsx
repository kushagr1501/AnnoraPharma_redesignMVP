import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import annoraLogo from '../src/assets/Annora_Logo-removebg-preview.png';
import heroBg from '../src/assets/Annora_bg.png';
import imgB1 from '../src/assets/B1.PNG';
import imgB2 from '../src/assets/B2.PNG';
import imgB3 from '../src/assets/B3.PNG';
import imgB4 from '../src/assets/B4.PNG';
import imgB5 from '../src/assets/B5.PNG';
import imgB6 from '../src/assets/B6.PNG';
import imgB7 from '../src/assets/B7.PNG';
import Footer from './components/Footer';

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

const navLinks = [
  { label: 'Home Page', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'News and Events', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Pharmacovigilance', href: '#' },
  { label: 'Contact', href: '#', bold: true },
];

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yContent = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityContent = useTransform(scrollY, [0, 500], [1, 0]);

  // Smooth scrolling setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    /* Mobile & Desktop: natural scroll for new sections */
    <div className="w-full bg-[#fdfbf7] flex flex-col overflow-x-hidden min-h-screen">

      {/* Marquee Banner Removed */}

      {/* ─── Nav ─── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-12 xl:px-16 py-6 lg:py-8"
      >
        <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between">
          <img src={annoraLogo} alt="Annora Pharma Logo" className="h-6 lg:h-7 xl:h-8 object-contain brightness-0 invert" />
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}
                className={`text-[11px] xl:text-[12px] uppercase tracking-[0.15em] font-accent transition-colors whitespace-nowrap ${link.bold
                  ? 'text-white font-bold hover:text-[#e69882]'
                  : 'text-white/70 hover:text-white'
                  }`}>
                {link.label}
              </a>
            ))}
          </div>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 relative z-50"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="w-6 h-[1.5px] bg-white" />
            <span className="w-6 h-[1.5px] bg-white" />
            <span className="w-4 h-[1.5px] bg-white self-end" />
          </button>
        </div>
      </motion.header>

      {/* ─── Mobile Nav Overlay ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-50 bg-white flex flex-col"
          >
            {/* Close header */}
            <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
              <img src={annoraLogo} alt="Annora Pharma Logo" className="h-6 object-contain" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-[1.6rem] font-display py-3 border-b border-[#1a1a1a]/5 transition-colors ${link.bold
                    ? 'text-[#0e7065]'
                    : 'text-[#1a1a1a]/70 hover:text-[#0e7065]'
                    }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="px-8 pb-10 flex-shrink-0">
              <a href="mailto:info@annorapharma.com"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#0e7065] text-white text-[12px] font-sans font-semibold tracking-wider uppercase px-6 py-4 inline-flex items-center gap-3 w-full justify-center">
                Partner with us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Main: Hero Section ─── */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative w-full h-[100dvh] flex flex-col justify-between overflow-hidden"
      >
        {/* Full-screen background image — dimmed for mood with parallax */}
        <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-full">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: 'linear' }}
            src={heroBg}
            alt="Annora Pharma manufacturing facility"
            className="w-full h-full object-cover object-[center_20%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Spacer for nav */}
        <div className="pt-28" />

        {/* Center: Hero headline — staggered line reveal with parallax fade out on scroll */}
        <motion.div 
          style={{ y: yContent, opacity: opacityContent }}
          className="relative z-10 flex-1 flex items-center justify-center px-6"
        >
          <div className="text-center overflow-hidden">
            {['Committed to excellence', 'in healthcare.'].map((line, i) => (
              <motion.div
                key={line}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.9, 
                  delay: 0.3 + i * 0.15, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="overflow-hidden"
              >
                <h1 className="font-heading font-extrabold text-white text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] leading-[0.95] tracking-[-0.03em]">
                  {line}
                </h1>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar — company info + CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full border-t border-white/10 px-6 md:px-10 lg:px-12 xl:px-16"
        >
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between py-6 lg:py-8 gap-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
              <p className="text-white/40 text-[12px] font-accent tracking-[0.2em] uppercase">
                Annora Pharma-FZ LLC · UAE
              </p>
              <p className="text-white/50 text-[13px] lg:text-[14px] font-sans leading-relaxed max-w-md">
                Marketing and supply of best-in-class branded generic medicine — transforming lives through affordable medication.
              </p>
            </div>
            <Magnetic>
              <a href="mailto:info@annorapharma.com"
                className="bg-white text-[#1a1a1a] text-[11px] font-accent font-bold tracking-[0.18em] uppercase px-8 py-3.5 inline-flex items-center gap-3 group hover:bg-[#0e7065] hover:text-white transition-all duration-300 flex-shrink-0">
                Partner with us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </motion.section>

      {/* ─── Highlights Grid ─── */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white border-b border-gray-100">
          <div className="bg-[#0e7065] p-8 lg:p-10 xl:p-12 flex flex-col justify-between min-h-[220px]">
            <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-accent font-bold mb-8">Sourcing</span>
            <span className="font-display text-white text-[1.5rem] lg:text-[1.8rem] leading-[1.15]">USFDA / EU<br />Approved</span>
          </div>
          <div className="bg-[#FAFAF8] p-8 lg:p-10 xl:p-12 flex flex-col justify-between min-h-[220px] border-r border-[#1a1a1a]/5">
            <span className="text-[#1a1a1a]/40 text-[10px] tracking-[0.2em] uppercase font-accent font-bold mb-8">Network</span>
            <span className="font-display text-[#0e7065] text-[1.5rem] lg:text-[1.8rem] leading-[1.15]">Global<br />Partnerships</span>
          </div>
          <div className="bg-[#FAFAF8] p-8 lg:p-10 xl:p-12 flex flex-col justify-between min-h-[220px] border-r border-[#1a1a1a]/5">
            <span className="text-[#1a1a1a]/40 text-[10px] tracking-[0.2em] uppercase font-accent font-bold mb-8">Distribution</span>
            <span className="font-display text-[#1a1a1a] text-[1.5rem] lg:text-[1.8rem] leading-[1.15]">Fast & Smooth<br />Supply</span>
          </div>
          <div className="bg-[#FDF4F2] p-8 lg:p-10 xl:p-12 flex flex-col justify-between min-h-[220px]">
            <span className="text-[#d26245]/60 text-[10px] tracking-[0.2em] uppercase font-accent font-bold mb-8">Commitment</span>
            <span className="font-display text-[#d26245] text-[1.5rem] lg:text-[1.8rem] leading-[1.15]">Affordable<br />Medication</span>
          </div>
      </section>

      {/* ─── Vision, Mission & Values Bento ─── */}
      <section className="w-full px-4 lg:px-3 xl:px-4 pb-12 lg:pb-16">
          <div className="grid grid-cols-12 gap-3 lg:gap-2 xl:gap-3">

            {/* Vision Image */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="col-span-12 lg:col-span-4 h-[300px] md:h-[400px] overflow-hidden">
              <img src={imgB2} alt="Vision" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[2s]" />
            </motion.div>

            {/* Vision Text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="col-span-12 lg:col-span-8 bg-[#0e7065] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="font-display text-white text-3xl md:text-5xl mb-6">Our Vision</h2>
              <p className="text-white/80 text-lg md:text-xl xl:text-2xl leading-relaxed font-sans max-w-3xl">
                To be the leading generic pharmaceutical company in the region and meet the healthcare needs.
              </p>
            </motion.div>

            {/* Mission Text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="col-span-12 lg:col-span-8 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center border border-[#1a1a1a]/5">
              <h2 className="font-display text-[#0e7065] text-3xl md:text-5xl mb-6">Our Mission</h2>
              <p className="text-[#1a1a1a]/70 text-lg md:text-xl xl:text-2xl leading-relaxed font-sans max-w-3xl">
                To provide access to high quality and affordable branded generic medication to the people for a healthier future.
              </p>
            </motion.div>

            {/* Mission Image */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="col-span-12 lg:col-span-4 h-[300px] md:h-[400px] overflow-hidden">
              <img src={imgB6} alt="Mission" className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-[2s]" />
            </motion.div>

            {/* Values Header */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="col-span-12 mt-10 mb-2">
              <h2 className="font-display text-[#0e7065] text-4xl md:text-5xl lg:text-6xl text-center">Our Values</h2>
            </motion.div>

            {/* Values Cinematic Cards */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="col-span-12 md:col-span-6 lg:col-span-3 h-[350px] lg:h-[480px] relative overflow-hidden group">
              <img src={imgB1} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e7065]/95 via-[#0e7065]/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-accent font-bold mb-2">01</span>
                <h3 className="font-display text-white text-2xl lg:text-3xl mb-3">Knowledge</h3>
                <p className="text-white/90 text-[13px] leading-[1.6] font-sans">
                  We value and respect Knowledge as the key enabler in our mission to develop affordable healthcare. We greatly cherish knowledge in our team members, associates, partners and the community at large.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="col-span-12 md:col-span-6 lg:col-span-3 h-[350px] lg:h-[480px] relative overflow-hidden group">
              <img src={imgB4} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[3s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#d26245]/95 via-[#d26245]/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-accent font-bold mb-2">02</span>
                <h3 className="font-display text-white text-2xl lg:text-3xl mb-3">Quality Focus</h3>
                <p className="text-white/90 text-[13px] leading-[1.6] font-sans">
                  We are committed to the highest standards of Quality in every aspect of our business, and work towards raising those standards through continuous improvement.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="col-span-12 md:col-span-6 lg:col-span-3 h-[350px] lg:h-[480px] relative overflow-hidden group">
              <img src={imgB3} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e7065]/95 via-[#0e7065]/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-accent font-bold mb-2">03</span>
                <h3 className="font-display text-white text-2xl lg:text-3xl mb-3">Dynamism</h3>
                <p className="text-white/90 text-[13px] leading-[1.6] font-sans">
                  We are agile, pro-active and passionate about each and everything that we do.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="col-span-12 md:col-span-6 lg:col-span-3 h-[350px] lg:h-[480px] relative overflow-hidden group">
              <img src={imgB7} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e7065]/95 via-[#0e7065]/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-accent font-bold mb-2">04</span>
                <h3 className="font-display text-white text-2xl lg:text-3xl mb-3">Responsibility</h3>
                <p className="text-white/90 text-[13px] leading-[1.6] font-sans">
                  We have deep-rooted sense of responsibility towards all our stakeholders - customers, employees, shareholders and each and every associate who partners us. And we strive relentlessly towards delivering on those responsibilities.
                </p>
              </div>
            </motion.div>

          </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
