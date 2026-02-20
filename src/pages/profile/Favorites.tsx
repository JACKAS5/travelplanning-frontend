import FavoriteCard from "../../components/profile/FavoriteCard";

const Favorites: React.FC = () => {
  const favorites = [
    { destination: "Angkor Wat", image: "/assets/angkor.jpg" },
    { destination: "Sihanoukville", image: "/assets/sihanoukville.jpg" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((f, i) => <FavoriteCard key={i} {...f} />)}
      </div>
    </div>
  );
};

export default Favorites;
