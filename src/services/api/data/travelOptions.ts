import type { TravelOption } from "../../types";

export const travelOptions: TravelOption[] = [
  {
    id: 1,
    type: "Car",
    provider: "Siem Reap Taxi Co.",
    price: 30,
    currency: "USD",
    duration: "1h",
    departurePoint: "Airport",
    arrivalPoint: "Hotel",
    availableDates: ["2026-02-20", "2026-02-22"],
    favorite: false,
    subTypes: ["Private"],
    tags: ["Recommended"],
    mapPinColor: "yellow",
  },
  {
    id: 2,
    type: "Flight",
    provider: "Cambodia Airlines",
    price: 120,
    currency: "USD",
    duration: "1h 30m",
    departurePoint: "Phnom Penh Airport",
    arrivalPoint: "Siem Reap Airport",
    availableDates: ["2026-02-20", "2026-02-22"],
    favorite: true,
    subTypes: ["Fast", "VIP"],
    tags: ["Top Rated"],
    mapPinColor: "blue",
  },
];
