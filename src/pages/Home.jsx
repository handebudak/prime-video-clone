import { useParams } from "react-router-dom";
import { FaSearch, FaTh, FaBookmark, FaHome, FaCheck, FaDownload, FaUser } from "react-icons/fa";
import Banner from "../components/Banner";
import MovieCarousel from "../components/MovieCarousel";
import moviesData from "../MoviesData";

const profiles = [
  { id: 1, name: "Chris" },
  { id: 2, name: "Hailey" },
  { id: 3, name: "Hande" },
];

const categories = [
  { title: "Popüler Filmler", key: "Popüler" },
  { title: "Bilim Kurgu Filmleri", key: "Bilim Kurgu" },
  { title: "Korku Filmleri", key: "Korku" },
  { title: "Dram Filmleri", key: "Dram" },
  { title: "Aksiyon Filmleri", key: "Aksiyon" },
];

export default function Home() {
  const { profileId } = useParams();
  const profile = profiles.find((p) => p.id === Number(profileId));

  return (
    <div className="min-h-screen bg-[oklch(0.13_0.028_261.692)] pb-20">
      <Navbar profile={profile} />
      <div className="pt-16 md:pt-20">
        <Banner />
      </div>
      <div>
        {categories.map((category) => {
          const filteredMovies = moviesData.filter((movie) =>
            movie.categories.includes(category.key)
          );
          return (
            <MovieCarousel
              key={category.key}
              title={category.title}
              movies={filteredMovies}
            />
          );
        })}
      </div>
      <BottomNavigation />
    </div>
  );
}

function Navbar({ profile }) {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black/50 text-white flex items-center justify-between px-4 md:px-20 py-4 z-50">
      <div className="flex items-center space-x-2 md:space-x-6">
        <span className="text-lg md:text-xl font-bold">prime video</span>
        <div className="hidden md:flex items-center space-x-4">
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
        </div>
        <img
          src="/assets/w-prime-logo.png"
          alt="Prime Video Logo"
          className="w-20 md:w-28 px-2 md:px-4 py-2 rounded h-auto hover:bg-sky-600"
        />
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">
        <button className="text-white hover:text-gray-400">
          <FaSearch className="text-lg md:text-xl" />
        </button>
        <button className="text-white hover:text-gray-400 hidden md:block">
          <FaTh className="text-xl" />
        </button>
        <button className="text-white hover:text-gray-400 hidden md:block">
          <FaBookmark className="text-xl" />
        </button>
        <img
          src={`https://ui-avatars.com/api/?name=${profile?.name || 'User'}&background=random`}
          alt="Profile"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
        />
      </div>
    </nav>
  );
}

function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 text-white border-t border-gray-800 md:hidden">
      <div className="flex justify-around items-center py-2">
        <button className="flex flex-col items-center space-y-1 py-2 px-4 text-blue-400">
          <FaHome className="text-lg" />
          <span className="text-xs">Anasayfa</span>
        </button>
        <button className="flex flex-col items-center space-y-1 py-2 px-4 text-gray-400 hover:text-white">
          <FaCheck className="text-lg" />
          <span className="text-xs">Prime</span>
        </button>
        <button className="flex flex-col items-center space-y-1 py-2 px-4 text-gray-400 hover:text-white">
          <FaDownload className="text-lg" />
          <span className="text-xs">İndirilenler</span>
        </button>
        <button className="flex flex-col items-center space-y-1 py-2 px-4 text-gray-400 hover:text-white">
          <FaSearch className="text-lg" />
          <span className="text-xs">Ara</span>
        </button>
        <button className="flex flex-col items-center space-y-1 py-2 px-4 text-gray-400 hover:text-white">
          <FaUser className="text-lg" />
          <span className="text-xs">Benim</span>
        </button>
      </div>
    </div>
  );
}