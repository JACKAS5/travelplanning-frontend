import type { Activity } from "../../types";

export const activities: Activity[] = [
  {
    id: 1,
    name: "Angkor Wat Guided Tour",
    description: "Explore the ancient temples of Angkor with a licensed guide.",
    price: 50,
    currency: "USD",
    duration: "4h",
    rating: 4.8,
    category: "Sightseeing",
    type: "Guided",
  },
  {
    id: 2,
    name: "Sihanoukville Snorkeling",
    description: "Snorkel the beautiful coral reefs around Sihanoukville.",
    price: 35,
    currency: "USD",
    duration: "3h",
    rating: 4.5,
    category: "Adventure",
    type: "Guided",
  },
  {
    id: 3,
    name: "Phnom Penh Night Market Walk",
    description: "Experience local food, culture, and souvenirs in Phnom Penh.",
    price: 15,
    currency: "USD",
    duration: "2h",
    rating: 4.3,
    category: "Cultural",
    type: "Self-Guided",
  },
];
