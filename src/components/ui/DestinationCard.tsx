import Card from "./Card";
import Badge from "./Badge";
import FavoriteButton from "./FavoriteButton";
import Rating from "./Rating";

type Props = {
  image: string;
  title: string;
  location: string;
  price: number;
  currency?: string;
  rating: number;
  type?: string;
  highlights?: string[];
  bestSeason?: string;
  isFavorite?: boolean;
  onClick?: () => void;
  onFavoriteToggle?: () => void;
};

export default function DestinationCard({
  image,
  title,
  location,
  price,
  currency = "$",
  rating,
  type,
  highlights = [],
  bestSeason,
  isFavorite = false,
  onClick,
  onFavoriteToggle,
}: Props) {
  return (
    <Card
      onClick={onClick}
      className="group relative overflow-hidden transition-all duration-300
        hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Type Badge */}
        {type && (
          <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:-translate-y-1">
            <Badge>{type}</Badge>
          </div>
        )}

        {/* Favorite Button */}
        <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:scale-110">
          <FavoriteButton
            active={isFavorite}
            onClick={(e) => {
              e.stopPropagation(); // prevent card click
              onFavoriteToggle?.();
            }}
          />
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-3 left-3 transition-transform duration-300">
          <Badge>
            {currency}
            {price}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 transition-all duration-500">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
          {location}
        </p>
        <Rating value={rating} />

        {/* Highlights */}
        {highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {highlights.map((h, i) => (
              <span key={i} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded-lg">
                {h}
              </span>
            ))}
          </div>
        )}

        {/* Best Season */}
        {bestSeason && (
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
            🌤 Best Season: {bestSeason}
          </p>
        )}
      </div>
    </Card>
  );
}
