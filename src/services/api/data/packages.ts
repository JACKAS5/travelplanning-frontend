import type { Package } from "../../types";
import { activities } from "./activities";

export const packages: Package[] = [
  {
    id: 1,
    name: "Siem Reap Temple Adventure",
    description: "2-day package visiting Angkor temples and cultural sites.",
    price: 150,
    currency: "USD",
    duration: "2 Days / 1 Night",
    includedActivities: [activities[0]],
    rating: 4.7,
  },
  {
    id: 2,
    name: "Sihanoukville Beach Relaxation",
    description: "3-day package with snorkeling and island hopping.",
    price: 200,
    currency: "USD",
    duration: "3 Days / 2 Nights",
    includedActivities: [activities[1]],
    rating: 4.6,
  },
];
