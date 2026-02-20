import React from "react";
import type { Destination } from "../../services/types";
import { HiLocationMarker } from "react-icons/hi";

interface Props {
  dest: Destination;
  active: boolean;
  onClick: () => void;
}

const SearchDropdownItem: React.FC<Props> = ({ dest, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition-colors
        ${active ? "bg-indigo-100 dark:bg-indigo-700" : "hover:bg-indigo-100 dark:hover:bg-indigo-700"}
      `}
    >
      {dest.images?.[0] ? (
        <img
          src={dest.images[0]}
          alt={dest.name}
          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
        />
      ) : (
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <HiLocationMarker className="w-5 h-5 text-gray-500 dark:text-gray-300" />
        </div>
      )}

      <div className="flex-1 overflow-hidden">
        <p className="text-sm font-medium truncate">{dest.name}</p>
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-300">
          {dest.rating ? `⭐ ${dest.rating}` : dest.location}
        </div>
      </div>
    </div>
  );
};

export default SearchDropdownItem;