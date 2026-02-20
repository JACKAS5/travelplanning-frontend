type FavoriteCardProps = {
  destination: string;
  image: string;
};

const FavoriteCard: React.FC<FavoriteCardProps> = ({ destination, image }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
      <img src={image} alt={destination} className="w-full h-40 object-cover" />
      <div className="p-3 bg-white dark:bg-gray-800">
        <h3 className="font-semibold text-gray-900 dark:text-white">{destination}</h3>
      </div>
    </div>
  );
};

export default FavoriteCard;
