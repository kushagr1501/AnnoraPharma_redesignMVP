import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import annoraLogo from '../assets/Annora_Logo-removebg-preview.png';
import heroBg from '../assets/B2.PNG';
import imgB1 from '../assets/B1.PNG';
import imgB2 from '../assets/B2.PNG';
import imgB3 from '../assets/B3.PNG';
import imgB4 from '../assets/B4.PNG';
import imgB5 from '../assets/B5.PNG';
import imgB6 from '../assets/B6.PNG';
import imgB7 from '../assets/B7.PNG';
import { Eye, Target, BookOpen, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

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

  /* Preload hero image immediately on mount */
  useEffect(() => {
    const img = new Image();
    img.src = heroBg;
    if (img.complete) {
      setIsLoaded(true);
    } else {
      img.onload = () => setIsLoaded(true);
    }
  }, []);

  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yContent = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityContent = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <>
      {/* ─── Main: Hero Section ─── */}
      <motion.section
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
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
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-[0%_20%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-y-0 left-0 w-full md:w-[80%] lg:w-[70%] bg-gradient-to-r from-[#0e7065] via-[#0e7065]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full md:w-[60%] bg-gradient-to-r from-[#0e7065] to-transparent mix-blend-multiply opacity-50 pointer-events-none" />
        <div className="pt-28" />

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
              <h1 className="font-heading font-semibold text-white text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-[-0.02em] drop-shadow-lg">
                THE PROMISE OF A<br />HEALTHIER WORLD
              </h1>
            </motion.div>

            {/* ss */}
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

      {/* ─── What Drives Us (Vision, Mission, Values) ─── */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img src={imgB6} alt="What drives us" className="w-full h-full object-cover object-[center_30%]" />
          <div className="absolute inset-0 bg-[#073631]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[#0e7065]/50" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          
          {/* Heading aligned to right */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="flex justify-start lg:justify-end mb-12 lg:mb-16"
          >
            <h2 className="font-display text-white text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-wide">
              What drives <span className="text-[#d26245] font-bold">us</span>
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {[
              {
                icon: Eye,
                title: "OUR VISION",
                desc: "To be the leading generic pharmaceutical company in the region and meet the healthcare needs with excellence."
              },
              {
                icon: Target,
                title: "OUR MISSION",
                desc: "To provide access to high quality and affordable branded generic medication to the people for a healthier future."
              },
              {
                icon: BookOpen,
                title: "KNOWLEDGE",
                desc: "We value and respect Knowledge as the key enabler in our mission to develop affordable healthcare and cherish it in our team."
              },
              {
                icon: ShieldCheck,
                title: "QUALITY FOCUS",
                desc: "We are committed to the highest standards of Quality in every aspect of our business, raising those standards through continuous improvement."
              },
              {
                icon: Zap,
                title: "DYNAMISM",
                desc: "We are agile, pro-active and passionate about each and everything that we do to bring the best healthcare solutions."
              },
              {
                icon: HeartHandshake,
                title: "RESPONSIBILITY",
                desc: "We have a deep-rooted sense of responsibility towards all our stakeholders, striving relentlessly to deliver on those responsibilities."
              }
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                className="bg-[#FAFAF8]/95 backdrop-blur-sm rounded-[24px] p-8 lg:p-10 shadow-2xl shadow-black/20 border border-white/10 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="mb-8 group-hover:-translate-y-1 group-hover:scale-105 transition-transform duration-500 origin-left">
                  <val.icon className="w-12 h-12 text-[#d26245]" strokeWidth={1.2} />
                </div>
                <h3 className="font-sans font-bold text-[#1a1a1a] text-lg tracking-[0.15em] mb-4 uppercase">{val.title}</h3>
                <p className="text-[#1a1a1a]/60 text-[14px] leading-[1.8] font-sans">
                  {val.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* Flagship Products Section (Split Layout) */}
      <section className="w-full relative bg-white mt-12 lg:mt-16 pb-12 lg:pb-16">
        <div className="flex flex-col lg:flex-row w-full min-h-[700px]">

          {/* Left: Light Area */}
          <div className="w-full lg:w-[45%] bg-[#FAFAF8] p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center relative overflow-hidden">
            
            <div className="relative z-10 text-center lg:text-left mb-12 lg:mb-16">
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-display text-[#1a1a1a] text-4xl md:text-5xl lg:text-[3.5rem] mb-4 font-light">
                Flagship Products
              </motion.h2>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-12 h-[2px] bg-[#0e7065] mx-auto lg:mx-0 mb-6" />
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-[#1a1a1a]/70 font-sans text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
                Our portfolio features proven, high-impact treatments across critical therapeutic segments.
              </motion.p>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link to="/products" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0e7065] text-white font-sans font-bold text-[13px] uppercase tracking-widest rounded-full hover:bg-[#116259] hover:-translate-y-1 transition-all shadow-lg shadow-[#0e7065]/20">
                  EXPLORE PRODUCTS
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
                  className={`bg-[#f0f4f4] rounded-[24px] p-2 shadow-[0_8px_20px_rgb(0,0,0,0.06)] border border-[#0e7065]/5 h-[140px] md:h-[180px] lg:h-[200px] flex items-center justify-center hover:scale-105 transition-transform duration-300 relative group ${idx === 2 ? 'col-span-2 w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.75rem)] mx-auto' : 'w-full'}`}
                >
                  <div className="w-full h-full rounded-[16px] overflow-hidden relative">
                    <img src={img} alt={`Flagship ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image Area */}
          <div className="w-full lg:w-[55%] h-[400px] lg:h-auto relative overflow-hidden">
            <img src={imgB5} alt="Doctor and Patient" className="absolute inset-0 w-full h-full object-cover object-center" />
          </div>

        </div>
      </section>

    </>
  );
};

export default Home;
