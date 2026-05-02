import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import annoraLogo from '../assets/Annora_Logo-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0e7065] text-white pt-24 pb-8 px-6 lg:px-12 relative overflow-hidden flex flex-col">
      {/* Decorative large glow for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] max-w-[1200px] h-[600px] bg-[#1a8578] rounded-[100%] blur-[120px] opacity-30 pointer-events-none" />

      <div className="w-full max-w-[1800px] mx-auto flex flex-col relative z-10 flex-1">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-16 lg:mb-24">

          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-white text-5xl lg:text-7xl mb-8 leading-[1.1] tracking-tight"
            >
              Let's shape the<br />future of healthcare.
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Link
                to="/contact"
                className="group relative inline-flex px-10 py-5 bg-white text-[#0e7065] rounded-full overflow-hidden font-accent font-bold tracking-[0.15em] uppercase text-xs"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Get in touch</span>
                <div className="absolute inset-0 bg-[#d26245] scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.8,0,0.2,1)] group-hover:scale-y-100" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-3 lg:col-start-8 flex flex-col gap-5">
            <h4 className="text-white/50 text-[10px] tracking-[0.25em] uppercase font-accent font-bold mb-2">Company</h4>
            {[
              { name: 'About Us', path: '/about' },
              { name: 'Products', path: '/products' },
              { name: 'Careers', path: '/careers' },
              { name: 'News & Events', path: '/news' },
              { name: 'Pharmacovigilance', path: '/pharmacovigilance' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <Link key={link.name} to={link.path} className="font-sans text-lg lg:text-xl text-white/80 hover:text-white transition-colors relative overflow-hidden group w-fit">
                <span className="block transition-transform duration-500 group-hover:-translate-y-[120%]">{link.name}</span>
                <span className="absolute inset-0 translate-y-[120%] transition-transform duration-500 group-hover:translate-y-0">{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-white/50 text-[10px] tracking-[0.25em] uppercase font-sans font-bold mb-2">Social</h4>
            <a href="#" className="font-sans text-lg lg:text-xl text-white/80 hover:text-[#e69882] transition-colors relative overflow-hidden group w-fit">
              <span className="block transition-transform duration-500 group-hover:-translate-y-[120%]">LinkedIn</span>
              <span className="absolute inset-0 translate-y-[120%] transition-transform duration-500 group-hover:translate-y-0">LinkedIn</span>
            </a>
            <a href="#" className="font-sans text-lg lg:text-xl text-white/80 hover:text-[#e69882] transition-colors relative overflow-hidden group w-fit">
              <span className="block transition-transform duration-500 group-hover:-translate-y-[120%]">Twitter</span>
              <span className="absolute inset-0 translate-y-[120%] transition-transform duration-500 group-hover:translate-y-0">Twitter</span>
            </a>
          </div>
        </div>

        {/* Massive Typography Brand */}
        <div className="w-full flex justify-center items-center border-t border-white/10 pt-16 pb-12 overflow-hidden mt-auto">
          <motion.img
            src={annoraLogo}
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-[80vw] lg:w-[60vw] h-auto object-contain filter brightness-0 invert opacity-90"
            alt="Annora Pharma"
          />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/10 w-full">
          <p className="text-white/40 text-[11px] md:text-xs font-sans tracking-widest uppercase text-center md:text-left">
            Copyright © {new Date().getFullYear()} Annora FZ-LLC, All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
