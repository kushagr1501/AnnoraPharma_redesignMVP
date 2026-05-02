import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import annoraLogo from '../assets/Annora_Logo-removebg-preview.png';
import heroBg from '../assets/Annora_bg.png';
import imgB1 from '../assets/B1.PNG';
import imgB2 from '../assets/B2.PNG';
import imgB3 from '../assets/B3.PNG';
import imgB4 from '../assets/B4.PNG';
import imgB5 from '../assets/B5.PNG';
import imgB6 from '../assets/B6.PNG';
import imgB7 from '../assets/B7.PNG';

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
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
};

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yContent = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityContent = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <>
      {/* ─── Main: Hero Section ─── */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative w-full h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#0a0a0a]"
      >
        {/* Full-screen background image — dimmed for mood with parallax */}
        <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-full">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={isLoaded ? { scale: 1 } : { scale: 1.08 }}
            transition={{ duration: 20, ease: 'linear' }}
            src={heroBg}
            onLoad={() => setIsLoaded(true)}
            alt="Annora Pharma manufacturing facility"
            className="w-full h-full object-cover object-[0%_20%]"
          />
        </motion.div>
        {/* Base dark tint to give text contrast against bright images */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Clean, smooth teal gradient that fades naturally */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[80%] lg:w-[70%] bg-gradient-to-r from-[#0e7065] via-[#0e7065]/80 to-transparent pointer-events-none" />

        {/* Soft color blend to make the image feel integrated */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[60%] bg-gradient-to-r from-[#0e7065] to-transparent mix-blend-multiply opacity-50 pointer-events-none" />

        {/* Spacer for nav */}
        <div className="pt-28" />

        {/* Left: Hero headline */}
        <motion.div
          style={{ y: yContent, opacity: opacityContent }}
          className="relative z-10 flex-1 flex items-center justify-start px-6 md:px-12 lg:px-24 xl:px-32"
        >
          <div className="text-left max-w-4xl">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-heading font-bold text-white text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-[-0.02em] drop-shadow-lg">
                Committed to excellence<br />in healthcare.
              </h1>
            </motion.div>

            {/* <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <a href="#" className="group inline-flex items-center gap-3 border border-white/40 bg-white/10 backdrop-blur-md text-white px-8 py-4 text-[13px] font-sans font-bold tracking-widest uppercase hover:bg-white hover:text-[#0e7065] transition-all duration-300">
                Read More
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div> */}
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

          </div>
        </motion.div>
      </motion.section>

      {/* ─── About Annora ─── */}
      <section className="w-full bg-[#FAFAF8] py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0e7065]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#e69882]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Title - Block Design */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="lg:col-span-4 flex flex-col items-start"
            >
              <div className="flex flex-col items-start gap-[2px]">
                <div className="bg-[#0e7065] px-5 py-2">
                  <h2 className="font-display text-white text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-wide">
                    About
                  </h2>
                </div>
                <div className="bg-[#0e7065] px-5 py-2">
                  <h2 className="font-display text-white text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-wide">
                    Annora
                  </h2>
                </div>
              </div>
              <div className="w-16 h-[1px] bg-[#e69882] mt-6" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="lg:col-span-8 flex flex-col pt-1"
            >
              <p className="text-[#1a1a1a]/80 text-[1.25rem] lg:text-[1.4rem] font-sans leading-[1.8] max-w-[95%]">
                <span className="font-bold text-[#0e7065]">Annora Pharma-FZ LLC</span> is a UAE based pharmaceutical company engaged in marketing and supply of best-in-class branded generic medicine, to serve the unmet needs of the country.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-12">
                <p className="text-[#1a1a1a]/50 text-[12px] lg:text-[13px] font-sans leading-[2.2] font-light">
                  We are committed to transform lives by providing easy access to high quality and affordable medication to patients and healthcare partners. To ensure delivery of the best-in-class quality products to our customers, we source products from USFDA/European approved manufacturing facilities from our partners across the globe.
                </p>
                <p className="text-[#1a1a1a]/50 text-[12px] lg:text-[13px] font-sans leading-[2.2] font-light">
                  Backed by strong global partners having state-of-the-art manufacturing facilities and highly qualified research team. We have a well-entrenched supply and distribution network to ensure faster and smooth supply of the medicines.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Vision, Mission & Values Bento ─── */}
      <section className="w-full px-0 pb-0 pt-12 bg-white">
        <div className="grid grid-cols-12 gap-3 lg:gap-2 xl:gap-3">

          {/* Vision Image */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="col-span-12 lg:col-span-4 h-[300px] md:h-[400px] overflow-hidden">
            <img src={imgB2} alt="Vision" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[2s]" />
          </motion.div>

          {/* Vision Text */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="col-span-12 lg:col-span-8 bg-gradient-to-br from-[#0e7065] via-[#116259] to-[#073631] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-transform duration-1000 group-hover:scale-110" />
            <h2 className="font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 text-3xl md:text-5xl mb-6 relative z-10">Our Vision</h2>
            <p className="text-white/80 text-lg md:text-xl xl:text-2xl leading-relaxed font-sans max-w-3xl relative z-10">
              To be the leading generic pharmaceutical company in the region and meet the healthcare needs.
            </p>
          </motion.div>

          {/* Mission Text */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="col-span-12 lg:col-span-8 bg-gradient-to-br from-white to-[#f8f9fa] p-8 md:p-12 lg:p-16 flex flex-col justify-center border border-[#1a1a1a]/5 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0e7065]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 transition-transform duration-1000 group-hover:scale-110" />
            <h2 className="font-display text-transparent bg-clip-text bg-gradient-to-r from-[#0e7065] to-[#258f84] text-3xl md:text-5xl mb-6 relative z-10">Our Mission</h2>
            <p className="text-[#1a1a1a]/70 text-lg md:text-xl xl:text-2xl leading-relaxed font-sans max-w-3xl relative z-10">
              To provide access to high quality and affordable branded generic medication to the people for a healthier future.
            </p>
          </motion.div>

          {/* Mission Image */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="col-span-12 lg:col-span-4 h-[300px] md:h-[400px] overflow-hidden">
            <img src={imgB6} alt="Mission" className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-[2s]" />
          </motion.div>

          {/* Values Header */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="col-span-12 mt-10 mb-2">
            <h2 className="font-display text-transparent bg-clip-text bg-gradient-to-r from-[#0e7065] to-[#258f84] text-4xl md:text-5xl lg:text-6xl text-center">Our Values</h2>
          </motion.div>

          {/* Values Cinematic Cards */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="col-span-12 md:col-span-6 lg:col-span-3 h-[350px] lg:h-[480px] relative overflow-hidden group">
            <img src={imgB1} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e7065]/95 via-[#0e7065]/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex flex-col justify-start h-[180px] lg:h-[220px]">
                <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-accent font-bold mb-2">01</span>
                <h3 className="font-display text-white text-2xl lg:text-3xl mb-3">Knowledge</h3>
                <p className="text-white/90 text-[13px] leading-[1.6] font-sans">
                  We value and respect Knowledge as the key enabler in our mission to develop affordable healthcare. We greatly cherish knowledge in our team members, associates, partners and the community at large.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="col-span-12 md:col-span-6 lg:col-span-3 h-[350px] lg:h-[480px] relative overflow-hidden group">
            <img src={imgB4} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[3s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#d26245]/95 via-[#d26245]/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex flex-col justify-start h-[180px] lg:h-[220px]">
                <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-accent font-bold mb-2">02</span>
                <h3 className="font-display text-white text-2xl lg:text-3xl mb-3">Quality Focus</h3>
                <p className="text-white/90 text-[13px] leading-[1.6] font-sans">
                  We are committed to the highest standards of Quality in every aspect of our business, and work towards raising those standards through continuous improvement.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="col-span-12 md:col-span-6 lg:col-span-3 h-[350px] lg:h-[480px] relative overflow-hidden group">
            <img src={imgB3} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e7065]/95 via-[#0e7065]/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex flex-col justify-start h-[180px] lg:h-[220px]">
                <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-accent font-bold mb-2">03</span>
                <h3 className="font-display text-white text-2xl lg:text-3xl mb-3">Dynamism</h3>
                <p className="text-white/90 text-[13px] leading-[1.6] font-sans">
                  We are agile, pro-active and passionate about each and everything that we do.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="col-span-12 md:col-span-6 lg:col-span-3 h-[350px] lg:h-[480px] relative overflow-hidden group">
            <img src={imgB7} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e7065]/95 via-[#0e7065]/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex flex-col justify-start h-[180px] lg:h-[220px]">
                <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-accent font-bold mb-2">04</span>
                <h3 className="font-display text-white text-2xl lg:text-3xl mb-3">Responsibility</h3>
                <p className="text-white/90 text-[13px] leading-[1.6] font-sans">
                  We have deep-rooted sense of responsibility towards all our stakeholders - customers, employees, shareholders and each and every associate who partners us. And we strive relentlessly towards delivering on those responsibilities.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
      {/* Flagship Products Section (Split Layout) */}
      <section className="w-full relative bg-white mt-12 lg:mt-16">
        <div className="flex flex-col lg:flex-row w-full min-h-[700px]">

          {/* Left: Green Area */}
          <div className="w-full lg:w-[45%] bg-gradient-to-br from-[#0e7065] via-[#116259] to-[#073631] p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/10 mix-blend-overlay" />

            <div className="relative z-10 text-center lg:text-left mb-12 lg:mb-16">
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-display text-white text-3xl md:text-4xl lg:text-5xl mb-4">
                Flagship Products
              </motion.h2>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-12 h-[2px] bg-white/50 mx-auto lg:mx-0 mb-6" />
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-white/80 font-sans text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
                Our portfolio features proven, high-impact treatments across critical therapeutic segments.
              </motion.p>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link to="/products" className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#0e7065] font-sans font-bold text-[13px] uppercase tracking-widest rounded-full hover:bg-[#FAFAF8] hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl">
                  Explore Products
                </Link>
              </motion.div>
            </div>

            {/* Product Cards Grid */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
              className="relative z-10 grid grid-cols-2 gap-4 lg:gap-6 max-w-[450px] lg:max-w-[500px] mx-auto lg:mx-0 mt-8"
            >
              {[imgB1, imgB2, imgB3].map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
                  }}
                  className={`bg-white rounded-[24px] p-2 shadow-2xl h-[140px] md:h-[180px] lg:h-[200px] flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300 relative group ${idx === 2 ? 'col-span-2 w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.75rem)] mx-auto' : 'w-full'}`}
                >
                  <img src={img} alt={`Flagship ${idx + 1}`} className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#0e7065]/10 group-hover:bg-transparent transition-colors duration-300 rounded-[24px]" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image Area */}
          <div className="w-full lg:w-[55%] h-[400px] lg:h-auto relative overflow-hidden">
            <img src={imgB5} alt="Doctor and Patient" className="absolute inset-0 w-full h-full object-cover object-center" />
            {/* Dark gradient fade from the left on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0e7065] to-transparent mix-blend-multiply opacity-60" />
          </div>

        </div>
      </section>

    </>
  );
};

export default Home;
