import { useState, useEffect } from "react";

const useHeaderEffects = () => {
    const [cursorX, setCursorX] = useState(150);
    const [cursorY, setCursorY] = useState(150);
    const [scrollY, setScrollY] = useState(150);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleMouseMove = (event) => {
      setCursorX(event.clientX);
      setCursorY(event.clientY);
    };
  
    return { cursorX, cursorY, scrollY, handleMouseMove };
  };
  
  export default useHeaderEffects;