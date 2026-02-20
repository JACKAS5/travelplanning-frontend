import React from "react";
import type { Destination } from "../../services/types";
import SearchDropdownItem from "./SearchDropdownItem";

interface Props {
  results: Destination[];
  loading: boolean;
  handleSelect: (id: number) => void;
}

const SearchDropdown: React.FC<Props> = ({ results, loading, handleSelect }) => {
  return (
    <div
      className="absolute top-full mt-2 left-0 w-full md:w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                 shadow-lg rounded-lg z-50 max-h-80 overflow-y-auto"
    >
      {loading && (
        <div className="px-4 py-2 text-gray-500 dark:text-gray-400">Loading...</div>
      )}

      {!loading && results.length === 0 && (
        <div className="px-4 py-2 text-gray-500 dark:text-gray-400">No results found</div>
      )}

      {!loading &&
        results.map((dest) => (
          <SearchDropdownItem
            key={dest.id}
            dest={dest}
            active={false} // you can implement hover highlight in item if needed
            onClick={() => handleSelect(dest.id)}
          />
        ))}
    </div>
  );
};

export default SearchDropdown;