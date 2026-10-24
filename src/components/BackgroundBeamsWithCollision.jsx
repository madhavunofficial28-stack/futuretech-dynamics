import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BackgroundBeamsWithCollision({ children, className = "" }) {
  const containerRef = useRef(null);
  const parentRef = useRef(null);
  const [parentHeight, setParentHeight] = useState(1000);

  // Calculate full page height so beams reach the collision floor
  useEffect(() => {
    const updateHeight = () => {
      if (parentRef.current) {
        setParentHeight(parentRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Subtle & Slim Beams Config (Using percentages for full left-to-right coverage)
  const beams = [
    { initialX: 5, duration: 5.5, repeatDelay: 2, delay: 0.5, className: "h-12" },
    { initialX: 18, duration: 4.5, repeatDelay: 1.5, delay: 0, className: "h-10" },
    { initialX: 32, duration: 5.8, repeatDelay: 3, delay: 1.2, className: "h-14" },
    { initialX: 45, duration: 6.8, repeatDelay: 2, delay: 0.8, className: "h-16" },
    { initialX: 58, duration: 5.0, repeatDelay: 1, delay: 1.5, className: "h-12" },
    { initialX: 72, duration: 6.2, repeatDelay: 2.5, delay: 0.2, className: "h-10" },
    { initialX: 85, duration: 4.8, repeatDelay: 2, delay: 1, className: "h-14" },
    { initialX: 95, duration: 6.0, repeatDelay: 3, delay: 1.8, className: "h-12" },
  ];

  return (
    <div
      ref={parentRef}
      className={`min-h-screen bg-white relative flex flex-col items-center justify-between overflow-hidden ${className}`}
    >
      {/* Falling Beams across whole page */}
      {beams.map((beam, index) => (
        <CollisionMechanism
          key={`beam-${beam.initialX}-${index}`}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
          parentHeight={parentHeight}
        />
      ))}

      {/* Main Page Content */}
      <div className="relative z-20 w-full">{children}</div>

      {/* Bottom Collision Floor Line */}
      <div
        ref={containerRef}
        className="absolute bottom-0 w-full h-[1px] bg-[#0052FF]/30 pointer-events-none z-10"
      />
    </div>
  );
}

const CollisionMechanism = React.forwardRef(
  ({ parentRef, containerRef, beamOptions, parentHeight }, ref) => {
    const beamRef = useRef(null);
    const [collision, setCollision] = useState({
      detected: false,
      coordinates: null,
    });
    const [beamKey, setBeamKey] = useState(0);

    useEffect(() => {
      let animationFrameId;

      const checkCollision = () => {
        if (
          beamRef.current &&
          containerRef.current &&
          parentRef.current &&
          !collision.detected
        ) {
          const beamRect = beamRef.current.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const parentRect = parentRef.current.getBoundingClientRect();

          // Trigger explosion when beam hits bottom floor
          if (beamRect.bottom >= containerRect.top - 2) {
            const relativeX =
              beamRect.left - parentRect.left + beamRect.width / 2;
            const relativeY = containerRect.top - parentRect.top;

            setCollision({
              detected: true,
              coordinates: { x: relativeX, y: relativeY },
            });
          }
        }

        if (!collision.detected) {
          animationFrameId = requestAnimationFrame(checkCollision);
        }
      };

      animationFrameId = requestAnimationFrame(checkCollision);
      return () => cancelAnimationFrame(animationFrameId);
    }, [collision.detected, containerRef, parentRef]);

    useEffect(() => {
      if (collision.detected) {
        const timeout = setTimeout(() => {
          setCollision({ detected: false, coordinates: null });
          setBeamKey((prev) => prev + 1);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }, [collision.detected]);

    return (
      <>
        <motion.div
          key={beamKey}
          ref={beamRef}
          animate={{ y: [-100, parentHeight] }}
          transition={{
            duration: beamOptions.duration || 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: beamOptions.delay || 0,
            repeatDelay: beamOptions.repeatDelay || 0,
          }}
          style={{ left: `${beamOptions.initialX}%` }}
          className={`absolute top-0 w-[1.5px] bg-gradient-to-b from-transparent via-[#0052FF] to-cyan-400 rounded-full shadow-[0_0_8px_#0052FF] pointer-events-none z-10 ${beamOptions.className}`}
        />

        <AnimatePresence>
          {collision.detected && collision.coordinates && (
            <Explosion
              key={`${collision.coordinates.x}-${collision.coordinates.y}`}
              style={{
                left: `${collision.coordinates.x}px`,
                top: `${collision.coordinates.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </AnimatePresence>
      </>
    );
  }
);

CollisionMechanism.displayName = "CollisionMechanism";

// Aceternity UI Sparks Explosion Component
const Explosion = ({ style }) => {
  const particles = Array.from({ length: 20 });

  return (
    <div style={style} className="absolute z-30 pointer-events-none h-2 w-2">
      {/* Central Flash Aura */}
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 2.2, opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="absolute -inset-2 rounded-full bg-cyan-400/80 blur-sm"
      />

      {/* Radial Exploding Particles */}
      {particles.map((_, i) => {
        const angle = (i / particles.length) * 360;
        const randomDistance = Math.floor(Math.random() * 40) + 15;
        const x = Math.cos((angle * Math.PI) / 180) * randomDistance;
        const y = Math.sin((angle * Math.PI) / 180) * randomDistance - 10;

        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x, y, opacity: 0, scale: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-[#0052FF] via-cyan-400 to-indigo-500 shadow-[0_0_6px_#0052FF]"
          />
        );
      })}
    </div>
  );
};