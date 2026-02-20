import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTravelOptions, fetchDestinations } from "../../services/api/api";
import type { TravelOption, Destination } from "../../services/types";
import TravelOptionList from "../../components/travel/TravelOptionList";

const TravelPage: React.FC<{ destinationId: number }> = ({ destinationId }) => {
  const [travelOptions, setTravelOptions] = useState<TravelOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState<Destination | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      setLoading(true);
      try {
        const destinations = await fetchDestinations();
        const found = destinations.find((d) => d.id === destinationId) || null;
        if (!isMounted) return;
        setDestination(found);

        const allTravelOptions = await fetchTravelOptions();
        if (!isMounted) return;

        setTravelOptions(
          allTravelOptions.filter((t) =>
            t.arrivalPoint
              .toLowerCase()
              .includes(found?.location.toLowerCase() || ""),
          ),
        );
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadData();
    return () => {
      isMounted = false;
    };
  }, [destinationId]);

  const handleFavoriteToggle = (id: number) => {
    setTravelOptions((prev) =>
      prev.map((t) => (t.id === id ? { ...t, favorite: !t.favorite } : t)),
    );
  };

  const handleSelect = (id: number) => {
    console.log("Selected travel option:", id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Travel Options {destination ? `to ${destination.name}` : ""}
      </h1>

      {loading ? (
        <TravelOptionList
          travelOptions={[]}
          loading={true}
          onFavoriteToggle={handleFavoriteToggle}
          onSelect={handleSelect}
        />
      ) : travelOptions.length === 0 ? (
        <div className="text-center py-12 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            No Travel Options Available
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Sorry, there are no travel options to {destination?.name} at the moment.
          </p>
          <br></br>
          <Link to="/destinations">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Explore Other Destinations
            </button>
          </Link>
        </div>
      ) : (
        <TravelOptionList
          travelOptions={travelOptions}
          loading={false}
          onFavoriteToggle={handleFavoriteToggle}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default TravelPage;
