import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDestinations } from "../services/api/api";
import type { Destination } from "../services/types";

import HeroCarousel from "../components/destination/HeroCarousel";
import InfoBadges from "../components/destination/InfoBadges";
import LocationCard from "../components/destination/LocationCard";
import ReviewsList from "../components/destination/ReviewsList";
import RelatedDestinations from "../components/destination/RelatedDestinations";

// Skeletons
import HeroSkeleton from "../components/destination/skeleton/HeroCarouselSkeleton";
import InfoBadgesSkeleton from "../components/destination/skeleton/InfoBadgesSkeleton";
import LocationCardSkeleton from "../components/destination/skeleton/LocationCardSkeleton";
import ReviewsSkeleton from "../components/destination/skeleton/ReviewsSkeleton";

const DestinationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [destination, setDestination] = useState<Destination | null>(null);
  const [related, setRelated] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchDestinations();
        if (!isMounted) return;

        const found = data.find((d) => d.id === Number(id)) || null;
        const relatedDest = data.filter((d) => d.id !== Number(id));

        setDestination(found);
        setRelated(relatedDest);
        setFavorite(found?.favorite || false);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadData();
    return () => {
      isMounted = false;
    };
  }, [id]);

  // Loading skeleton view
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        <HeroSkeleton />
        <InfoBadgesSkeleton />
        <div className="h-20 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        <LocationCardSkeleton />
        <div className="flex gap-4">
          <div className="h-10 w-40 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-10 w-40 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        </div>
        <ReviewsSkeleton />
        <RelatedDestinations related={[]} loading={true} onNavigate={() => {}} />
      </div>
    );
  }

  // Destination not found
  if (!destination) {
    return (
      <p className="text-center mt-20 text-gray-700 dark:text-gray-300 text-lg">
        Destination not found.
      </p>
    );
  }

  // Destination is guaranteed not null here
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      {/* Hero */}
      <HeroCarousel
        images={destination.images}
        name={destination.name}
        location={destination.location}
        rating={destination.rating}
        reviewsCount={destination.reviewsCount}
        favorite={favorite}
        onFavoriteToggle={() => setFavorite(!favorite)}
      />

      {/* Info Badges */}
      <InfoBadges
        price={destination.price}
        currency={destination.currency || "$"}
        highlights={destination.highlights}
        bestSeason={destination.bestSeason}
        type={destination.type}
        amenities={destination.amenities}
      />

      {/* Description */}
      <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        <p>{destination.description}</p>
      </div>

      {/* Location */}
      {destination.latitude && destination.longitude && (
        <LocationCard latitude={destination.latitude} longitude={destination.longitude} />
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => navigate(`/destination/${destination.id}/accommodations`)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg shadow transition"
        >
          View Accommodations
        </button>
        <button
          onClick={() => navigate(`/destination/${destination.id}/travel`)}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow transition"
        >
          View Travel Options
        </button>
      </div>

      {/* Reviews */}
      <ReviewsList reviews={destination.reviews} />

      {/* Related Destinations */}
      <RelatedDestinations
        related={related}
        loading={false}
        onNavigate={(id) => navigate(`/destination/${id}`)}
      />
    </div>
  );
};

export default DestinationDetails;