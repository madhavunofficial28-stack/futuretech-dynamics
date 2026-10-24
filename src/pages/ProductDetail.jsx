import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { m } from 'framer-motion';

const productsData = {
  "adas-l3-l4": {
    title: "Advanced Driver Assistance Systems (ADAS) L3 & L4",
    tag: "Autonomous Systems",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "High-performance RADAR systems and advanced automation solutions enabling next-generation autonomous driving, object detection, and collision avoidance.",
    brochure: "#",
    keyFeatures: [
      "In-House RADAR Development: Precision-designed for reliable detection and tracking.",
      "Telemetry Ecosystem: Real-time V2V and V2I communication.",
      "Custom Algorithms: Proprietary automation algorithms for decision-making and safety.",
      "Modular Design: Customizable and upgradable systems for seamless vehicle integration."
    ],
    coreComponents: [
      "In-House Testing Lab capability up to 110 GHz",
      "High-Performance RADAR Transmitters & Receivers",
      "Centralized Domain Controllers and ECU Interfaces",
      "Proprietary Sensor Fusion Processing Units"
    ],
    capabilities: [
      "Tailored L3 & L4 automation solutions",
      "Robust V2V and V2I communication design",
      "Retrofit solutions and ADAS upgrades for existing cars"
    ],
    whyChooseUs: "Backed by comprehensive in-house testing up to 110 GHz, ensuring extreme reliability and scalable future-ready integration."
  },
  "automotive-electronics": {
    title: "Automotive Electronics & Embedded Systems",
    tag: "Smart Embedded Systems",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Smart vehicle control units, electronic control modules (ECUs), and high-efficiency embedded hardware built to strict automotive standards.",
    brochure: "#",
    keyFeatures: [
      "Embedded Hardware: Custom PCBs, amplifiers, and RF circuits built for efficiency.",
      "ECU Integration: Seamless communication with CAN-bus and vehicle control units.",
      "Signal Processing: Noise suppression and gain control for better cabin experience.",
      "Automotive Quality: Rugged, reliable, and compliant with standards."
    ],
    coreComponents: [
      "Custom Microcontroller Boards",
      "CAN-Bus Interface Modules",
      "Power Management ICs",
      "Ruggedized Enclosures"
    ],
    capabilities: [
      "Real-time vehicle telemetry processing",
      "Robust power distribution and surge protection",
      "High-temperature tolerance in engine bays"
    ],
    whyChooseUs: "Compliant with strict automotive quality standards ensuring zero-failure rates under heavy industrial usage."
  },
  "wireless-communication": {
    title: "Wireless Charging Solutions & BLE/Wi-Fi Modems",
    tag: "Connected Mobility",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Advanced 15W Qi-compliant wireless charging systems and BLE/Wi-Fi modems enabling seamless wireless Apple CarPlay and Android Auto[cite: 3].",
    brochure: "#",
    keyFeatures: [
      "Fast Charging: Supports up to 15W fast wireless charging for devices and EVs[cite: 3].",
      "Qi Protocol Compliance: Fully compliant with latest Qi standards for universal device support[cite: 3].",
      "Dual-Band Wi-Fi: Uses Bluetooth Low Energy (BLE) for pairing and Wi-Fi for high-speed data transfer[cite: 3].",
      "Made in India: 100% indigenously developed cost-effective alternative to imports[cite: 3]."
    ],
    coreComponents: [
      "Qi Certified Charging Coils & Transmitters[cite: 3]",
      "Bluetooth Low Energy (BLE) Modules[cite: 3]",
      "Wi-Fi Communication Transceivers[cite: 3]",
      "Active Thermal & Power Management ICs"
    ],
    capabilities: [
      "Seamless transmission of navigation, media, and voice control[cite: 3]",
      "Automotive-grade modem integration with vehicle ECUs[cite: 3]",
      "Customizable interface solutions for diverse infotainment platforms[cite: 3]"
    ],
    whyChooseUs: "Scalable, reliable, and entirely Made in India, lowering deployment costs while delivering superior charging and connectivity performance[cite: 3]."
  },
  "rf-antenna-technology": {
    title: "Shark Fin Antenna - Custom Design & Manufacturing",
    tag: "RF & Connectivity",
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Custom-designed Shark Fin Antennas integrating AM/FM, GPS, and LTE capabilities into a single sleek, aerodynamic housing.",
    brochure: "#",
    keyFeatures: [
      "AM/FM Performance: VSWR ≤ 1.4 | Gain ≥ 20.5 dB.",
      "GPS Performance: VSWR ≤ 1.5 | Gain ≥ 33 dB.",
      "LTE Connectivity: VSWR ≤ 1.5 (Typical).",
      "Custom Designs: Fully tailored shapes and sizes to fit unique vehicle requirements."
    ],
    coreComponents: [
      "Ceramic Patch GPS/GNSS Antennas",
      "Low Noise Amplifiers (LNAs)",
      "Multi-Band Cellular Elements",
      "Aerodynamic Radome Housing"
    ],
    capabilities: [
      "Rapid prototyping for testing and validation",
      "Performance tuning optimized for global standards",
      "Seamless integration into automotive and aerospace applications"
    ],
    whyChooseUs: "Precision-engineered end-to-end manufacturing tuned for superior global communication standards and rugged durability."
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  
  const product = productsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900 px-4">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you are looking for does not exist.</p>
        <Link to="/products" className="bg-[#0052FF] text-white px-6 py-3 rounded-xl font-semibold shadow-md">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleDownloadClick = () => {
    if (downloaded || downloading) return;
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      const link = document.createElement('a');
      link.href = product.brochure;
      link.download = `${product.title}-Brochure.pdf`;
      link.click();
    }, 3000);
  };

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 min-h-screen py-24 px-4 sm:px-8 lg:px-16 selection:bg-[#0052FF] selection:text-white">
      <div className="w-full" ref={contentRef}>
        
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0052FF] bg-blue-50/80 hover:bg-blue-100 border border-blue-200/60 px-4 py-2 rounded-full mb-10 transition-all cursor-pointer shadow-sm"
        >
          ← Back to Products
        </button>

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16 bg-white p-8 sm:p-12 lg:p-16 rounded-[2.5rem] border border-slate-200/70 shadow-xl shadow-slate-100">
          <div className="lg:col-span-7">
            <span className="text-[#0052FF] text-xs font-bold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 inline-block mb-4 shadow-sm">
              {product.tag}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A192F] mb-6 leading-[1.15]">
              {product.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>
            
            <div className="flex flex-wrap gap-5 items-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Enquire About This Product</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              {/* Tailwind Animated Download Button */}
              <label 
                onClick={handleDownloadClick}
                className={`relative flex items-center border-2 rounded-full p-1.5 cursor-pointer transition-all duration-400 select-none overflow-hidden ${
                  downloaded ? 'w-[145px] border-green-500 bg-white' : downloading ? 'w-[57px] border-[#0052FF] bg-white' : 'w-[160px] border-[#0052FF] bg-white'
                }`}
                style={{ height: '55px' }}
              >
                <div className={`h-[41px] w-[41px] rounded-full bg-[#0052FF] flex items-center justify-center transition-all duration-400 relative shadow-md ${downloading ? 'animate-pulse rotate-180 bg-[#003db3]' : ''}`}>
                  {downloading ? (
                    <div className="w-[14px] h-[14px] bg-white rounded-sm"></div>
                  ) : (
                    <svg className="w-[22px] h-[22px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19V5m0 14-4-4m4 4 4-4" />
                    </svg>
                  )}
                </div>
                <span className={`absolute right-6 text-sm font-bold transition-all duration-400 ${downloading || downloaded ? 'opacity-0 invisible' : 'opacity-100 visible text-[#0A192F]'}`}>
                  Download
                </span>
                <span className={`absolute right-12 text-sm font-bold text-green-600 transition-all duration-400 ${downloaded ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  Open
                </span>
              </label>

            </div>
          </div>
          
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900 group">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-lg shadow-slate-100 border border-slate-200/70">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#0052FF]"></span>
              Key Features & Specifications
            </h3>
            <ul className="space-y-4">
              {product.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-gray-700 bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0052FF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm sm:text-base font-medium leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-lg shadow-slate-100 border border-slate-200/70">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#0052FF]"></span>
              Core Components
            </h3>
            <ul className="space-y-4">
              {product.coreComponents.map((comp, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-gray-700 bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-slate-200 text-[#0A192F] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">•</span>
                  <span className="text-sm sm:text-base font-medium leading-relaxed">{comp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-lg shadow-slate-100 border border-slate-200/70">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] mb-6">Capabilities & Services</h3>
            <ul className="space-y-3.5">
              {product.capabilities.map((cap, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-blue-50/50 p-4 rounded-xl text-gray-800 font-semibold text-sm sm:text-base border border-blue-100/60">
                  <span>🚀</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0A192F] text-white p-8 sm:p-12 rounded-[2rem] shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div>
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase bg-blue-950 px-3 py-1 rounded-md border border-blue-800 inline-block mb-3">Excellence</span>
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {product.whyChooseUs}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800">
              <Link to="/contact" className="text-blue-400 font-bold hover:text-white transition-colors inline-flex items-center gap-2 text-sm sm:text-base">
                Get custom engineering consultation →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}