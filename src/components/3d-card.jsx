import React, { createContext, useState, useContext, useRef, useEffect } from "react";

const MouseEnterContext = createContext(undefined);

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <div
      className={`py-20 flex items-center justify-center ${containerClassName}`}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative transition-all duration-200 ease-linear ${className}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
          {children}
        </MouseEnterContext.Provider>
      </div>
    </div>
  );
};

export const CardBody = ({ children, className }) => {
  return (
    <div className={`h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] ${className}`}>
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useContext(MouseEnterContext);

  useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateZ(${translateZ}px)`;
    } else {
      ref.current.style.transform = `translateZ(0px)`;
    }
  }, [isMouseEntered, translateZ]);

  return (
    <Tag ref={ref} className={`transition duration-200 ease-linear ${className}`} {...rest}>
      {children}
    </Tag>
  );
};