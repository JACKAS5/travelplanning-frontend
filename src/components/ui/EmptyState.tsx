import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi2"; 

type Props = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode; // e.g., button to explore other pages
};

const EmptyState: React.FC<Props> = ({
  title = "No items found",
  description = "We couldn't find any results here.",
  icon,
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-4 text-center text-gray-500 dark:text-gray-400">
      <div className="text-6xl text-indigo-400">{icon || <HiOutlineInformationCircle />}</div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h2>
      <p className="text-sm">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};

export default EmptyState;
