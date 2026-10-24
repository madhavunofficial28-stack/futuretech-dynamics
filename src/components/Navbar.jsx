import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Logo Image Imported from src/assets/
import logoImg from '../assets/futuretech_logo.png';

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Route change hote hi dropdown automatically close ho jayega
  useEffect(() => {
    setActive(null);
  }, [location.pathname]);

  const productItems = [
    { 
      title: "RF & Antenna Technology", 
      desc: "High-performance radio frequency components, customized antennas, and microwave engineering.", 
      icon: (
        <svg className="w-5 h-5 text-[#0052FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M2.929 8.929a15 15 0 0121.214 0" />
        </svg>
      )
    },
    { 
      title: "Wireless Communication Systems", 
      desc: "Next-gen communication protocols, BLE/Wi-Fi modems, and seamless connectivity modules.", 
      icon: (
        <svg className="w-5 h-5 text-[#0052FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      title: "Automotive Electronics & Embedded Systems", 
      desc: "Smart vehicle control units, real-time monitoring, and encrypted embedded hardware.", 
      icon: (
        <svg className="w-5 h-5 text-[#0052FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    { 
      title: "Advanced Driver Assistance Systems (ADAS)", 
      desc: "Advanced autonomous driving assistance, in-house RADAR development, and AI safety mechanisms.", 
      icon: (
        <svg className="w-5 h-5 text-[#0052FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products", hasDropdown: true },
    { name: "Capabilities", path: "/capabilities" },
    { name: "Contact Us", path: "/contact" }
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-slate-800 border-b border-slate-200/80 shadow-sm transition-all">
      <div className="w-full px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between" onMouseLeave={() => setActive(null)}>
        
        {/* BRAND LOGO IMAGE */}
        <Link to="/" onClick={() => setActive(null)} className="flex items-center gap-3 group py-2">
          <img 
            src={logoImg} 
            alt="FutureTech Dynamics" 
            className="h-12 sm:h-14 w-auto object-contain group-hover:opacity-90 transition-opacity" 
          />
        </Link>

        {/* DESKTOP NAV LINKS + SOCIAL ICONS (RIGHT ALIGNED) */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <nav className="flex items-center space-x-6 relative">
            <Link 
              to="/" 
              onClick={() => setActive(null)}
              className={`text-sm font-medium transition-colors ${isActiveLink('/') ? 'text-[#0052FF] font-semibold border-b-2 border-[#0052FF] pb-1' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              onClick={() => setActive(null)}
              className={`text-sm font-medium transition-colors ${isActiveLink('/about') ? 'text-[#0052FF] font-semibold border-b-2 border-[#0052FF] pb-1' : 'text-slate-600 hover:text-slate-900'}`}
            >
              About Us
            </Link>

            {/* Products Dropdown (Mega-Menu) */}
            <div className="relative" onMouseEnter={() => setActive("Products")}>
              <Link 
                to="/products"
                onClick={() => setActive(null)}
                className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${isActiveLink('/products') || active === "Products" ? 'text-[#0052FF] font-semibold border-b-2 border-[#0052FF] pb-1' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Products 
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${active === "Products" ? 'rotate-180 text-[#0052FF]' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <AnimatePresence>
                {active === "Products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full -right-28 pt-4 w-[900px]"
                  >
                    {/* Main Popup Container */}
                    <div className="bg-white text-slate-800 rounded-3xl shadow-2xl shadow-slate-300/70 border border-slate-200/80 p-5 overflow-hidden grid grid-cols-3 gap-4">
                      
                      {/* Left & Middle 4 Product Cards */}
                      <div className="col-span-2 grid grid-cols-2 gap-3">
                        {productItems.map((item, idx) => (
                          <Link 
                            to="/products" 
                            key={idx} 
                            onClick={() => setActive(null)} 
                            className="group relative flex flex-col justify-between p-4 rounded-2xl bg-slate-50/60 hover:bg-slate-100/80 border border-slate-100 hover:border-slate-300 transition-all duration-300 shadow-sm"
                          >
                            <div>
                              {/* Round Icon Badge */}
                              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                              </div>

                              {/* Title */}
                              <h5 className="text-sm font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors mb-1">
                                {item.title}
                              </h5>

                              {/* Description */}
                              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                                {item.desc}
                              </p>
                            </div>

                            {/* Arrow Link */}
                            <div className="mt-3 flex justify-end">
                              <span className="text-slate-800 text-sm font-bold group-hover:text-[#0052FF] group-hover:translate-x-1 transition-all duration-300">
                                →
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Right Banner Box */}
                      <div className="col-span-1 relative rounded-2xl overflow-hidden bg-slate-900 p-6 text-white flex flex-col justify-between shadow-lg group">
                        <img 
                          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" 
                          alt="Automotive Electronics Technology" 
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent pointer-events-none" />

                        <div className="relative z-10">
                          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 border border-white/20">
                            Next-Gen Tech
                          </span>
                          <h4 className="text-2xl font-extrabold leading-tight tracking-tight drop-shadow-md">
                            Innovative Engineering. <br />
                            Better Mobility.
                          </h4>
                        </div>

                        <div className="relative z-10 pt-8">
                          <Link 
                            to="/products" 
                            onClick={() => setActive(null)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 text-xs font-bold shadow-md hover:bg-slate-100 transition-all duration-300 hover:scale-105"
                          >
                            Explore All Products
                            <span>→</span>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/capabilities" 
              onClick={() => setActive(null)}
              className={`text-sm font-medium transition-colors ${isActiveLink('/capabilities') ? 'text-[#0052FF] font-semibold border-b-2 border-[#0052FF] pb-1' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Capabilities
            </Link>

            <Link 
              to="/contact" 
              onClick={() => setActive(null)}
              className={`text-sm font-medium transition-colors ${isActiveLink('/contact') ? 'text-[#0052FF] font-semibold border-b-2 border-[#0052FF] pb-1' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* RIGHT SOCIAL ICONS */}
          <div className="flex items-center space-x-4 pl-4 border-l border-slate-200 text-slate-500">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#0052FF] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#0052FF] transition-colors">
              <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#0052FF] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none ml-auto"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>

      {/* FULL-SCREEN SLIDE DRAWER MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 md:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white text-slate-800 z-50 p-8 flex flex-col justify-between shadow-2xl border-l border-slate-200 md:hidden"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Navigation</span>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link, idx) => {
                    const active = isActiveLink(link.path);
                    return (
                      <Link 
                        key={idx}
                        to={link.path} 
                        onClick={() => { setMobileMenuOpen(false); setActive(null); }} 
                        className={`group flex items-center gap-2 text-xl font-medium transition-all ${active ? 'text-[#0052FF] font-bold' : 'text-slate-600 hover:text-slate-900'}`}
                      >
                        {active && (
                          <span className="text-[#0052FF] text-lg font-mono font-bold transition-transform group-hover:translate-x-1">
                            ↗
                          </span>
                        )}
                        <span className={active ? "border-b-2 border-[#0052FF] pb-0.5" : ""}>
                          {link.name}
                        </span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-8 border-t border-slate-200 flex items-center gap-6 text-slate-500">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#0052FF] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#0052FF] transition-colors">
                  <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#0052FF] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}