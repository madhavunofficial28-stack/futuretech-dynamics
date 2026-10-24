import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState(0);
  const mainRef = useRef(null);
  const contentRef = useRef(null);

  const capabilitiesData = [
    {
      title: "Design & Development",
      category: "Engineering & R&D",
      badge: "Custom ADAS & Antennas",
      description: "Tailored Level 3 & Level 4 automation solutions powered by proprietary algorithms, alongside high-performance custom multi-band antenna integration.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Custom ADAS Development: Level 3 & 4 Automation",
        "V2V / V2I Communication & Custom Algorithms",
        "Modular Design & Scalable Architecture",
        "Custom Shark Fin Antennas (AM/FM/GPS/LTE)",
        "Custom Shapes, Sizes & Superior Performance",
        "Compliant with Global Automotive Standards"
      ]
    },
    {
      title: "Manufacturing & Production",
      category: "100% Indigenous Assembly",
      badge: "End-to-End & PCB Assembly",
      description: "Complete manufacturing solutions from prototype to high-volume production, integrated with advanced PCB assembly capabilities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "End-to-End Manufacturing: Prototype to Production",
        "Rapid Prototyping & Quality Control",
        "Scalable Production & Cost Optimization",
        "PCB Assembly: SMT (Surface Mount Technology)",
        "Through-Hole Assembly & Multi-layer PCBs",
        "Automated Quality & Optical Testing"
      ]
    },
    {
      title: "Testing & Validation",
      category: "Millimeter-Wave Range",
      badge: "Anechoic Testing",
      description: "State-of-the-art testing infrastructure capable of handling signals up to 110 GHz, anechoic chamber measurements, ISO 26262 functional safety validation, and automated EMI/EMC compliance.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "RF Spectrum Testing up to 110 GHz",
        "Anechoic Chamber Beam Patterning",
        "ISO 26262 ASIL Safety Compliance",
        "Thermal, Shock & Vibration Cycling"
      ]
    },
    {
      title: "Integration & Support",
      category: "OEM & Field Lifecycle",
      badge: "Vehicle-Level V2X",
      description: "End-to-end vehicle-level system integration, CAN/LIN telemetry setup, seamless Tier-1 & OEM co-engineering, and dedicated long-term technical support across global supply chains.",
      image: "https://images.unsplash.com/photo-1558441719-670b357021bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Vehicle CAN / LIN / Ethernet Integration",
        "Direct Tier-1 & OEM Co-Engineering",
        "OTA Firmware & Field Lifecycle Support",
        "Dedicated Engineering Consultation"
      ]
    }
  ];

  // Tab change animation
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  const activeData = capabilitiesData[activeTab];

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <div ref={mainRef} className="w-full py-16 px-6 sm:px-12 lg:px-16 font-sans relative z-10 min-h-screen box-border">
        <div className="w-full">
          
          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-[#0052FF] uppercase bg-blue-50/90 rounded-full border border-blue-200/80 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-ping"></span>
              Engineering Workflow Spectrum
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] mb-4 tracking-tight">
              Capabilities Architecture
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              An end-to-end technological pipeline driving the future of smart electronics and connected mobility.
            </p>
          </div>

          {/* STEP TABS WITH UNDERLINE */}
          <div className="relative mb-16 w-full">
            
            {/* Horizontal Line Running Across the Bottom of Tabs */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-slate-200 z-0" />

            {/* Grid of Minimal Phase Items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {capabilitiesData.map((cap, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className="group flex flex-col items-center text-center focus:outline-none transition-all duration-300 py-2"
                  >
                    {/* Clean Title with Active Underline */}
                    <div className="relative pb-3 px-3">
                      <h4 className={`text-sm sm:text-base font-bold transition-colors ${
                        isActive ? 'text-[#0052FF] font-extrabold' : 'text-slate-600 group-hover:text-slate-900'
                      }`}>
                        {cap.title}
                      </h4>

                      {/* Active Blue Underline Bar */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0052FF] rounded-full z-20 shadow-sm shadow-blue-500/50" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* FULL EDGE-TO-EDGE SHOWCASE SECTION */}
          <div 
            ref={contentRef} 
            className="w-full relative overflow-hidden grid lg:grid-cols-12 gap-8 lg:gap-16 items-center py-6"
          >
            {/* LEFT CONTENT AREA */}
            <div className="lg:col-span-7 z-10 w-full">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-[#0052FF] border border-blue-200">
                  {activeData.category}
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-700 border border-slate-300">
                  {activeData.badge}
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A192F] mb-6">
                {activeData.title}
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                {activeData.description}
              </p>

              {/* FEATURE MATRIX */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {activeData.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-[#0052FF] flex items-center justify-center text-white text-xs font-bold shrink-0">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl transition-all shadow-md shadow-blue-500/20 hover:-translate-y-0.5"
              >
                Consult On {activeData.title}
                <span>→</span>
              </Link>
            </div>

            {/* RIGHT DISPLAY IMAGE */}
            <div className="lg:col-span-5 relative z-10 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[380px] sm:h-[450px] border border-slate-200 bg-slate-100 group w-full">
                <img
                  src={activeData.image}
                  alt={activeData.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    
  );
}