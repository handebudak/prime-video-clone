import { useState } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const banners = [
  { id: 1, title: "ATATÜRK", subtitle: "1881 - 1919", image: "/assets/ataturk-m.jpg" },
  { id: 2, title: "INTERSTELLAR", subtitle: "A journey beyond the stars", image: "/assets/interstellar-m.jpg" },
  { id: 3, title: "INCEPTION", subtitle: "Your mind is the scene of the crime", image: "/assets/inception-m.jpg" }
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-[500px] text-white overflow-hidden">
      {/* Arka plan görseli */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url('${banners[currentIndex].image}')`,
        }}
      >
        {/* Sol taraftaki film bilgileri */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent flex items-center px-20">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">{banners[currentIndex].title}</h1>
            <p className="text-lg text-gray-300 mt-2">{banners[currentIndex].subtitle}</p>
            <div className="flex items-center space-x-4 mt-4">
              <button className="bg-gray-700 text-white text-xl px-6 py-4 rounded font-bold flex items-center">
                <FaPlay className="text-white mr-2" /> Şimdi İzle
              </button>
              <button className="bg-gray-700 text-white text-xl px-6 py-4 rounded-full font-bold">
                + 
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sol ve sağ kaydırma butonları */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white text-2xl hover:bg-black"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white text-2xl hover:bg-black"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
