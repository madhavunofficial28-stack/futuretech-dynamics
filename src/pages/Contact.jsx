import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

export default function Contact() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const leftRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance Animations
      gsap.fromTo(
        leftRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out' }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 20, scale: 0.98 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'fullName') {
      const alphaOnly = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData({ ...formData, [name]: alphaOnly });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.to(e.target.querySelector('button'), {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white flex flex-col items-center justify-center font-sans text-neutral-800 selection:bg-neutral-900 selection:text-white">
      {/* Outer wrapper without vertical borders */}
      <div className="w-full max-w-7xl px-6 sm:px-12 py-16 sm:py-24 my-auto bg-white">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <div ref={leftRef} className="space-y-6">
            
            {/* Top Clickable Social Links */}
            <StyledSocialWrapper>
              <div className="wrapper">
                {/* LinkedIn Link */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin">
                  <span className="tooltip">LinkedIn</span>
                  <svg viewBox="0 0 448 512" height="1.2em" fill="currentColor" xmlns="https://www.linkedin.com/Company/Futuretech-dynamics?_l=en_US">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </a>

                {/* Twitter Link */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <svg height="1.8em" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
                  </svg>
                </a>

                {/* Gmail Link */}
                <a href="mailto:info@futuretechdynamics.in" className="icon gmail">
                  <span className="tooltip">Gmail</span>
                  <svg viewBox="0 0 512 512" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c12 9 28.3 9 40.3 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176v224c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176L294.4 336c-22.6 17-54.2 17-76.8 0L0 176z" />
                  </svg>
                </a>
              </div>
            </StyledSocialWrapper>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              Contact us
            </h1>

            {/* Subtitle */}
            <p className="text-neutral-600 text-sm sm:text-base max-w-md leading-relaxed">
              We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
            </p>

            {/* Links (Email & Phone only) */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-neutral-500 font-medium">
              <a href="mailto:info@futuretechdynamics.in" className="hover:text-neutral-900 transition-colors">info@futuretechdynamics.in</a>
              <span>•</span>
              <a href="tel:+919173300247" className="hover:text-neutral-900 transition-colors">+91 9173300247</a>
            </div>

            {/* World Map Section */}
            <div>
              <div className="relative max-w-lg h-64 overflow-hidden rounded-2xl pointer-events-none select-none flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                  alt="World Map" 
                  className="w-full h-auto opacity-30 filter grayscale scale-[1.7] origin-[71%_50%]"
                />

                {/* Glowing Pin Marker positioned on Gujarat, India */}
                <div className="absolute top-[26.5%] left-[67.5%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-neutral-700 shadow-sm border border-neutral-200/80 mb-1 whitespace-nowrap">
                    Vadodara – 390001, Gujarat, INDIA
                  </div>
                  <div className="w-[1px] h-6 bg-gradient-to-b from-blue-500 to-transparent" />
                  <div className="relative -mt-1 flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 ring-4 ring-blue-100"></span>
                  </div>
                </div>
              </div>

              {/* Google Maps Link */}
              <div className="mt-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Vadodara%2C+390001%2C+Gujarat%2C+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-xs sm:text-sm text-neutral-500 font-medium hover:text-neutral-900 transition-colors inline-flex items-center gap-1.5"
                >
                  <svg 
                    className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Vadodara – 390001, Gujarat, INDIA
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Form Card */}
          <div 
            ref={formRef}
            className="relative bg-[#E5E7EB]/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden"
          >
            {/* Subtle Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.25] pointer-events-none" 
              style={{
                backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
                backgroundSize: '18px 18px'
              }}
            />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              {/* Full name */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-2">
                  Full name
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  placeholder="Enter subject"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-2">
                  Message
                </label>
                <textarea 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.04)] resize-none"
                  placeholder="Type your message here"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="group/btn relative px-6 py-2.5 bg-[#18181B] hover:bg-neutral-900 text-white font-medium text-xs rounded-lg overflow-hidden transition-all shadow-md active:scale-95"
                >
                  <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out transform -skew-x-12 pointer-events-none" />
                  <span className="relative z-10">Submit</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

const StyledSocialWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    height: 60px;
    width: auto;
    padding-top: 0px;
    font-family: "Poppins", sans-serif;
    justify-content: start;
    align-items: center;
  }

  .wrapper .icon {
    position: relative;
    background: #fff;
    border-radius: 50%;
    margin-right: 15px;
    width: 46px;
    height: 46px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 12px;
    background: #fff;
    color: #fff;
    padding: 4px 8px;
    border-radius: 5px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 6px;
    width: 6px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -38px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .linkedin:hover,
  .wrapper .linkedin:hover .tooltip,
  .wrapper .linkedin:hover .tooltip::before {
    background: #0a66c2;
    color: #fff;
  }

  .wrapper .twitter:hover,
  .wrapper .twitter:hover .tooltip,
  .wrapper .twitter:hover .tooltip::before {
    background: #1da1f2;
    color: #fff;
  }

  .wrapper .gmail:hover,
  .wrapper .gmail:hover .tooltip,
  .wrapper .gmail:hover .tooltip::before {
    background: #ea4335;
    color: #fff;
  }
`;