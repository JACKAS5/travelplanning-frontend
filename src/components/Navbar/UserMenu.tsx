import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const UserMenu: React.FC = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
          {user?.name.charAt(0)}
        </span>
        <span className="hidden md:block">{user?.name}</span>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 animate-fadeIn">
          {[
            { label: "Profile", to: "/profile" },
            { label: "Edit Profile", to: "/profile/edit" },
            { label: "Bookings", to: "/profile/bookings" },
            { label: "Favorites", to: "/profile/favorites" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={logout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
