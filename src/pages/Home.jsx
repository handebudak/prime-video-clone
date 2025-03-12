import { useParams } from "react-router-dom";

const profiles = [
  { id: 1, name: "Chris" },
  { id: 2, name: "Hailey" },
  { id: 3, name: "Hande" },
];

export default function Home() {
  const { profileId } = useParams();
  const profile = profiles.find((p) => p.id === Number(profileId));

  return (
    <div className="min-h-screen bg-[oklch(0.13_0.028_261.692)]">
      <Navbar profile={profile} />
    </div>
  );
}

function Navbar({ profile }) {
    return (
      <nav className="w-full fixed top-0 left-0 bg-opacity-50 bg-[oklch(0.13_0.028_261.692)] text-white flex items-center justify-between px-20 py-4">
        {/* Left */}
        <div className="flex items-center space-x-6">
          <span className="text-xl font-bold">prime video</span>
          <button className="text-white font-bold hover:bg-white hover:text-black px-4 py-2 rounded">Anasayfa</button>
          <button className="text-white font-bold hover:bg-white hover:text-black px-4 py-2 rounded">Filmler</button>
          <button className="text-white font-bold hover:bg-white hover:text-black px-4 py-2 rounded">TV Dizileri</button>
  
          <div className="w-px h-8 bg-white"></div>
  
          <img src="/assets/w-prime-logo.png" alt="Prime Video Logo" className="w-28 px-4 py-2 rounded h-auto hover:bg-sky-600" />
        </div>
        
        {/* Right */}

        <img
          src={`https://ui-avatars.com/api/?name=${profile.name}&background=random`}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </nav>
    );
  }
  
