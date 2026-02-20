// components/skeleton/DescriptionSkeleton.tsx
export default function DescriptionSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"
        />
      ))}
    </div>
  );
}