import { useState, useEffect } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const banners = [
  {
    id: 1,
    title: "Dune: Part One",
    subtitle:
      "Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzkwMTI1ODEtNzk0MS00NDM3LTljNWMtOGYyZGY2MzU0NWM5XkEyXkFqcGc@._V1_QL75_UX1230_.jpg",
  },
  {
    id: 2,
    title: "ATATÜRK",
    subtitle: "1881 - 1919",
    image: "/assets/ataturk-m.jpg",
  },
  {
    id: 3,
    title: "INTERSTELLAR",
    subtitle: "A journey beyond the stars",
    image: "https://m.media-amazon.com/images/M/MV5BMTcyMjEzNzcwNV5BMl5BanBnXkFtZTgwODM2Mjk0MzE@._V1_QL75_UX1230_.jpg",
  },
  {
    id: 4,
    title: "INCEPTION",
    subtitle: "Your mind is the scene of the crime",
    image: "https://m.media-amazon.com/images/M/MV5BN2ZlNDY4OGEtNTk0Yy00OGI1LWI0MGItNmIzY2NmOTk3ZWMxXkEyXkFqcGc@._V1_QL75_UX1230_.jpg",
  },
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[300px] md:h-[500px] text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url('${banners[currentIndex].image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent flex items-center px-4 md:px-20">
          <div className="max-w-lg">
            <h1 className="text-2xl md:text-5xl font-bold">
              {banners[currentIndex].title}
            </h1>
            <p className="text-sm md:text-lg text-gray-300 mt-2">
              {banners[currentIndex].subtitle}
            </p>
            <div className="flex items-center space-x-2 md:space-x-4 mt-4">
              <button className="group bg-gray-700 text-white text-sm md:text-xl px-3 md:px-6 py-2 md:py-4 rounded font-bold flex items-center hover:bg-white hover:text-black">
                <FaPlay className="mr-2 text-white group-hover:text-black transition-colors duration-100" />
                <span className="hidden sm:inline">Şimdi İzle</span>
                <span className="sm:hidden">İzle</span>
              </button>
              <button className="bg-gray-700 text-white text-sm md:text-xl px-3 md:px-6 py-2 md:py-4 rounded-full font-bold hover:bg-white hover:text-black">
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-transparent p-2 md:p-3 text-white text-xl md:text-2xl hover:scale-125 transition-transform duration-200 cursor-pointer"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-transparent p-2 md:p-3 text-white text-xl md:text-2xl hover:scale-125 transition-transform duration-200 cursor-pointer"
      >
        <FaChevronRight />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
