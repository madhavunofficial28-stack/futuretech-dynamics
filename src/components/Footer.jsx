import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* ASSETS SE FUTURETECH LOGO IMPORT */
import FutureTechLogo from '../assets/futuretech_logo.png';

export default function Footer() {
  return (
    <footer 
      className="relative text-slate-700 border-t py-16 sm:py-20 overflow-hidden z-20 font-sans w-full"
      style={{
        background: 'linear-gradient(180deg, rgba(0, 82, 255, 0.08) 0%, rgba(156, 235, 255, 0.12) 50%, #ffffff 100%)',
        borderColor: 'rgba(0, 82, 255, 0.2)'
      }}
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 flex flex-col items-center">
        
        {/* CENTERED BRAND LOGO WITH LARGER SIZE */}
        <Link to="/" className="inline-flex items-center justify-center mb-6 group">
          <img 
            src={FutureTechLogo} 
            alt="FutureTech Dynamics Logo" 
            className="h-16 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* BRAND TAGLINE / DESCRIPTION */}
        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl text-center leading-relaxed font-normal mb-10">
          Advanced RF & Microwave Solutions — Leading the future of automotive technology with innovative ADAS systems, RF solutions, and cutting-edge antenna designs.
        </p>

        {/* DOTTED DIVIDER LINE */}
        <div 
          className="w-full border-t-2 border-dotted mb-8"
          style={{ borderColor: 'rgba(0, 82, 255, 0.25)' }}
        ></div>

        {/* BOTTOM ROW: PERFECT 3-COLUMN GRID ALIGNMENT */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-xs sm:text-sm text-slate-600">
          
          {/* 1. Copyright Text (Left Aligned) */}
          <p className="whitespace-nowrap font-medium text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} FutureTech Dynamics LLC. All rights reserved.
          </p>

          {/* 2. Navigation Links (PERFECTLY CENTERED) */}
          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-700">
            <Link to="/" className="hover:text-[#0052FF] transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#0052FF] transition-colors">
              About Us
            </Link>
            <Link to="/products" className="hover:text-[#0052FF] transition-colors">
              Products
            </Link>
            <Link to="/capabilities" className="hover:text-[#0052FF] transition-colors">
              Capabilities
            </Link>
            <Link to="/contact" className="hover:text-[#0052FF] transition-colors">
              Contact Us
            </Link>
          </nav>
          
          {/* 3. Custom Styled Social Buttons (Right Aligned) */}
          <div className="flex justify-center md:justify-end">
            <StyledSocialButtons>
              <ul className="wrapper">
                {/* Facebook */}
                <a href="https://www.facebook.com/FuturetechDynamics" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <li className="icon facebook">
                    <span className="tooltip">Facebook</span>
                    <svg viewBox="0 0 320 512" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </li>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <li className="icon instagram">
                    <span className="tooltip">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </li>
                </a>

                {/* YouTube */}
                <a href="https://www.youtube.com/@FuturetechDynamics" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <li className="icon youtube">
                    <span className="tooltip">YouTube</span>
                    <svg viewBox="0 0 576 512" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </li>
                </a>
              </ul>
            </StyledSocialButtons>
          </div>

        </div>

      </div>
    </footer>
  );
}

const StyledSocialButtons = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    font-family: "Poppins", sans-serif;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 12px;
  }

  .wrapper a {
    text-decoration: none;
  }

  .wrapper .icon {
    position: relative;
    background: #ffffff;
    border: 1px solid rgba(0, 82, 255, 0.2);
    border-radius: 50%;
    margin: 0;
    width: 42px;
    height: 42px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 4px 10px rgba(0, 82, 255, 0.05);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 11px;
    background: #fff;
    color: #fff;
    padding: 4px 7px;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    top: -36px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .facebook:hover,
  .wrapper .facebook:hover .tooltip,
  .wrapper .facebook:hover .tooltip::before {
    background: #1877f2;
    color: #fff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e64461;
    color: #fff;
  }

  .wrapper .youtube:hover,
  .wrapper .youtube:hover .tooltip,
  .wrapper .youtube:hover .tooltip::before {
    background: #ff0000;
    color: #fff;
  }
`;