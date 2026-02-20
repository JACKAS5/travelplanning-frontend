import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import React from "react";

type Props = {
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function FavoriteButton({ active = false, onClick }: Props) {
  return (
    <button
      className={`p-1 rounded-full transition ${
        active ? "text-red-500" : "text-white hover:text-red-500"
      }`}
      onClick={onClick}
    >
      {active ? <HiHeart className="w-5 h-5" /> : <HiOutlineHeart className="w-5 h-5" />}
    </button>
  );
}
