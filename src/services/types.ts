// ----------------------------
// Destination Models
// ----------------------------
export interface Destination {
  id: number;
  name: string;
  description: string;
  images: string[];                // gallery/carousel
  location: string;                // city, state, country
  latitude: number;                // for map pin
  longitude: number;               // for map pin
  type: "Beach" | "City" | "Historical" | "Adventure" | "Nature" | "Resort" | "Mountain" | "Cultural" | "Island" | "Town"; 
  subTypes?: string[];             // ["Family-Friendly", "Romantic", "Luxury"]
  tags?: string[];                 // ["Popular", "Hidden Gem", "Top Rated"]
  price: number;                   // starting price per night/package
  currency: string;                // USD, KHR, etc.
  rating: number;                  // average 0-5
  reviewsCount: number;
  highlights?: string[];           // ["Beach", "Temple", "Night Market"]
  bestSeason?: string;             // e.g., "Nov - Feb"
  favorite?: boolean;              // for logged-in user
  activities?: Activity[];
  packages?: Package[];
  availability?: string[];         // available dates
  amenities?: string[];            // ["WiFi", "Pool", "Breakfast"]
  createdAt?: string;
  updatedAt?: string;
  reviews?: Review[];
  mapPinColor?: string;            // optional: custom marker color on map
}

// ----------------------------
// Activity Model
// ----------------------------
export interface Activity {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  duration: string;                // "3h", "Full Day"
  rating?: number;
  image?: string;
  category?: string;               // "Sightseeing", "Adventure"
  type?: string;                   // "Guided", "Self-Guided"
  includedInPackages?: number[];   // package IDs
}

// ----------------------------
// Package Model
// ----------------------------
export interface Package {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  duration: string;                // e.g., "2 Days / 1 Night"
  includedActivities?: Activity[];
  rating?: number;
}

// ----------------------------
// Review Model
// ----------------------------
export interface Review {
  id: number;
  userId: number;
  userName: string;
  userAvatar?: string;
  rating: number;                  // 1-5
  comment: string;
  date: string;
  destinationId: number;
  activityId?: number;             // optional: review for activity
  accommodationId?: number;        // optional: review for accommodation
  travelOptionId?: number;         // optional: review for travel
  verifiedBooking?: boolean;       // if review is verified
}

// ----------------------------
// User Model
// ----------------------------
export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  favorites: number[];             // destination, accommodation, or travel IDs
  bookings: Booking[];
  roles?: "user" | "admin";
  createdAt?: string;
  updatedAt?: string;
}

// ----------------------------
// Booking Model
// ----------------------------
export interface Booking {
  id: number;
  userId: number;
  destinationId: number;
  activityIds?: number[];
  packageId?: number;
  accommodationId?: number;
  travelOptionIds?: number[];
  startDate: string;
  endDate: string;
  guests: number;
  totalPrice: number;
  currency: string;
  status: "pending" | "confirmed" | "cancelled";
  paymentStatus?: "unpaid" | "paid" | "refunded";
  createdAt?: string;
  updatedAt?: string;
  notes?: string;                 // any special instructions
}

// ----------------------------
// Payment Model
// ----------------------------
export interface Payment {
  id: number;
  bookingId: number;
  amount: number;
  currency: string;
  method: "credit_card" | "paypal" | "stripe" | "bank_transfer";
  status: "pending" | "completed" | "failed" | "refunded";
  createdAt?: string;
  updatedAt?: string;
}

// ----------------------------
// Search / Filter Model
// ----------------------------
export interface SearchFilter {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  highlights?: string[];
  activities?: string[];
  types?: string[];
  amenities?: string[];
  availableDate?: string;
  tags?: string[];
}

// ----------------------------
// Accommodation Model
// ----------------------------
export interface Accommodation {
  id: number;
  name: string;
  type: "Hotel" | "Resort" | "Hostel" | "Guesthouse" | "Villa" | "Inn" | "Bungalow" | "Lodge";
  images: string[];
  location: string;
  latitude: number;
  longitude: number;
  pricePerNight: number;
  currency: string;
  rating: number;        
  amenities: string[];
  reviewsCount: number;
  reviews?: Review[];
  availability: string[];
  favorite?: boolean;
  distanceToCenter?: number;
  description?: string;
  checkInTime?: string;
  checkOutTime?: string;
  roomsAvailable?: number;
  maxGuests?: number;
  cancellationPolicy?: string;
  subTypes?: string[];             // ["Luxury", "Family-Friendly"]
  tags?: string[];                 // ["Popular", "Pet-Friendly"]
  mapPinColor?: string;            // optional map pin color
}

// ----------------------------
// Travel / Transportation Model
// ----------------------------
export interface TravelOption {
  id: number;
  type: "Car" | "Bus" | "Train" | "Flight" | "Boat" | "Bicycle" | "Walking";
  provider: string;
  price: number;
  currency: string;
  duration: string;
  departurePoint: string;
  arrivalPoint: string;
  availableDates: string[];
  rating?: number;
  image?: string;
  favorite?: boolean;
  vehicleDetails?: string;
  seatAvailability?: number;
  refundable?: boolean;
  notes?: string;
  subTypes?: string[];              // ["Fast", "Budget", "Luxury"]
  tags?: string[];                  // ["Popular", "VIP", "Recommended"]
  mapPinColor?: string;
}

// ----------------------------
// Admin / Analytics Model
// ----------------------------
export interface AdminStats {
  totalUsers: number;
  totalBookings: number;
  totalRevenue: number;
  popularDestinations: { destinationId: number; bookings: number }[];
  topRatedActivities: { activityId: number; rating: number }[];
}

// ----------------------------
// Common Lists / Constants
// ----------------------------
export const destinationTypes = [
  "Beach", "City", "Historical", "Adventure", "Nature", "Resort", "Mountain", "Cultural", "Island"
];

export const accommodationTypes = [
  "Hotel", "Resort", "Hostel", "Guesthouse", "Villa"
];

export const travelTypes = [
  "Car", "Bus", "Train", "Flight", "Boat", "Bicycle", "Walking"
];

export const amenitiesList = [
  "WiFi", "Pool", "Parking", "Pet Friendly", "Breakfast Included",
  "Air Conditioning", "Spa", "Gym", "Beach Access", "Bar/Restaurant"
];

export const tagsList = [
  "Popular", "Hidden Gem", "Top Rated", "Recommended", "VIP", "Budget", "Family-Friendly", "Luxury", "Pet-Friendly"
];
