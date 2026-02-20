import { FaMoneyBillWave, FaTag, FaUmbrellaBeach, FaCheck } from "react-icons/fa";

type Props = {
  price: number;
  currency: string;
  highlights?: string[];
  bestSeason?: string;
  type: string;
  amenities?: string[];
};

export default function InfoBadges({
  price,
  currency,
  highlights = [],
  bestSeason,
  type,
  amenities = [],
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 items-center text-gray-700 dark:text-gray-300">

      {/* Price */}
      <span className="flex items-center gap-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100 px-3 py-1 rounded-full font-semibold">
        <FaMoneyBillWave className="w-4 h-4" />
        {currency}{price} / night
      </span>

      {/* Type */}
      <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full font-medium">
        <FaTag className="w-4 h-4" />
        {type}
      </span>

      {/* Highlights */}
      {highlights.map((h, i) => (
        <span key={i} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full font-medium">
          {h}
        </span>
      ))}

      {/* Best Season */}
      {bestSeason && (
        <span className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100 px-3 py-1 rounded-full font-medium">
          <FaUmbrellaBeach className="w-4 h-4" />
          Best Season: {bestSeason}
        </span>
      )}

      {/* Amenities */}
      {amenities.map((a, i) => (
        <span key={i} className="flex items-center gap-1 bg-green-100 dark:bg-green-800 text-green-900 dark:text-green-100 px-3 py-1 rounded-full font-medium">
          <FaCheck className="w-3 h-3" />
          {a}
        </span>
      ))}
    </div>
  );
}
