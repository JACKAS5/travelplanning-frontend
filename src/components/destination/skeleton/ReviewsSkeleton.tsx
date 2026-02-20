export default function ReviewsListSkeleton() {
  return (
    <div className="space-y-4 animate-pulse mt-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-3/5 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}