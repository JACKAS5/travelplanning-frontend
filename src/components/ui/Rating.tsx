import { HiStar } from "react-icons/hi";

type Props = {
  value: number; // 0 to 5
};

export default function Rating({ value }: Props) {
  const fullStars = Math.floor(value);
  const halfStar = value - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: fullStars }).map((_, i) => (
        <HiStar key={`full-${i}`} className="w-4 h-4 text-yellow-400" />
      ))}
      {halfStar && <HiStar className="w-4 h-4 text-yellow-200" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <HiStar key={`empty-${i}`} className="w-4 h-4 text-gray-300 dark:text-gray-600" />
      ))}
      <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">{value.toFixed(1)}</span>
    </div>
  );
}
