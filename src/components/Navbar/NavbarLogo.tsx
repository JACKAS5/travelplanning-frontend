import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";

const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 font-bold text-indigo-600 text-lg md:text-xl"
    >
      <HiOutlineLocationMarker className="w-6 h-6" />
      TravelPlanner
    </Link>
  );
};

export default NavbarLogo;