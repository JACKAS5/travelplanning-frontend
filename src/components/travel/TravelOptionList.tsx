// src/components/travel/TravelOptionList.tsx
import CardSkeleton from "../ui/CardSkeleton";
import TravelOptionCard from "./TravelOptionCard";
import type { TravelOption } from "../../services/types";

type Props = {
  travelOptions: TravelOption[];
  loading: boolean;
  onFavoriteToggle?: (id: number) => void;
  onSelect?: (id: number) => void;
};

export default function TravelOptionList({
  travelOptions,
  loading,
  onFavoriteToggle,
  onSelect,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
        : travelOptions.map((t) => (
            <div
              key={t.id}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => onSelect?.(t.id)}
            >
              <TravelOptionCard
                type={t.type}
                provider={t.provider}
                price={t.price}
                currency={t.currency}
                duration={t.duration}
                departurePoint={t.departurePoint}
                arrivalPoint={t.arrivalPoint}
                rating={t.rating}
                isFavorite={t.favorite}
                onFavoriteToggle={() => onFavoriteToggle?.(t.id)}
              />
            </div>
          ))}
    </div>
  );
}
