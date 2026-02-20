import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DestinationCard from "../../components/ui/DestinationCard";
import CardSkeleton from "../../components/ui/CardSkeleton";
import FilterBar from "../../components/ui/FilterBar";
import { fetchDestinations } from "../../services/api/api";
import type { Destination } from "../../services/types";

const categories = ["All", "City", "Beach", "Mountain", "Historical", "Island"];

const Destinations: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const loadDestinations = async () => {
      setLoading(true);
      try {
        const data = await fetchDestinations();
        if (isMounted) setDestinations(data);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadDestinations();
    return () => {
      isMounted = false;
    };
  }, []);

  // Handle favorite toggle
  const handleFavoriteToggle = (id: number) => {
    setDestinations((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, favorite: !d.favorite } : d
      )
    );
  };

  // Filter by category/type
  const filtered =
    selectedCategory === "All"
      ? destinations
      : destinations.filter((d) => d.type === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Explore Destinations
      </h1>

      {/* Category Filter */}
      <FilterBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} />)
          : filtered.map((d) => (
              <DestinationCard
                key={d.id}
                image={d.images?.[0] || ""}
                title={d.name}
                location={d.location}
                price={d.price}
                currency={d.currency}
                rating={d.rating}
                type={d.type}
                highlights={d.highlights}
                bestSeason={d.bestSeason}
                isFavorite={d.favorite}
                onFavoriteToggle={() => handleFavoriteToggle(d.id)}
                onClick={() => navigate(`/destination/${d.id}`)}
              />
            ))}
      </div>
    </div>
  );
};

export default Destinations;
