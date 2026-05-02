import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Careers from './pages/Careers';
import NewsEvents from './pages/NewsEvents';
import Pharmacovigilance from './pages/Pharmacovigilance';
import Contact from './pages/Contact';

// Global ref so ScrollToTop can access the Lenis instance
let lenisInstance = null;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset Lenis scroll position immediately (no animation)
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }
    // Fallback for native scroll
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
    });

    lenisInstance = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<NewsEvents />} />
            <Route path="/pharmacovigilance" element={<Pharmacovigilance />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

