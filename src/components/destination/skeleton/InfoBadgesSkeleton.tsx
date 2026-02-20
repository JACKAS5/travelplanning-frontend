export default function InfoBadgesSkeleton() {
  return (
    <div className="flex flex-wrap gap-3 animate-pulse mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded-full"
        />
      ))}
    </div>
  );
}