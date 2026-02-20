import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineSearch, HiX } from "react-icons/hi";
import type { Destination } from "../../services/types";
import { fetchDestinations } from "../../services/api/api";
import SearchDropdown from "./SearchDropdown";

const NavbarSearch: React.FC = () => {
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null); // <-- wrapper ref

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close dropdown if clicked outside wrapper
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const data = await fetchDestinations();
        const filtered = data.filter(d =>
          d.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (id: number) => {
    navigate(`/destination/${id}`);
    setQuery("");
    setSearchOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative flex items-center">
      {/* Your original expandable search input */}
      <div
        className={`flex items-center bg-gray-100 dark:bg-gray-800 rounded-full transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-500
          ${searchOpen ? "w-64 md:w-72 px-3" : "w-10 px-0"} h-10 overflow-hidden`}
      >
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {searchOpen && query ? (
            <HiX className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          ) : (
            <HiOutlineSearch className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          )}
        </button>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search destinations..."
          onFocus={() => setSearchOpen(true)}
          className={`flex-1 h-full bg-transparent text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 pl-2 pr-3 focus:outline-none transition-opacity duration-300
            ${searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        />
      </div>

      {/* Dropdown */}
      {searchOpen && query && (
        <SearchDropdown
          results={results}
          loading={loading}
          handleSelect={handleSelect} // <-- now works
        />
      )}
    </div>
  );
};

export default NavbarSearch;