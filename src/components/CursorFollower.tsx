
import React, { useEffect, useRef } from "react";

const CursorFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    const animateCursor = () => {
      const speed = 0.1;
      
      // Calculate smooth movement with easing
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      
      // Apply transform
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) scale(1)`;
      }
      
      // Continue animation loop
      requestAnimationFrame(animateCursor);
    };
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    // Handle cursor showing/hiding based on mouse activity
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };
    
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };
    
    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    // Start animation
    requestAnimationFrame(animateCursor);
    
    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  
  return (
    <div 
      ref={cursorRef}
      className="cursor-follower"
      style={{
        position: "fixed",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "rgba(147, 51, 234, 0.3)",
        boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate3d(0px, 0px, 0) scale(1)",
        transition: "transform 0.1s, opacity 0.3s",
        opacity: 0,
      }}
    />
  );
};

export default CursorFollower;
