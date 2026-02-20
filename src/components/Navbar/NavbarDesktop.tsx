import NavbarLinks from "./NavbarLinks";
import NavbarSearch from "../Search/NavbarSearch";
import ThemeToggle from "../ThemeToggle";
import UserMenu from "./UserMenu";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const NavbarDesktop = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {/* Navigation Links */}
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <NavbarLinks />
      </nav>

      {/* Right side */}
      <div className="hidden md:flex items-center gap-3">

        <NavbarSearch />

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <Link to="/auth/login">
              <Button
                variant="outline"
                size="md"
                className="rounded-full px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Login
              </Button>
            </Link>

            <Link to="/auth/register">
              <Button
                variant="primary"
                size="md"
                className="rounded-full px-5 py-2 shadow-md hover:shadow-lg transition-all duration-200"
              >
                Sign Up
              </Button>
            </Link>
          </>
        )}

        <ThemeToggle />

      </div>
    </>
  );
};

export default NavbarDesktop;