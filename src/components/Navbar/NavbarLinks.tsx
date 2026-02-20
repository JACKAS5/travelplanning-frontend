import { NavLink } from "react-router-dom";

const links = [
  { name: "Explore", path: "/search" },
  { name: "Destinations", path: "/destinations" },
];

interface Props {
  mobile?: boolean;
  onClick?: () => void;
}

const NavbarLinks = ({ mobile = false, onClick }: Props) => {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          onClick={onClick}
          className={({ isActive }) =>
            `
            group relative transition-all duration-300 ease-out

            ${
              mobile
                ? "block py-2 text-base"
                : "px-3 py-1.5 text-sm font-medium"
            }

            ${
              isActive
                ? "text-indigo-600 dark:text-indigo-400"
                : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            }
            `
          }
        >
          {/* Text */}
          <span className="relative z-10">{link.name}</span>

          {/* Animated underline */}
          <span
            className="
              absolute left-0 -bottom-1 h-[2px] w-0
              bg-gradient-to-r from-indigo-500 to-purple-500
              transition-all duration-300 ease-out
              group-hover:w-full
              group-[.active]:w-full
            "
          />

          {/* Hover glow background */}
          <span
            className="
              absolute inset-0 rounded-md opacity-0
              bg-indigo-50 dark:bg-indigo-900/30
              transition-opacity duration-300
              group-hover:opacity-100
            "
          />

        </NavLink>
      ))}
    </>
  );
};

export default NavbarLinks;