import { useState } from "react";
import { HiHeart, HiOutlineArrowsExpand, HiOutlineX } from "react-icons/hi";
import { ChevronLeft, ChevronRight, Star, Users } from "lucide-react";

type Props = {
  images: string[];
  name: string;
  location: string;
  rating: number;
  reviewsCount: number;
  favorite: boolean;
  onFavoriteToggle: () => void;
};

export default function HeroCarousel({
  images,
  name,
  location,
  rating,
  reviewsCount,
  favorite,
  onFavoriteToggle,
}: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [fullView, setFullView] = useState(false);
  const [loading, setLoading] = useState(true);

  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);

  return (
    <>
      {/* Full View Overlay Background */}
      {fullView && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setFullView(false)}
        />
      )}

      <div
        className={`relative w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
          fullView
            ? "fixed inset-0 z-50 h-screen rounded-none flex items-center justify-center bg-black"
            : "h-96"
        }`}
      >
        {/* Skeleton */}
        {loading && (
          <div className="absolute inset-0 animate-pulse bg-gray-300 dark:bg-gray-700" />
        )}

        {/* Image */}
        <img
          src={images[currentImage]}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            loading ? "hidden" : "group-hover:scale-105"
          }`}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Carousel Controls */}
        {images.length > 1 && !loading && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 dark:bg-gray-800/80 rounded-full p-2 shadow hover:scale-110 transition z-50"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 dark:bg-gray-800/80 rounded-full p-2 shadow hover:scale-110 transition z-50"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Overlay Info */}
        {!loading && (
          <div className="absolute bottom-6 left-6 space-y-2 text-white drop-shadow-lg max-w-lg z-50">
            <h1 className="text-4xl font-extrabold">{name}</h1>
            <p className="text-lg">{location}</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{reviewsCount} Reviews</span>
              </div>
            </div>
          </div>
        )}

        {/* Favorite Button */}
        {!loading && (
          <button
            onClick={onFavoriteToggle}
            className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/80 backdrop-blur rounded-full p-2 shadow-md hover:scale-110 transition z-50"
            aria-label="Toggle favorite"
          >
            <HiHeart
              className={`w-6 h-6 transition-colors duration-300 ${
                favorite ? "text-red-500" : "text-gray-400 dark:text-gray-200"
              }`}
            />
          </button>
        )}

        {/* Full View Toggle */}
        {!loading && (
          <button
            onClick={() => setFullView(!fullView)}
            className="absolute top-6 left-6 bg-white/90 dark:bg-gray-800/80 backdrop-blur rounded-full p-2 shadow-md hover:scale-110 transition z-50"
            aria-label={fullView ? "Close Full View" : "Open Full View"}
          >
            {fullView ? (
              <HiOutlineX className="w-6 h-6" />
            ) : (
              <HiOutlineArrowsExpand className="w-6 h-6" />
            )}
          </button>
        )}
      </div>
    </>
  );
}