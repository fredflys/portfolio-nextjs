import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ imgUrl, title, desc, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        className="h-40 mid:h-72 rounded-t-xl relative group overflow-hidden"
      >
        {/* overlay for project links */}
        <div
          className="overlay hidden absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500
         items-center justify-center"
        >
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 border-[#ADB7BE] hover:border-white rounded-full relative mr-4"
          >
            <CodeBracketIcon
              className="h-10 w-10 text-[#ADB7BE]  cursor-pointer
            hover:white absolute top-1/2 left-1/2 transform -translate-x-1/2
            -translate-y-1/2 transition-all duration-500"
            />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 border-[#ADB7BE] hover:border-white rounded-full relative"
          >
            <EyeIcon
              className="h-10 w-10 text-[#ADB7BE]  cursor-pointer
            hover:white absolute top-1/2 left-1/2 transform -translate-x-1/2
            -translate-y-1/2 transition-all duration-500"
            />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
