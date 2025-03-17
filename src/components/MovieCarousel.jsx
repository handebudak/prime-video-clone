export default function MovieCarousel({ title, movies = [] }) {
    if (!movies || movies.length === 0) {
      return <p className="text-white">No movies available.</p>;
    }
  
    return (
      <div className="relative w-full mx-14">
        <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
        <div className="flex space-x-4 overflow-hidden">
          {movies.map((movie) => (
            <div key={movie.id} className="w-40 h-60 bg-gray-700 rounded">
              <img src={movie.image} alt={movie.title} className="w-full h-full object-cover rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  