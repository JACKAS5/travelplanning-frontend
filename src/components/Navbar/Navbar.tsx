import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobileMenu from "./NavbarMobileMenu";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

        <NavbarLogo />

        <NavbarDesktop />

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>

      </div>

      <NavbarMobileMenu
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

    </header>
  );
};

export default Navbar;