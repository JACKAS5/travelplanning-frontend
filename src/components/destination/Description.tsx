import { MapPin } from "lucide-react";

type Props = {
  latitude: number;
  longitude: number;
};

export default function LocationCard({ latitude, longitude }: Props) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center gap-3">
      <MapPin className="w-6 h-6 text-red-500" />
      <div className="text-gray-700 dark:text-gray-300">
        <p>
          Latitude: <span className="font-medium">{latitude.toFixed(4)}</span>
        </p>
        <p>
          Longitude: <span className="font-medium">{longitude.toFixed(4)}</span>
        </p>
      </div>
    </div>
  );
}
