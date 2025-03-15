import { useParams } from "react-router-dom";
import { FaSearch, FaTh, FaBookmark } from "react-icons/fa";
import Banner from "../components/Banner";

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
      <div className="pt-20">
        <Banner />
      </div>
    </div>
  );
}

function Navbar({ profile }) {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black/50 text-white flex items-center justify-between px-20 py-4 z-50">
      {/* Left */}
      <div className="flex items-center space-x-6">
        <span className="text-xl font-bold">prime video</span>
        <button className="text-white font-bold hover:bg-white hover:text-black px-4 py-2 rounded">
          Anasayfa
        </button>
        <button className="text-white font-bold hover:bg-white hover:text-black px-4 py-2 rounded">
          Filmler
        </button>
        <button className="text-white font-bold hover:bg-white hover:text-black px-4 py-2 rounded">
          TV Dizileri
        </button>
        <div className="w-px h-8 bg-white"></div>
        <img
          src="/assets/w-prime-logo.png"
          alt="Prime Video Logo"
          className="w-28 px-4 py-2 rounded h-auto hover:bg-sky-600"
        />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-400">
          <FaSearch className="text-xl" />
        </button>
        <button className="text-white hover:text-gray-400">
          <FaTh className="text-xl" />
        </button>
        <button className="text-white hover:text-gray-400">
          <FaBookmark className="text-xl" />
        </button>
        <img
          src={`https://ui-avatars.com/api/?name=${profile?.name || 'User'}&background=random`}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </nav>
  );
}
