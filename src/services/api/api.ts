import type {
  Destination,
  Accommodation,
  TravelOption,
  Activity,
  Package,
  Review,
  User,
  Booking,
} from "../types";

// Import all dummy data from the new separate files
import {
  destinations,
  accommodations,
  travelOptions,
  activities,
  packages,
  reviews,
  users,
  bookings,
} from "./data/index";

// ----------------------------
// API Functions (Mock)
// ----------------------------

// Destinations
export const fetchDestinations = async (): Promise<Destination[]> =>
  new Promise((resolve) => setTimeout(() => resolve(destinations), 500));

export const fetchDestinationById = async (
  id: number
): Promise<Destination | null> =>
  new Promise((resolve) =>
    setTimeout(() => resolve(destinations.find((d) => d.id === id) || null), 500)
  );

// Accommodations
export const fetchAccommodations = async (): Promise<Accommodation[]> =>
  new Promise((resolve) => setTimeout(() => resolve(accommodations), 400));

export const fetchAccommodationById = async (
  id: number
): Promise<Accommodation | null> =>
  new Promise((resolve) =>
    setTimeout(() => resolve(accommodations.find((a) => a.id === id) || null), 400)
  );

// Travel Options
export const fetchTravelOptions = async (): Promise<TravelOption[]> =>
  new Promise((resolve) => setTimeout(() => resolve(travelOptions), 400));

export const fetchTravelOptionById = async (
  id: number
): Promise<TravelOption | null> =>
  new Promise((resolve) =>
    setTimeout(() => resolve(travelOptions.find((t) => t.id === id) || null), 400)
  );

// Activities
export const fetchActivities = async (): Promise<Activity[]> =>
  new Promise((resolve) => setTimeout(() => resolve(activities), 300));

// Packages
export const fetchPackages = async (): Promise<Package[]> =>
  new Promise((resolve) => setTimeout(() => resolve(packages), 300));

// Reviews
export const fetchReviews = async (): Promise<Review[]> =>
  new Promise((resolve) => setTimeout(() => resolve(reviews), 300));

// Users
export const fetchUsers = async (): Promise<User[]> =>
  new Promise((resolve) => setTimeout(() => resolve(users), 300));

// Bookings
export const fetchBookings = async (): Promise<Booking[]> =>
  new Promise((resolve) => setTimeout(() => resolve(bookings), 300));
