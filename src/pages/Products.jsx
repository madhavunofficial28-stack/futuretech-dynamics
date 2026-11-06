import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* images */
import Home3 from '../assets/home_pg-3-image.jpg';
import Home4 from '../assets/home_pg-4-image.png';
import Home5 from '../assets/home_pg-5-image.png';
import Home6 from '../assets/home_pg-6-image.png';

gsap.registerPlugin(ScrollTrigger);

const productsData = [
  {
    id: "rf-antenna-technology",
    title: "Shark Fin Antenna - Custom Design & Manufacturing",
    badge: "Antenna Tech",
    desc: "High-performance shark fin antennas engineered for superior vehicle connectivity, GPS, and multi-band radio frequency reception.",
    img: Home3,
    features: [
      "AM/FM Performance: VSWR ≤ 1.4 | Gain ≥ 20.5 dB.",
      "GPS Performance: VSWR ≤ 1.5 | Gain ≥ 33 dB.",
      "LTE Connectivity: VSWR ≤ 1.5 (Typical).",
      "Custom Designs: Fully tailored shapes and sizes to fit unique vehicle requirements.",
      "Ceramic Patch: GPS/GNSS antennas with Low Noise Amplifiers (LNAs).",
      "Durability: Aerodynamic radome housing built for rugged weather."
    ]
  },
  {
    id: "wireless-communication-systems",
    title: "Wireless Communication Systems",
    badge: "Wireless Tech",
    desc: "Next-gen communication protocols, high-speed connectivity modules, and seamless wireless data transfer systems.",
    img: Home4,
    features: [
      "High-Speed Data Transfer: Supports advanced communication protocols for modern vehicles.",
      "Seamless Integration: Built for robust OEM compatibility and smooth infotainment linkage.",
      "Automotive-Grade Reliability: Designed to withstand extreme environmental conditions inside vehicles.",
      "Custom Solutions: Tailored wireless interface modules for diverse automotive platforms.",
      "RF Transceivers: High-frequency circuits with impedance matching.",
      "Diagnostics: Robust vehicle telemetry and communication modules."
    ]
  },
  {
    id: "adas-systems",
    title: "Advanced Driver Assistance Systems (ADAS)",
    badge: "Autonomous Systems",
    desc: "Advanced autonomous driving assistance, in-house RADAR development, and AI safety mechanisms.",
    img: Home6,
    features: [
      "In-House RADAR Development: Precision-designed for reliable detection and tracking.",
      "Telemetry Ecosystem: Real-time V2V and V2I communication.",
      "Custom Algorithms: Proprietary automation algorithms for decision-making and safety.",
      "Modular Design: Customizable and upgradable systems for seamless vehicle integration.",
      "Testing Lab: Comprehensive in-house testing capability up to 110 GHz.",
      "Domain Controllers: Centralized ECU interfaces and sensor fusion processing units."
    ]
  },
  {
    id: "drone-solution",
    title: "Customised Drone Solution",
    badge: "Drone Tech",
    desc: "Precision field mapping, automated workflow systems, and high-endurance UAV solutions for agriculture and defense sectors.",
    img: Home5,
    features: [
      "Precision Field Mapping & Spraying: Enables accurate, automated operations transferable to autonomous agri-vehicles.",
      "Automated Workflow Systems: Intelligent route planning and flow control systems align with mission automation.",
      "Battery & Power Efficiency: High-endurance, fast-charging batteries offer scalable insights for EV farm vehicles and UAVs.",
      "Terrain-Adaptive Capability: Proven drone adaptability across varying altitudes and environments.",
      "Dual-Use Foundation: Supports both smart farming and tactical defense operations.",
      "Real-Time Telemetry: Live data link transceivers and autonomous flight controllers."
    ]
  }
];

export default function Products() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. MAIN VERTICAL BEAM ANIMATION
        if (lineRef.current && containerRef.current) {
          gsap.fromTo(
            lineRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 20%",
                end: "bottom 90%",
                scrub: 0.5,
              }
            }
          );
        }

        // 2. RIGHT SIDE CONTENT FADE-IN
        const items = gsap.utils.toArray('.timeline-content');
        items.forEach((item) => {
          gsap.fromTo(
            item,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white text-slate-800 py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      
      {/* HEADER SECTION */}
      <div className="w-full text-center mb-20">
        <span className="text-[#0052FF] text-sm font-bold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 inline-block">
          Our Flagship Innovations
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A192F] mt-4 mb-4">
          Core Products 
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our range of high-frequency automotive electronics and intelligent mobility solutions.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="w-full relative">
        
        {/* VERTICAL BEAM LINE */}
        <div className="absolute left-[11px] md:left-[23px] top-3 bottom-0 w-[2px] bg-slate-200 z-0">
          <div 
            ref={lineRef} 
            className="w-full bg-gradient-to-b from-[#0052FF] via-cyan-400 to-[#0052FF] origin-top shadow-[0_0_12px_rgba(0,82,255,0.4)]"
            style={{ height: "100%" }}
          ></div>
        </div>

        {/* TIMELINE ITEMS LIST */}
        <div className="space-y-24 md:space-y-32">
          {productsData.map((prod) => (
            <div key={prod.id} className="timeline-row grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative pl-10 md:pl-16">
              
              {/* TIMELINE DOT */}
              <div className="absolute left-[12px] md:left-[24px] top-1 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#0052FF] flex items-center justify-center z-10 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0052FF] animate-pulse"></div>
              </div>

              {/* LEFT COLUMN: TITLE, BADGE, DESC, IMAGE */}
              <div className="w-full flex flex-col justify-start">
                <div>
                  <span className="text-xs font-bold text-[#0052FF] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md border border-blue-200 inline-block mb-3">
                    {prod.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] leading-snug mb-3">
                    {prod.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {prod.desc}
                  </p>
                </div>

                {/* PRODUCT IMAGE */}
                <Link to={`/products/${prod.id}`} className="relative rounded-2xl overflow-hidden border border-slate-200 group block cursor-pointer shadow-md mt-auto">
                  <img 
                    src={prod.img} 
                    alt={prod.title} 
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-[#0A192F]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#0052FF] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg">
                      View Full Specifications →
                    </span>
                  </div>
                </Link>
              </div>

              {/* RIGHT COLUMN: KEY SPECIFICATIONS & FEATURES */}
              <div className="timeline-content w-full bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl hover:border-blue-400 transition-colors duration-300 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0052FF] uppercase tracking-wider mb-6 pb-3 border-b border-slate-200">
                    Key Specifications & Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {prod.features && prod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#0052FF] mt-1.5 flex-shrink-0"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EXPLORE DETAILS BUTTON */}
                <div className="pt-2">
                  <Link 
                    to={`/products/${prod.id}`}
                    className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>Explore Complete Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}