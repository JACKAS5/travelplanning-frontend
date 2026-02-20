import DestinationCard from "../ui/DestinationCard";
import CardSkeleton from "../ui/CardSkeleton";
import type { Destination } from "../../services/types";

type Props = {
  related: Destination[];
  loading: boolean;
  onNavigate: (id: number) => void;
};

export default function RelatedDestinations({ related, loading, onNavigate }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Related Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
          : related.map((d) => (
              <DestinationCard
                key={d.id}
                image={d.images?.[0] || ""}
                title={d.name}
                location={d.location}
                price={d.price}
                rating={d.rating}
                onClick={() => onNavigate(d.id)}
              />
            ))}
      </div>
    </div>
  );
}
