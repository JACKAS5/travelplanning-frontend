import type { Review } from "../../services/types";

type Props = { reviews?: Review[] };

export default function ReviewsList({ reviews = [] }: Props) {
  if (!reviews.length)
    return <p className="text-gray-600 dark:text-gray-400">No reviews yet.</p>;

  return (
    <div className="space-y-4">
      {reviews.map((r) => (
        <div key={r.id} className="flex gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
          <img
            src={r.userAvatar || "/assets/avatar-placeholder.png"}
            alt={r.userName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 dark:text-white">{r.userName}</h3>
              <span className="text-yellow-500 font-bold">⭐ {r.rating}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-1">{r.comment}</p>
            <span className="text-gray-400 text-sm">{new Date(r.date).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
