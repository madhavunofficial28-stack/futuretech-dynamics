import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const mainRef = useRef(null);
  const missionTextRef = useRef(null);
  const visionTextRef = useRef(null);
  const coreValuesGridRef = useRef(null);

  const missionParagraph = "To enhance automotive comfort and safety through innovative RF, smart electronics, and connected mobility solutions — ensuring every journey is secure, seamless, and enjoyable.";
  const visionParagraph = "To be the global leader in automotive technology solutions, recognized for creating safe, comfortable, and intelligent mobility experiences for every driver and passenger.";

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Scroll Trigger Animations for All Sections
        gsap.utils.toArray('.animate-section').forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              },
            }
          );
        });

        // Water-like Word-by-Word Wave Animation for Mission Text
        if (missionTextRef.current) {
          const missionWords = missionTextRef.current.querySelectorAll('.water-word');
          gsap.fromTo(
            missionWords,
            { opacity: 0, x: -25, filter: 'blur(4px)' },
            {
              opacity: 1,
              x: 0,
              filter: 'blur(0px)',
              duration: 0.7,
              stagger: 0.04,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: missionTextRef.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }

        // Water-like Word-by-Word Wave Animation for Vision Text
        if (visionTextRef.current) {
          const visionWords = visionTextRef.current.querySelectorAll('.water-word');
          gsap.fromTo(
            visionWords,
            { opacity: 0, x: -25, filter: 'blur(4px)' },
            {
              opacity: 1,
              x: 0,
              filter: 'blur(0px)',
              duration: 0.7,
              stagger: 0.04,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: visionTextRef.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }

        // Left-to-Right Water-like Staggered Load Animation for Core Value Boxes
        if (coreValuesGridRef.current) {
          const valueBoxes = coreValuesGridRef.current.querySelectorAll('.value-box');
          gsap.fromTo(
            valueBoxes,
            { opacity: 0, x: -50, filter: 'blur(6px)' },
            {
              opacity: 1,
              x: 0,
              filter: 'blur(0px)',
              duration: 0.8,
              stagger: 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: coreValuesGridRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={mainRef} 
      className="w-full bg-white text-slate-800 overflow-hidden font-sans relative selection:bg-[#0052FF] selection:text-white"
    >
      <div className="relative z-10">

        {/* 1. ABOUT FUTURETECH DYNAMICS SECTION */}
        <section className="animate-section w-full px-6 sm:px-12 lg:px-16 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 w-full">
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A192F] leading-[1.1] mb-6 tracking-tight">
              Enabling the{" "}
              <div className="relative inline-block w-max">
                <div className="relative text-[#0052FF] py-1 drop-shadow-sm">
                  <span>Future of Mobility</span>
                </div>
              </div>
            </h1>
            
            {/* BADGES */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100/90 rounded-full border border-slate-200 shadow-sm">
                📍 Vadodara, Gujarat, India
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#0052FF] bg-blue-50 rounded-full border border-blue-200 shadow-sm">
                🏢 Established 2025
              </span>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl font-normal">
              FutureTech Dynamics is a cutting-edge division dedicated to enabling the future of mobility. Positioned at the intersection of technology and automotive evolution, we deliver advanced solutions in smart electronics, connectivity, and mechatronic systems — catering to the fast-evolving demands of the automotive and EV markets.
            </p>
          </div>
          
          {/* HERO IMAGE WITH HOVER ZOOM */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[400px] sm:h-[480px] border border-slate-200 bg-slate-900 w-full cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 via-transparent to-blue-500/10 group-hover:opacity-20 transition duration-500 z-10 pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Smart Automotive Concept" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </section>

        {/* 2 & 3. MISSION & VISION SECTION WITH LIQUID WORD ANIMATION */}
        <section className="w-full bg-slate-50/70 py-20 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
              
              {/* OUR MISSION */}
              <div className="animate-section">
                <div className="mb-4">
                  <span 
                    className="text-2xl md:text-3xl font-serif text-transparent tracking-wide block -mb-2"
                    style={{
                      WebkitTextStroke: '1px #0052FF',
                      color: 'transparent'
                    }}
                  >
                    Our
                  </span>
                  <h3 className="text-5xl md:text-6xl font-black text-slate-800 tracking-tight">
                    Mission
                  </h3>
                </div>

                {/* WATER MOTION PARAGRAPH TEXT */}
                <p ref={missionTextRef} className="text-gray-600 text-base md:text-lg leading-relaxed flex flex-wrap gap-x-[0.35rem] gap-y-1">
                  {missionParagraph.split(" ").map((word, index) => (
                    <span key={index} className="water-word inline-block will-change-transform">
                      {word}
                    </span>
                  ))}
                </p>
              </div>

              {/* OUR VISION */}
              <div className="animate-section">
                <div className="mb-4">
                  <span 
                    className="text-2xl md:text-3xl font-serif text-transparent tracking-wide block -mb-2"
                    style={{
                      WebkitTextStroke: '1px #0052FF',
                      color: 'transparent'
                    }}
                  >
                    Our
                  </span>
                  <h3 className="text-5xl md:text-6xl font-black text-slate-800 tracking-tight">
                    Vision
                  </h3>
                </div>

                {/* WATER MOTION PARAGRAPH TEXT */}
                <p ref={visionTextRef} className="text-gray-600 text-base md:text-lg leading-relaxed flex flex-wrap gap-x-[0.35rem] gap-y-1">
                  {visionParagraph.split(" ").map((word, index) => (
                    <span key={index} className="water-word inline-block will-change-transform">
                      {word}
                    </span>
                  ))}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. OUR CORE VALUES SECTION */}
        <section className="w-full py-20 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 animate-section">
            <span 
              className="text-2xl md:text-3xl font-serif text-transparent tracking-wide block -mb-2"
              style={{
                WebkitTextStroke: '1px #0052FF',
                color: 'transparent'
              }}
            >
              Our
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-3">
              Core Values
            </h2>
            <p className="text-gray-600 text-base">
              Principles guiding our innovation and excellence
            </p>
          </div>

          <div ref={coreValuesGridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Innovation", icon: "💡", desc: "Shaping future mobility with advanced RF, electronics, and automotive technologies." },
              { title: "Excellence", icon: "🏆", desc: "Delivering superior quality and reliability through precision engineering." },
              { title: "Collaboration", icon: "🤝", desc: "Partnering with OEMs and clients to co-create next-gen solutions." },
              { title: "Integrity", icon: "🛡️", desc: "Transparent and ethical practices building trust with every interaction." }
            ].map((value, idx) => (
              <div 
                key={idx} 
                className="value-box bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-200/80 hover:bg-[#0052FF] hover:text-white hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group cursor-default relative overflow-hidden shadow-sm will-change-transform"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-[#0A192F] group-hover:text-white mb-2 transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-500 group-hover:text-blue-100 text-sm leading-relaxed transition-colors">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. WHY CHOOSE FUTURETECH DYNAMICS? */}
        <section className="w-full bg-white text-slate-800 py-24 overflow-hidden relative px-6 sm:px-12 lg:px-16 border-t border-slate-200/80">
          <div className="w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
            
            <div className="lg:col-span-7 animate-section">
              <span className="text-[#0052FF] font-bold tracking-widest uppercase text-xs mb-2 block">
                What Sets Us Apart
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-[#0A192F]">
                Why Choose <span className="text-[#0052FF]">Futuretech Dynamics?</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { title: "Made in India", desc: "100% indigenous development and manufacturing supporting technological self-reliance." },
                  { title: "Cutting-edge Testing", desc: "State-of-the-art facilities with capabilities up to 110 GHz for high-quality assurance." },
                  { title: "Expert Team", desc: "Highly skilled engineers and researchers with deep expertise in RF and microwave technologies." }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex gap-4 items-start group p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/50 hover:border-[#0052FF] transition-all duration-300 shadow-sm"
                  >
                    <div className="mt-1 w-8 h-8 rounded-full bg-[#0052FF] flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-lg shadow-blue-500/40 group-hover:scale-110 transition-transform duration-300">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0A192F] group-hover:text-[#0052FF] transition-colors mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TESTING LAB IMAGE WITH HOVER ZOOM */}
            <div className="lg:col-span-5 w-full animate-section">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] group border border-slate-200 bg-slate-900 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Advanced Testing Lab" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}