import type { Booking } from "../../types";

export const bookings: Booking[] = [
  {
    id: 1,
    userId: 1,
    destinationId: 2,
    activityIds: [1],
    packageId: 1,
    accommodationId: 1,
    travelOptionIds: [2],
    startDate: "2026-02-20",
    endDate: "2026-02-21",
    guests: 2,
    totalPrice: 350,
    currency: "USD",
    status: "confirmed",
    paymentStatus: "paid",
    createdAt: "2026-01-15",
    updatedAt: "2026-01-20",
    notes: "Prefer morning pickup for travel",
  },
];
