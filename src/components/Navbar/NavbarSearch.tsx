import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineSearch, HiX, HiLocationMarker } from "react-icons/hi";
import { fetchDestinations } from "../../services/api/api";
import type { Destination } from "../../services/types";

const NavbarSearch: React.FC = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1); // For keyboard nav

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
        setActiveIndex(-1);
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
    const handler = setTimeout(async () => {
      try {
        const destinations = await fetchDestinations();
        const filtered = destinations.filter((d) =>
          d.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  // Handle selection
  const handleSelect = (id: number) => {
    navigate(`/destination/${id}`);
    setQuery("");
    setSearchOpen(false);
    setActiveIndex(-1);
  };

  // Handle Enter / Keyboard
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!searchOpen || results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < results.length) {
        handleSelect(results[activeIndex].id);
      } else if (query.trim()) {
        navigate(`/search?query=${encodeURIComponent(query)}`);
        setQuery("");
        setSearchOpen(false);
      }
    } else if (e.key === "Escape") {
      setSearchOpen(false);
      setActiveIndex(-1);
    }
  };

  return (
    <div className="relative flex items-center" ref={dropdownRef}>
      {/* Search Box */}
      <div
        className={`flex items-center bg-gray-100 dark:bg-gray-800 rounded-full transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-500
          ${searchOpen ? "w-64 md:w-72 px-3" : "w-10 px-0"} h-10 overflow-hidden`}
      >
        {/* Search / Close button */}
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

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setSearchOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search destinations..."
          className={`flex-1 h-full bg-transparent text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 pl-2 pr-3 focus:outline-none transition-opacity duration-300
            ${searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        />
      </div>

      {/* Dropdown */}
      {searchOpen && query && (
        <div className="absolute top-14 left-0 z-[1000] w-64 md:w-72 bg-white dark:bg-gray-800 shadow-lg rounded-md max-h-64 overflow-y-auto border border-gray-200 dark:border-gray-700">
          {loading && (
            <div className="px-4 py-2 text-gray-500 dark:text-gray-400">Loading...</div>
          )}

          {!loading && results.length === 0 && (
            <div className="px-4 py-2 text-gray-500 dark:text-gray-400">
              No results found
            </div>
          )}

          {!loading &&
            results.map((dest, index) => (
              <div
                key={dest.id}
                onClick={() => handleSelect(dest.id)}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer transition-colors
                  ${index === activeIndex ? "bg-indigo-100 dark:bg-indigo-700" : "hover:bg-indigo-100 dark:hover:bg-indigo-700"}
                `}
              >
                <HiLocationMarker className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-medium truncate">{dest.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300 truncate">{dest.location}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;