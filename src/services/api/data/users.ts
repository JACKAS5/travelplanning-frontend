import type { User } from "../../types";
import { bookings } from "./bookings";

export const users: User[] = [
  {
    id: 1,
    name: "Sok Panha",
    email: "panha@example.com",
    avatar: "/assets/avatar1.jpg",
    favorites: [2, 1], // destination, accommodation, travelOption IDs
    bookings: [bookings[0]], // reference to booking objects
    roles: "user",
  },
  {
    id: 2,
    name: "Alice Johnson",
    email: "alice@example.com",
    avatar: "/assets/avatar2.jpg",
    favorites: [3, 2],
    bookings: [],
    roles: "user",
  },
];
