import React from "react";

const profiles = [
  { id: 1, name: "Chris" },
  { id: 2, name: "Hailey" },
  { id: 3, name: "Hande" },
];

function Navbar() {
  return (
    <nav className="w-full py-4 px-10 bg-black text-white text-2xl font-bold absolute top-0 left-0">
      prime video
    </nav>
  );
}

function Footer() {
    return (
      <footer className="w-full py-4 px-8 bg-black text-sm text-center absolute bottom-0 left-0 font-medium">
        <div className="flex flex-col items-center">
          <img 
            src="/assets/w-prime-logo.png"
            alt="Prime Video Logo"
            className="w-24 h-auto" 
          />
          <div className="flex justify-center items-center space-x-8 mt-2">
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:underline">Koşullar ve Gizlilik Bildirimi</a>
              <a href="#" className="text-blue-300 hover:underline">Geri bildirimde bulunun</a>
              <a href="#" className="text-blue-300 hover:underline">Yardım</a>
              <a href="#" className="text-blue-300 hover:underline">Çerez Bildirimi</a>
            </div>
            <div className="flex space-x-4 text-gray-400 text-sm">
              <span className="text-sm font-medium">© 1996-2025, Amazon.com, Inc. veya bağlı kuruluşları</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  
  

export default function Profiles() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start text-white relative pt-24">
  <Navbar />
  <h1 className="text-4xl font-bold mb-20">Kim izliyor?</h1>
  <div className="flex space-x-12 mt-2">
    {profiles.map((profile) => (
      <div key={profile.id} className="flex flex-col items-center">
        <img
          src={`https://ui-avatars.com/api/?name=${profile.name}&background=random`}
          alt={profile.name}
          className="w-34 h-34 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
        />
        <span className="mt-2 text-lg">{profile.name}</span>
      </div>
    ))}
    <div className="flex flex-col items-center">
      <div className="w-34 h-34 rounded-full bg-gray-600 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
        <span className="text-3xl">+</span>
      </div>
      <span className="mt-2 text-lg">Yeni ekle</span>
    </div>
  </div>
  <button className="mt-40 px-6 py-4 font-bold bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg text-white text-xl">
    Profili düzenle
  </button>
  <Footer />
</div>

  );
}
