import React from "react";
import { Routes, Route } from "react-router-dom";

import ProfileLayout from "../layouts/user/ProfileLayout";
import Profile from "../pages/profile/Profile";
import EditProfile from "../pages/profile/EditProfile";
import ChangePassword from "../pages/profile/ChangePassword";
import BookingHistory from "../pages/profile/BookingHistory";
import Favorites from "../pages/profile/Favorites";
import ProtectedRoute from "../components/routing/ProtectedRoute";

const ProfileRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <ProfileLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Profile />} />
        <Route path="edit" element={<EditProfile />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="bookings" element={<BookingHistory />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default ProfileRoutes;
