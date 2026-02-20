import CardSkeleton from "../ui/CardSkeleton";
import type { Accommodation } from "../../services/types";
import { HiHeart } from "react-icons/hi";

type Props = {
  accommodations: Accommodation[];
  loading: boolean;
  onFavoriteToggle?: (id: number) => void;
  onSelect?: (id: number) => void;
};

export default function AccommodationList({
  accommodations,
  loading,
  onFavoriteToggle,
  onSelect,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
        : accommodations.map((a) => (
            <div
              key={a.id}
              onClick={() => onSelect?.(a.id)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer overflow-hidden"
            >
              <div className="relative">
                <img
                  src={a.images?.[0] || ""}
                  alt={a.name}
                  className="w-full h-48 object-cover"
                />
                {onFavoriteToggle && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onFavoriteToggle(a.id);
                    }}
                    className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/80 rounded-full p-2"
                  >
                    <HiHeart
                      className={`w-5 h-5 ${a.favorite ? "text-red-500" : "text-gray-400"}`}
                    />
                  </button>
                )}
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">{a.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{a.location}</p>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                  {a.currency}{a.pricePerNight} / night
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-sm">{a.rating}</span>
                </div>
                {a.amenities && a.amenities.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {a.amenities.slice(0, 3).map((amenity, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
    </div>
  );
}
