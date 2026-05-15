import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import annoraLogo from '../assets/Annora_Logo-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0e7065] text-white pt-16 pb-8 px-6 lg:px-12 relative flex flex-col">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col relative z-10 flex-1">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-16 lg:mb-24">

          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
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

          <div className="lg:col-span-3 lg:col-start-8 flex flex-col items-center lg:items-start gap-5">
            <h4 className="text-white/50 text-[10px] tracking-[0.25em] uppercase font-accent font-bold mb-2 text-center lg:text-left">Company</h4>
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

          <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-5 mt-8 lg:mt-0">
            <h4 className="text-white/50 text-[10px] tracking-[0.25em] uppercase font-sans font-bold mb-2 text-center lg:text-left">Social</h4>
            <a href="#" className="font-sans text-lg lg:text-xl text-white/80 hover:text-white transition-colors relative overflow-hidden group w-fit">
              <span className="block transition-transform duration-500 group-hover:-translate-y-[120%]">LinkedIn</span>
              <span className="absolute inset-0 translate-y-[120%] transition-transform duration-500 group-hover:translate-y-0">LinkedIn</span>
            </a>
            <a href="#" className="font-sans text-lg lg:text-xl text-white/80 hover:text-white transition-colors relative overflow-hidden group w-fit">
              <span className="block transition-transform duration-500 group-hover:-translate-y-[120%]">Twitter</span>
              <span className="absolute inset-0 translate-y-[120%] transition-transform duration-500 group-hover:translate-y-0">Twitter</span>
            </a>

            <h4 className="text-white/50 text-[10px] tracking-[0.25em] uppercase font-sans font-bold mt-6 mb-2 text-center lg:text-left">Partner</h4>
            <a href="https://hetero.com/" target="_blank" rel="noopener noreferrer" className="font-sans text-lg lg:text-xl text-white/80 hover:text-white transition-colors relative overflow-hidden group w-fit">
              <span className="block transition-transform duration-500 group-hover:-translate-y-[120%]">Hetero</span>
              <span className="absolute inset-0 translate-y-[120%] transition-transform duration-500 group-hover:translate-y-0">Hetero</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/20 w-full">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={annoraLogo} alt="Annora" className="h-10 object-contain filter brightness-0 invert opacity-90" />
            <p className="text-white/70 text-xs md:text-sm font-sans tracking-widest uppercase text-center md:text-left">
              Copyright © 2026 Annora FZ-LLC, All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="https://hetero.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-xs md:text-sm tracking-[0.15em] uppercase transition-colors font-medium">Hetero Main Website</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm tracking-[0.15em] uppercase transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm tracking-[0.15em] uppercase transition-colors font-medium">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
