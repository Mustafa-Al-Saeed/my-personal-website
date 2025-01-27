import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        zIndex: 1000,
      }}
    >
      <FaArrowAltCircleUp />
    </button>
  );
};

export default ScrollToTop;
