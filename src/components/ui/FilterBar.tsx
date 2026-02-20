import React from "react";

type FilterBarProps = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition 
            ${selected === cat 
              ? "bg-indigo-600 text-white shadow-md" 
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
