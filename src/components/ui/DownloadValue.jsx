import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloadValue = ({ downloads }) => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <FaDownload className=" group-hover:scale-125 transition-transform duration-300" />
      <span className=" transition">{downloads}</span>
    </div>
  );
};

export default DownloadValue;
