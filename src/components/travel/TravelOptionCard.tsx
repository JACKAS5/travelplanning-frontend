import { HiHeart } from "react-icons/hi";
import Rating from "../ui/Rating";

type Props = {
  type: string;
  provider: string;
  price: number;
  currency: string;
  duration: string;
  departurePoint: string;
  arrivalPoint: string;
  rating?: number;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
};

export default function TravelOptionCard({
  type,
  provider,
  price,
  currency,
  duration,
  departurePoint,
  arrivalPoint,
  rating = 0,
  isFavorite = false,
  onFavoriteToggle,
}: Props) {
  const getIcon = () => {
    switch (type) {
      case "Car": return "🚗";
      case "Flight": return "✈️";
      case "Train": return "🚆";
      case "Boat": return "🚢";
      case "Bicycle": return "🚴";
      default: return "🗺️";
    }
  };

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">{getIcon()} <span>{type}</span></div>
        {onFavoriteToggle && (
          <button onClick={onFavoriteToggle}>
            <HiHeart className={`w-6 h-6 ${isFavorite ? "text-red-500" : "text-gray-400 dark:text-gray-200"}`} />
          </button>
        )}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{provider}</p>
      <p className="text-indigo-600 dark:text-indigo-400 font-semibold">{currency}{price}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{duration}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{departurePoint} → {arrivalPoint}</p>
      {rating > 0 && <Rating value={rating} />}
    </div>
  );
}
