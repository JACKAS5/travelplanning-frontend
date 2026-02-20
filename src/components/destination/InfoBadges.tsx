import {
  DollarSign,
  Tag,
  Calendar,
  Star,
  CheckCircle,
} from "lucide-react";

type Props = {
  price: number;
  currency: string;
  highlights?: string[];
  bestSeason?: string;
  type: string;
  amenities?: string[];
  rating?: number;
};

export default function InfoBadges({
  price,
  currency,
  highlights = [],
  bestSeason,
  type,
  amenities = [],
  rating,
}: Props) {
  const badgeClass =
    "flex items-center gap-1 px-3 py-1 rounded-full font-medium text-sm transition-colors";

  return (
    <div className="flex flex-wrap gap-3 items-center">
      {/* Price */}
      <span className={`${badgeClass} bg-indigo-100 dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100`}>
        <DollarSign size={16} /> {currency}
        {price} / night
      </span>

      {/* Type */}
      <span className={`${badgeClass} bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300`}>
        <Tag size={16} /> {type}
      </span>

      {/* Highlights */}
      {highlights.map((h, i) => (
        <span key={i} className={`${badgeClass} bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300`}>
          {h}
        </span>
      ))}

      {/* Best Season */}
      {bestSeason && (
        <span className={`${badgeClass} bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100`}>
          <Calendar size={16} /> Best Season: {bestSeason}
        </span>
      )}

      {/* Rating */}
      {rating !== undefined && (
        <span className={`${badgeClass} bg-orange-100 dark:bg-orange-800 text-orange-900 dark:text-orange-100`}>
          <Star size={16} /> {rating.toFixed(1)}
        </span>
      )}

      {/* Amenities */}
      {amenities.map((a, i) => (
        <span key={i} className={`${badgeClass} bg-green-100 dark:bg-green-800 text-green-900 dark:text-green-100`}>
          <CheckCircle size={16} /> {a}
        </span>
      ))}
    </div>
  );
}
