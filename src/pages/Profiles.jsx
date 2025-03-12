import React from "react";
import { useNavigate } from "react-router-dom";

const profiles = [
  { id: 1, name: "Chris" },
  { id: 2, name: "Hailey" },
  { id: 3, name: "Hande" },
];

function Navbar() {
  return (
    <nav className="hidden sm:block w-full py-4 px-6 sm:px-10 bg-[oklch(0.13_0.028_261.692)] text-white text-2xl font-bold fixed top-0 left-0">
      prime video
    </nav>
  );
}

function Footer() {
  return (
    <footer className="hidden sm:block w-full py-4 px-6 sm:px-8 bg-[oklch(0.13_0.028_261.692)] text-sm text-center fixed bottom-0 left-0 font-medium">
      <div className="flex flex-col items-center">
        <img 
          src="/assets/w-prime-logo.png"
          alt="Prime Video Logo"
          className="w-20 sm:w-24 h-auto" 
        />
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 mt-2">
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-4">
            <a href="#" className="text-blue-300 hover:underline">Koşullar ve Gizlilik Bildirimi</a>
            <a href="#" className="text-blue-300 hover:underline">Geri bildirimde bulunun</a>
            <a href="#" className="text-blue-300 hover:underline">Yardım</a>
            <a href="#" className="text-blue-300 hover:underline">Çerez Bildirimi</a>
          </div>
          <div className="text-gray-400 text-xs sm:text-sm font-medium text-center sm:text-left">
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
    <div className="min-h-screen bg-[oklch(0.13_0.028_261.692)] flex flex-col items-center justify-start text-white relative pt-24 pb-16 px-4 sm:px-0">
      <Navbar />
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-20">Kim izliyor?</h1>
      <div className="grid grid-cols-2 sm:flex sm:space-x-12 mt-2 gap-6 sm:gap-0">
        {profiles.map((profile) => (
          <div 
            key={profile.id} 
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(`/home/${profile.id}`)} 
          >
            <img
              src={`https://ui-avatars.com/api/?name=${profile.name}&background=random`}
              alt={profile.name}
              className="w-24 h-24 sm:w-34 sm:h-34 rounded-full hover:opacity-80 transition-opacity"
            />
            <span className="mt-2 text-lg">{profile.name}</span>
          </div>
        ))}
        <div className="flex flex-col items-center cursor-pointer"
             onClick={() => navigate("/new-profile")}>
          <div className="w-24 h-24 sm:w-34 sm:h-34 rounded-full bg-gray-600 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-3xl">+</span>
          </div>
          <span className="mt-2 text-lg">Yeni ekle</span>
        </div>
      </div>
      <button className="mt-20 sm:mt-40 px-6 py-3 sm:py-4 font-bold bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg text-white text-lg sm:text-xl">
        Profili düzenle
      </button>
      <Footer />
    </div>
  );
}
