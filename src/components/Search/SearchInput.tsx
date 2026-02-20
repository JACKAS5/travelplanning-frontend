import React from "react";
import { HiOutlineSearch, HiX } from "react-icons/hi";

interface Props {
  query: string;
  setQuery: (q: string) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<Props> = ({
  query,
  setQuery,
  searchOpen,
  setSearchOpen,
  inputRef,
  onKeyDown,
}) => {
  return (
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
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSearchOpen(true);
        }}
        onFocus={() => setSearchOpen(true)}
        onKeyDown={onKeyDown}
        placeholder="Search destinations..."
        className={`flex-1 h-full bg-transparent text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 pl-2 pr-3 focus:outline-none transition-opacity duration-300
          ${searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
    </div>
  );
};

export default SearchInput;