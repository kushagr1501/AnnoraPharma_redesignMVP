import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import annoraLogo from '../assets/Annora_Logo-removebg-preview.png';

const navLinks = [
  { label: 'Home Page', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'News and Events', href: '/news' },
  { label: 'Careers', href: '/careers' },
  { label: 'Pharmacovigilance', href: '/pharmacovigilance' },
  { label: 'Contact', href: '/contact', bold: true },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Determine text colors based on whether we are on the Home page
  const isHome = location.pathname === '/';
  
  // If not home, we might want a dark text for the navbar, or a solid background. 
  // Let's use a solid teal or dark background for non-home pages so white text still works, 
  // or we change text to dark. Let's make the background dark on non-home pages.
  const headerClass = isHome 
    ? "absolute top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-12 xl:px-16 py-6 lg:py-8"
    : "sticky top-0 left-0 right-0 z-50 bg-[#0e7065] px-6 md:px-10 lg:px-12 xl:px-16 py-4 shadow-md";

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={headerClass}
      >
        <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between">
          <Link to="/">
            <img src={annoraLogo} alt="Annora Pharma Logo" className="h-6 lg:h-7 xl:h-8 object-contain brightness-0 invert" />
          </Link>
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href}
                className={`text-[11px] xl:text-[12px] uppercase tracking-[0.15em] font-accent transition-colors whitespace-nowrap ${link.bold
                  ? 'text-white font-bold hover:text-[#e69882]'
                  : 'text-white/70 hover:text-white'
                  }`}>
                {link.label}
              </Link>
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
            className="fixed inset-0 z-[100] bg-white flex flex-col"
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
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className={`text-[1.6rem] font-display py-3 border-b border-[#1a1a1a]/5 transition-colors ${link.bold
                      ? 'text-[#0e7065]'
                      : 'text-[#1a1a1a]/70 hover:text-[#0e7065]'
                      }`}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
