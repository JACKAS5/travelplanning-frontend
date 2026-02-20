import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDestinations, fetchAccommodations } from "../../services/api/api";
import type { Accommodation, Destination } from "../../services/types";
import AccommodationList from "../../components/accommodation/AccommodationList";

const AccommodationPage: React.FC<{ destinationId: number }> = ({ destinationId }) => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState<Destination | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      setLoading(true);
      try {
        const destinations = await fetchDestinations();
        const found = destinations.find((d) => d.id === destinationId) || null;
        if (!isMounted) return;
        setDestination(found);

        const allAccommodations = await fetchAccommodations();
        if (!isMounted) return;

        // Filter by location
        setAccommodations(allAccommodations.filter(a => a.location === found?.location));
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadData();
    return () => { isMounted = false; };
  }, [destinationId]);

  // Toggle favorite locally (mock)
  const handleFavoriteToggle = (id: number) => {
    setAccommodations((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, favorite: !a.favorite } : a
      )
    );
  };

  // Select accommodation (navigate or show modal)
  const handleSelect = (id: number) => {
    navigate(`/accommodation/${id}`); // you can create a detail page later
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Accommodations {destination ? `in ${destination.name}` : ""}
      </h1>

      {accommodations.length === 0 && !loading ? (
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          No accommodations available for this destination.
        </p>
      ) : (
        <AccommodationList
          accommodations={accommodations}
          loading={loading}
          onFavoriteToggle={handleFavoriteToggle}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default AccommodationPage;
