import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const Timeline = ({ data, heading, subheading, badge }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };

    updateHeight();

    // ResizeObserver ensures height updates when images finish loading or viewport changes
    let resizeObserver;
    if (ref.current && typeof window !== "undefined" && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => updateHeight());
      resizeObserver.observe(ref.current);
    }

    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-slate-50 font-sans md:px-10 py-16"
      ref={containerRef}
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto pt-8 pb-12 px-4 md:px-8 lg:px-10 text-center md:text-left">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            {badge}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight max-w-4xl leading-tight">
          {heading || "Our Flagship Products"}
        </h1>
        {subheading && (
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mt-4 leading-relaxed font-normal">
            {subheading}
          </p>
        )}
      </div>

      {/* Timeline List Section */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-24">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-12 md:pt-28 md:gap-10 relative"
          >
            {/* Sticky Title & Dot (Desktop) */}
            <div className="sticky flex flex-col md:flex-row z-40 items-start top-32 self-start max-w-xs lg:max-w-md md:w-full">
              {/* Dot Icon */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-slate-50 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-[0_0_12px_rgba(0,82,255,0.4)]">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                </div>
              </div>

              {/* Product Title on Desktop */}
              <div className="hidden md:block md:pl-20">
                {item.category && (
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 mb-2">
                    {item.category}
                  </span>
                )}
                <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0A192F] tracking-tight leading-snug">
                  {item.title}
                </h3>
                {item.tagline && (
                  <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                    {item.tagline}
                  </p>
                )}
              </div>
            </div>

            {/* Content & Images (Right Column) */}
            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              {/* Mobile Title */}
              <div className="md:hidden block mb-6">
                {item.category && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 mb-1.5">
                    {item.category}
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A192F] tracking-tight">
                  {item.title}
                </h3>
                {item.tagline && (
                  <p className="text-xs text-slate-500 mt-1">{item.tagline}</p>
                )}
              </div>

              {/* Custom Content Slot */}
              <div>{item.content}</div>
            </div>
          </div>
        ))}

        {/* Vertical Background Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-slate-200 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]"
        >
          {/* Animated Glowing Progress Beam */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-600 via-cyan-400 to-transparent rounded-full shadow-[0_0_10px_#0052FF]"
          />
        </div>
      </div>
    </div>
  );
};
