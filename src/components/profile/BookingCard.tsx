type BookingCardProps = {
  destination: string;
  date: string;
  price: number;
};

const BookingCard: React.FC<BookingCardProps> = ({ destination, date, price }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-gray-900 dark:text-white">{destination}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">${price}</p>
    </div>
  );
};

export default BookingCard;
