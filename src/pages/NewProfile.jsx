import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewProfile() {
  const navigate = useNavigate();

  function Navbar() {
    return (
      <nav className="w-full py-4 px-4 md:px-10 bg-[oklch(0.13_0.028_261.692)] text-white text-xl md:text-2xl font-bold fixed top-0 left-0 z-50">
        <span className="block">prime video</span>
      </nav>
    );
  }

  return (
    <div className="min-h-screen bg-[oklch(0.13_0.028_261.692)] text-white px-4 md:px-8 pt-16 md:pt-20 flex flex-col items-center">
      
      <Navbar />

      <h2 className="text-2xl md:text-4xl font-bold mt-8 md:mt-10 text-center">Yeni profil</h2>
      
      <div className="text-base md:text-lg text-white max-w-xl mt-6 md:mt-8 text-center px-4">
        <p className="text-left">
          Prime Video için bir Amazon profili oluşturun veya aşağıya mevcut bir profili ekleyin.
        </p>
        <a href="#" className="text-blue-300 hover:underline mt-4 block text-left">
          Profiller hakkında daha fazla bilgi edinin
        </a>
      </div>

      <div className="fixed bottom-4 md:bottom-10 left-0 w-full flex justify-center space-x-2 md:space-x-4 px-4">
        <button 
          className="px-6 md:px-10 py-3 md:py-4 border border-gray-400 text-white text-base md:text-lg rounded-lg hover:bg-gray-700 transition"
          onClick={() => navigate(-1)} 
        >
          İptal Et
        </button>
        <button 
          className="px-6 md:px-10 py-3 md:py-4 bg-gray-600 text-gray-400 text-base md:text-lg rounded-lg cursor-pointer"
        >
          Profil oluştur
        </button>
      </div>
    </div>
  );
}
