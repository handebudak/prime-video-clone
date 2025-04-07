import React, { useRef, useState, useEffect } from "react";
import "../index.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MovieCarousel({ title, movies }) {
  const sliderRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
    }
    return () => {
      if (slider) {
        slider.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full mt-6 px-16 overflow-hidden">
      <h2 className="text-white text-xl font-semibold mb-4">
        {title}
        <span className="ml-2 text-gray-400 cursor-pointer hover:text-white">
          Daha fazlasını görüntüle
        </span>
      </h2>

      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white text-2xl hover:bg-black z-10"
        >
          <FaChevronLeft />
        </button>
      )}

      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-4 p-2 hide-scrollbar scroll-smooth"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[250px] flex-shrink-0 transition-transform hover:scale-105"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-[150px] object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white text-2xl hover:bg-black z-10"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}
