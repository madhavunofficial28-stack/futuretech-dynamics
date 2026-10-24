import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* images */
import Home1 from '../assets/home pg. 1 image.jpg';
import Home2 from '../assets/home pg. 2 image.jpg';
import Home3 from '../assets/home pg. 3 image.jpg';
import Home4 from '../assets/home pg. 4 image.jpg';
import Home5 from '../assets/home pg. 5 image.jpg';
import Home6 from '../assets/home pg. 6 image.png';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef(null);
  const heroSectionRef = useRef(null);
  const stickyWrapperRef = useRef(null);
  const containerRef = useRef(null);
  const topHeadingRef = useRef(null);
  
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const mobilityRef = useRef(null);
  const ctaRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        
        // 1. ACETERNETY STYLE CONTAINER SCROLL ANIMATION
        if (heroSectionRef.current && containerRef.current && stickyWrapperRef.current) {
          
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: "top top",
              end: "+=120%", 
              scrub: 0.5,    
              pin: stickyWrapperRef.current,
              pinSpacing: true,
              anticipatePin: 1
            }
          });

          // Container straightens, scales up, and moves UP to overlap/cover the heading
          tl.fromTo(
            containerRef.current,
            { 
              rotationX: 20, 
              scale: 0.85, 
              y: 80 
            },
            {
              rotationX: 0,
              scale: 1,
              y: -140, // Container moves upwards to cover the title above
              ease: "none",
            },
            0
          );

          // Top Title translates down slightly and fades back for depth
          if (topHeadingRef.current) {
            tl.to(
              topHeadingRef.current,
              {
                y: 40,
                opacity: 0.3,
                scale: 0.95,
                ease: "none",
              },
              0
            );
          }
        }

        // 2. HERO TEXT & IMAGE ENTRY ANIMATION
        const heroTl = gsap.timeline();
        if (heroTextRef.current && heroImageRef.current) {
          heroTl
            .fromTo(
              heroTextRef.current.children,
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out" }
            )
            .fromTo(
              heroImageRef.current,
              { scale: 0.8, opacity: 0, rotationY: 15 },
              { scale: 1, opacity: 1, rotationY: 0, duration: 1.1, ease: "power2.out" },
              "-=0.6"
            );

          gsap.to(heroImageRef.current, {
            y: -14,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.easeInOut"
          });
        }

        // 3. ABOUT SECTION SCROLL TRIGGER
        if (aboutRef.current) {
          gsap.fromTo(
            aboutRef.current.children,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.18,
              ease: "power3.out",
              scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // 4. CORE PRODUCTS CARDS REVEAL
        if (productsRef.current) {
          gsap.fromTo(
            productsRef.current.children,
            { y: 70, opacity: 0, scale: 0.92 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: productsRef.current,
                start: "top 82%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // 5. MOBILITY VISION SECTION
        if (mobilityRef.current) {
          gsap.fromTo(
            mobilityRef.current,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: mobilityRef.current,
                start: "top 78%"
              }
            }
          );
        }

        // 6. CONTACT CTA SECTION
        if (ctaRef.current) {
          gsap.fromTo(
            ctaRef.current,
            { scale: 0.9, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ctaRef.current,
                start: "top 85%"
              }
            }
          );
        }
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const coreProducts = [
    {
      id: "rf-antenna-technology",
      title: "RF & Antenna Technology",
      description: "High-performance radio frequency components, customized antennas, and microwave engineering.",
      image: Home4,
      tag: "RF & Connectivity"
    },
    {
      id: "wireless-communication-systems",
      title: "Wireless Communication Systems",
      description: "Next-gen communication protocols, BLE/Wi-Fi modems, and seamless connectivity modules.",
      image: Home5,
      tag: "Wireless Tech"
    },
    {
      id: "automotive-electronics-embedded",
      title: "Automotive Electronics & Embedded Systems",
      description: "Smart vehicle control units, real-time monitoring, and encrypted embedded hardware.",
      image: Home6,
      tag: "Smart Electronics"
    },
    {
      id: "adas-systems",
      title: "Advanced Driver Assistance Systems (ADAS)",
      description: "Advanced autonomous driving assistance, in-house RADAR development, and AI safety mechanisms.",
      image: Home3,
      tag: "Autonomous Systems"
    }
  ];

  return (
    <div ref={mainRef} className="w-full bg-white text-slate-800 selection:bg-[#0052FF] selection:text-white overflow-hidden">
      
      {/* 1. HERO SECTION WITH CONTAINER SCROLL */}
      <section ref={heroSectionRef} className="h-[200vh] relative bg-transparent">
        <div ref={stickyWrapperRef} className="h-screen w-full flex flex-col items-center justify-start pt-12 sm:pt-16 relative overflow-hidden px-4 sm:px-6" style={{ perspective: "1000px" }}>
          
          {/* TOP HEADING OVER THE CONTAINER */}
          <div ref={topHeadingRef} className="text-center max-w-4xl mx-auto z-0 mb-6 sm:mb-8 pointer-events-none transform-gpu">
            <br></br>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A192F] tracking-tight leading-none uppercase">
              ADVANCED AUTOMOTIVE INNOVATION
            </h1>
          </div>

          {/* THE DEVICE-LIKE CONTAINER THAT SCROLLS UP & COVERS THE TEXT */}
          <div 
            ref={containerRef}
            className="relative w-full max-w-[90rem] bg-white rounded-[2rem] sm:rounded-[3rem] p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.18),_0_0_0_12px_#1e293b] border border-slate-700/50 z-10 transform-gpu will-change-transform"
          >
            
            {/* INNER SCREEN CONTAINER */}
            <div className="bg-slate-50 rounded-[1.5rem] sm:rounded-[2.2rem] overflow-hidden border border-slate-200 w-full p-8 sm:p-12 lg:p-16 relative">
              
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center z-10 relative">
                
                {/* HERO TEXT (Left Side) */}
                <div ref={heroTextRef} className="relative z-20">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-[#0052FF] uppercase bg-blue-50/90 rounded-full border border-blue-200/80 backdrop-blur-md shadow-sm cursor-default">
                    <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-ping"></span>
                    FutureTech Dynamics Innovation
                  </span>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A192F] mb-6 leading-[1.15] tracking-tight">
                    Engineering the{" "}
                    <div className="relative inline-block w-max">
                      <div className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-[#0052FF] to-cyan-500 py-1 drop-shadow-sm">
                        <span>Future of Mobility</span>
                      </div>
                    </div>
                  </h1>

                  <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                    At the forefront of automotive innovation, delivering cutting-edge RF, Microwave, and ADAS solutions with precision, reliability, and global excellence.
                  </p>
                  
                  {/* BUTTONS CONTAINER FIX */}
                  <div className="flex flex-wrap gap-4 items-center relative z-30 pointer-events-auto">
                    
                    {/* Explore Products Button */}
                    <button 
                      onClick={() => navigate("/products")}
                      type="button" 
                      className="relative z-30 flex items-center justify-center gap-3 px-6 py-3 rounded-full text-base font-semibold text-slate-800 bg-gray-100 hover:text-white transition-colors duration-500 overflow-hidden group cursor-pointer border border-gray-200 shadow-md pointer-events-auto"
                    >
                      <span className="absolute inset-0 bg-emerald-500 rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10 pointer-events-none"></span>
                      
                      <span className="relative z-10 pointer-events-none">Explore Products</span>
                      
                      <svg 
                        className="w-8 h-8 relative z-10 text-slate-800 group-hover:text-slate-800 bg-transparent group-hover:bg-white transition-all duration-300 rounded-full border border-gray-400 group-hover:border-none p-1.5 rotate-45 group-hover:rotate-90 flex-shrink-0 pointer-events-none" 
                        viewBox="0 0 16 19" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" 
                          className="fill-current" 
                        />
                      </svg>
                    </button>
                    
                    {/* Contact Us Button */}
                    <Link 
                      to="/contact" 
                      className="relative z-30 flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-base font-semibold text-[#0A192F] bg-gray-100 hover:text-white transition-colors duration-500 overflow-hidden group cursor-pointer border border-gray-200 shadow-sm pointer-events-auto"
                    >
                      <span className="absolute inset-0 bg-emerald-500 rounded-xl -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10 pointer-events-none"></span>
                      <span className="relative z-10 pointer-events-none">Contact Us</span>
                    </Link>

                  </div>
                </div>

                {/* HERO IMAGE (Right Side) */}
                <div ref={heroImageRef} className="relative z-10">
                  <Link className="block relative group cursor-pointer" title="Explore Products" to="/products">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 transform group-hover:-translate-y-2 transition-all duration-500 ease-out">
                      <img 
                        src={Home1}  
                        alt="FutureTech Hardware Engineering" 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />
                      
                      <div className="absolute inset-0 bg-[#0A192F]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-[#0052FF] text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl tracking-wide flex items-center gap-2 transform group-hover:scale-105 transition-transform duration-300">
                          Explore Products
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ABOUT FUTURETECH DYNAMICS SECTION */}
      <section className="py-24 bg-transparent relative z-10 w-full">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div ref={aboutRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <Link to="/products" className="block relative group cursor-pointer w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-white backdrop-blur-sm transform group-hover:scale-[1.01] transition-transform duration-500">
                <img 
                  src={Home2}
                  alt="About FutureTech Dynamics Lab" 
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </Link>

            <div className="w-full">
              <span className="text-[#0052FF] text-sm font-bold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 inline-block mb-4">
                About FutureTech Dynamics
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] mb-6 leading-tight">
                Pioneering Automotive Electronics & Connected Systems
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                <strong className="text-[#0A192F]">Futuretech Dynamics</strong> is at the forefront of automotive innovation, delivering cutting-edge RF, Microwave, and ADAS solutions. Our mission is to engineer the future of mobility with precision, reliability, and global excellence.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white shadow-sm border border-slate-200/80 hover:border-[#0052FF] hover:shadow-md transition-all duration-300">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center font-bold">✔️</span>
                  <span className="font-semibold text-[#0A192F] text-base">In-house RADAR & ADAS development</span>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white shadow-sm border border-slate-200/80 hover:border-[#0052FF] hover:shadow-md transition-all duration-300">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center font-bold">✔️</span>
                  <span className="font-semibold text-[#0A192F] text-base">Testing capability up to 110 GHz</span>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white shadow-sm border border-slate-200/80 hover:border-[#0052FF] hover:shadow-md transition-all duration-300">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center font-bold">✔️</span>
                  <span className="font-semibold text-[#0A192F] text-base">Trusted by global automotive leaders</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR CORE PRODUCTS SECTION WITH SUBTLE 3D TILT EFFECT */}
      <section className="py-24 bg-transparent relative z-10 w-full">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0052FF] text-sm font-bold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 inline-block mb-3">
              Our Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] mt-2 mb-4">
              Our Core Products
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              Designed and manufactured with world-class standards
            </p>
          </div>

          <div ref={productsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreProducts.map((product) => (
              <div 
                key={product.id}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  card.style.transform = `perspective(1000px) rotateY(${x / 40}deg) rotateX(${-y / 40}deg) translateY(-4px)`;
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)`;
                }}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-transform duration-300 ease-out flex flex-col border border-slate-200/80 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link to="/products" className="relative h-56 overflow-hidden bg-slate-900 block pointer-events-auto">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    style={{ transform: "translateZ(15px)" }}
                  />
                  <span className="absolute top-3 right-3 bg-[#0A192F]/80 backdrop-blur-md text-white text-[10px] font-semibold px-3 py-1 rounded-full border border-white/20 shadow-sm group-hover:bg-[#0052FF] transition-colors duration-300" style={{ transform: "translateZ(20px)" }}>
                    {product.tag}
                  </span>
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between" style={{ transform: "translateZ(10px)" }}>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A192F] mb-3 group-hover:text-[#0052FF] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  <Link to="/products" className="inline-block mt-2">
                    <button className="group relative inline-block w-40 h-10 cursor-pointer border-0 bg-transparent p-0 text-xs font-sans">
                      <span className="relative block w-10 h-10 bg-[#0052FF] rounded-full transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
                        <span className="absolute inset-y-0 my-auto left-2.5 w-3.5 h-[2px] transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:bg-white group-hover:translate-x-3">
                          <span className="absolute -top-1 right-0 w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></span>
                        </span>
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center pl-6 text-[#0A192F] font-bold uppercase tracking-wider transition-all duration-500 group-hover:text-white pointer-events-none">
                        Learn More
                      </span>
                    </button>
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISION & PARTNERSHIP SECTION (FULL SCREEN WIDTH MATCHED) */}
      <section className="py-24 bg-white text-slate-800 relative overflow-hidden z-10 border-t border-slate-200 w-full">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div ref={mobilityRef} className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-[#0052FF] text-sm font-bold tracking-widest uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
                Vision & Partnership
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A192F] mt-4 mb-6 leading-tight">
                Let’s Build the Future of Mobility Together
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Partner with Futuretech Dynamics to shape innovative solutions in automotive electronics, wireless connectivity, and intelligent systems.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="bg-[#0052FF] hover:bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Partner With Us</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Link to="/products" className="block relative group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200 bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Connected Smart Mobility Vehicle" 
                    className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#0A192F]/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#0052FF] text-white px-6 py-3 rounded-full font-bold text-sm shadow-2xl tracking-wide flex items-center gap-2 transform group-hover:scale-105 transition-transform duration-300">
                      Explore Intelligent Systems
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}