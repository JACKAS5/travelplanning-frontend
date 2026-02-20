import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Card: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
