import { FaHeart } from "react-icons/fa";

export const LikeValue = ({ likes }) => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <FaHeart className="text-pink-500 group-hover:scale-125 transition-transform duration-300" />
      <span className="group-hover:text-pink-400 transition">{likes}</span>
    </div>
  );
};