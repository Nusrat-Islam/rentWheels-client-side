// "use client";

import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.2;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        // inner dot directly mouse position follow করবে (fast)
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveMouse);
    animate();

    return () => window.removeEventListener("mousemove", moveMouse);
  }, []);

  return (
    <>
      {/* Outer cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed w-8 h-8 rounded-full border-2 border-yellow-400 bg-transparent"
        style={{ transition: "transform 0.1s ease" }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed w-2 h-2 rounded-full bg-yellow-500"
        style={{ transition: "transform 0.05s ease" }}
      />
    </>
  );
};

export default CustomCursor;



