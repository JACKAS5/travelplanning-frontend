export interface User {
  id: number;
  fullname: string;
  email: string;
  avatar?: string;
  bookings: {
    id: number;
    destination: string;
    date: string;
    price: number;
    status: "Completed" | "Pending" | "Cancelled";
  }[];
  favorites: {
    id: number;
    name: string;
    location: string;
    image: string;
  }[];
}

export const mockUser: User = {
  id: 1,
  fullname: "Sokpanha Prak",
  email: "sokpanha@example.com",
  avatar: "/assets/avatar.png",
  bookings: [
    {
      id: 1,
      destination: "Phnom Penh",
      date: "2026-03-01",
      price: 120,
      status: "Completed",
    },
    {
      id: 2,
      destination: "Siem Reap",
      date: "2026-03-10",
      price: 200,
      status: "Pending",
    },
  ],
  favorites: [
    {
      id: 1,
      name: "Angkor Wat",
      location: "Siem Reap",
      image: "/assets/angkor-wat.jpg",
    },
    {
      id: 2,
      name: "Royal Palace",
      location: "Phnom Penh",
      image: "/assets/royal-palace.jpg",
    },
  ],
};
