type Props = { latitude: number; longitude: number };

export default function LocationCard({ latitude, longitude }: Props) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl shadow-sm">
      <p className="text-gray-700 dark:text-gray-300">
        📍 Latitude: {latitude.toFixed(4)}, Longitude: {longitude.toFixed(4)}
      </p>
    </div>
  );
}
