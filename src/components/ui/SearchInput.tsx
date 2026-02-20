import { useState } from "react";
import { HiOutlineSearch, HiX } from "react-icons/hi";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className,
}: SearchInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`relative w-full max-w-md transition shadow-sm rounded-lg border ${
        focused ? "border-indigo-500 ring-1 ring-indigo-500" : "border-gray-300 dark:border-gray-700"
      } bg-white dark:bg-gray-900 ${className || ""}`}
    >
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <HiOutlineSearch className="w-5 h-5 text-gray-400 dark:text-gray-500" />
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full pl-10 pr-10 py-2 rounded-lg bg-transparent text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
      />

      {/* Clear Button */}
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition"
        >
          <HiX className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
