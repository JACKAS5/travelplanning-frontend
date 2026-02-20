import React from "react";
import { Outlet, Link } from "react-router-dom";
import { UserProvider } from "../../context/UserContext";

const ProfileLayout: React.FC = () => {
  return (
    <UserProvider>
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-6">
          <nav className="space-y-2">
            <Link to="/profile" className="block hover:text-indigo-600">Profile</Link>
            <Link to="/profile/edit" className="block hover:text-indigo-600">Edit Profile</Link>
            <Link to="/profile/change-password" className="block hover:text-indigo-600">Change Password</Link>
            <Link to="/profile/bookings" className="block hover:text-indigo-600">Booking History</Link>
            <Link to="/profile/favorites" className="block hover:text-indigo-600">Favorites</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white dark:bg-gray-900">
          <Outlet />
        </main>
      </div>
    </UserProvider>
  );
};

export default ProfileLayout;
