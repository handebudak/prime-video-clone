import React from "react";
import { useNavigate } from "react-router-dom";

const profiles = [
  { id: 1, name: "Chris" },
  { id: 2, name: "Hailey" },
  { id: 3, name: "Hande" },
];

function Navbar() {
  return (
    <nav className="w-full py-4 px-4 md:px-10 bg-[oklch(0.13_0.028_261.692)] text-white text-xl md:text-2xl font-bold fixed top-0 left-0 z-50">
      prime video
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full py-4 px-4 md:px-8 bg-[oklch(0.13_0.028_261.692)] text-sm text-center fixed bottom-0 left-0 font-medium">
      <div className="flex flex-col items-center">
        <img 
          src="/assets/w-prime-logo.png"
          alt="Prime Video Logo"
          className="w-16 md:w-24 h-auto" 
        />
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 mt-2">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 text-xs md:text-sm">
            <a href="#" className="text-blue-300 hover:underline">Koşullar ve Gizlilik</a>
            <a href="#" className="text-blue-300 hover:underline">Geri bildirim</a>
            <a href="#" className="text-blue-300 hover:underline">Yardım</a>
            <a href="#" className="text-blue-300 hover:underline">Çerez Bildirimi</a>
          </div>
          <div className="text-gray-400 text-xs font-medium text-center">
            © 1996-2025, Amazon.com, Inc. veya bağlı kuruluşları
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Profiles() {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-[oklch(0.13_0.028_261.692)] flex flex-col items-center justify-start text-white relative pt-20 md:pt-24 pb-16 px-4">
      <Navbar />
      <h1 className="text-2xl md:text-4xl font-bold mb-8 md:mb-20">Kim izliyor?</h1>
      <div className="grid grid-cols-2 md:flex md:space-x-8 lg:space-x-12 gap-6 md:gap-0 w-full max-w-md md:max-w-none">
        {profiles.map((profile) => (
          <div 
            key={profile.id} 
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(`/home/${profile.id}`)} 
          >
            <img
              src={`https://ui-avatars.com/api/?name=${profile.name}&background=random`}
              alt={profile.name}
              className="w-20 h-20 md:w-32 md:h-32 rounded-full hover:opacity-80 transition-opacity"
            />
            <span className="mt-2 text-base md:text-lg">{profile.name}</span>
          </div>
        ))}
        <div className="flex flex-col items-center cursor-pointer"
             onClick={() => navigate("/new-profile")}>
          <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gray-600 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-2xl md:text-3xl">+</span>
          </div>
          <span className="mt-2 text-base md:text-lg">Yeni ekle</span>
        </div>
      </div>
      <button className="mt-12 md:mt-40 px-4 md:px-6 py-2 md:py-4 font-bold bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg text-white text-base md:text-xl">
        Profili düzenle
      </button>
      <Footer />
    </div>
  );
}
