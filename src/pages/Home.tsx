// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DestinationCard from "../components/ui/DestinationCard";
import CardSkeleton from "../components/ui/CardSkeleton";
import { fetchDestinations } from "../services/api/api";
import type { Destination } from "../services/types";

const Home: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Explore Destinations
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Find your next adventure, vacation, or getaway.
        </p>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
          : destinations.map((d) => (
              <DestinationCard
                key={d.id}
                image={d.images?.[0] || ""}
                title={d.name}
                location={d.location}
                price={d.price}
                currency={d.currency}
                rating={d.rating}
                highlights={d.highlights}
                bestSeason={d.bestSeason}
                type={d.type}
                isFavorite={d.favorite}
                onClick={() => navigate(`/destination/${d.id}`)}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
