import React from "react";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import NavbarLinks from "./NavbarLinks";
import NavbarSearch from "../Search/NavbarSearch";
import ThemeToggle from "../ThemeToggle";
import UserMenu from "./UserMenu";
import Button from "../ui/Button";
import { useAuth } from "../../hooks/useAuth";

interface Props {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarMobileMenu: React.FC<Props> = ({ mobileOpen, setMobileOpen }) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <span className="font-bold text-indigo-600 text-lg">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* Search (optional inside drawer for mobile) */}
        <div className="p-4 border-b border-gray-100 dark:border-gray-800">
          <NavbarSearch />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
          <NavbarLinks mobile onClick={() => setMobileOpen(false)} />
        </nav>

        {/* Footer: Theme + Auth at bottom */}
        <div className="border-t border-gray-100 dark:border-gray-800 p-4 flex flex-col gap-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Theme</span>
            <ThemeToggle />
          </div>

          {!isLoggedIn && (
            <>
              <Link to="/auth/login" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full rounded-xl">
                  Login
                </Button>
              </Link>
              <Link to="/auth/register" onClick={() => setMobileOpen(false)}>
                <Button variant="primary" className="w-full rounded-xl">
                  Sign Up
                </Button>
              </Link>
            </>
          )}

          {isLoggedIn && <UserMenu />}
        </div>
      </div>
    </>
  );
};

export default NavbarMobileMenu;