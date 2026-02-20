import { useNavigate } from "react-router-dom";
import DestinationCard from "../components/ui/DestinationCard";
import type { Destination } from "../services/types";

const mockResults: Partial<Destination>[] = [
  {
    id: 1,
    name: "Phnom Penh",
    description: "Capital of Cambodia",
    images: ["/assets/phnom-penh1.jpg"],
    location: "Phnom Penh, Cambodia",
    price: 100,
    currency: "$",
    rating: 4.5,
    reviewsCount: 120,
    type: "City",
  },
  {
    id: 2,
    name: "Siem Reap",
    description: "Home of Angkor Wat",
    images: ["/assets/siem-reap1.jpg"],
    location: "Siem Reap, Cambodia",
    price: 150,
    currency: "$",
    rating: 4.8,
    reviewsCount: 250,
    type: "Historical",
  },
];

const SearchResults: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Search Results</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockResults.map((d) => (
          <DestinationCard
            key={d.id}
            image={d.images?.[0] || ""}
            title={d.name || ""}
            location={d.location || ""}
            price={d.price || 100}
            rating={d.rating || 4}
            onClick={() => navigate(`/destination/${d.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
