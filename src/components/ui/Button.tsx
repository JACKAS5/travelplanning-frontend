import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200";

  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses =
        "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600";
      break;
    case "outline":
      variantClasses =
        "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-indigo-500 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700";
      break;
    case "ghost":
      variantClasses =
        "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-indigo-500 dark:text-gray-200 dark:hover:bg-gray-800";
      break;
  }

  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
