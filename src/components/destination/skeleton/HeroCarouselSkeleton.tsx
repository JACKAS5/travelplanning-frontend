export default function HeroCarouselSkeleton() {
  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg animate-pulse bg-gray-300 dark:bg-gray-700">
      {/* Image skeleton */}
      <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700" />

      {/* Gradient overlay placeholder */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Info Overlay Skeleton */}
      <div className="absolute bottom-6 left-6 space-y-2 max-w-lg">
        <div className="h-8 w-64 bg-gray-400 dark:bg-gray-600 rounded"></div>
        <div className="h-6 w-40 bg-gray-400 dark:bg-gray-600 rounded"></div>
        <div className="flex gap-4 mt-2">
          <div className="h-4 w-10 bg-gray-400 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-16 bg-gray-400 dark:bg-gray-600 rounded"></div>
        </div>
      </div>

      {/* Favorite Button Skeleton */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-full" />
      
      {/* Full View Button Skeleton */}
      <div className="absolute top-6 left-6 w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-full" />

      {/* Carousel arrows skeleton */}
      <div className="absolute top-1/2 left-4 w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-full -translate-y-1/2" />
      <div className="absolute top-1/2 right-4 w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-full -translate-y-1/2" />
    </div>
  );
}