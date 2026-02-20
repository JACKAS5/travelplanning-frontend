import BookingCard from "../../components/profile/BookingCard";

const BookingHistory: React.FC = () => {
  const bookings = [
    { destination: "Phnom Penh", date: "2026-02-20", price: 150 },
    { destination: "Siem Reap", date: "2026-03-15", price: 200 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Booking History</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bookings.map((b, i) => <BookingCard key={i} {...b} />)}
      </div>
    </div>
  );
};

export default BookingHistory;
