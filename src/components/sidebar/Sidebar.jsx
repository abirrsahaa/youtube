import React from "react";
import { SiYoutubeshorts } from "react-icons/si";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";

const icons = [
  {
    title: "Home",
    photo: <GoHomeFill className="w-[80%] h-[80%]" />,
  },
  {
    title: "Shorts",
    photo: <SiYoutubeshorts className="w-[80%] h-[80%]" />,
  },
  {
    title: "Subscriptions",
    photo: <MdOutlineSubscriptions className="w-[80%] h-[80%]" />,
  },
  {
    title: "Library",
    photo: <MdOutlineVideoLibrary className="w-[80%] h-[80%]" />,
  },
  {
    title: "History",
    photo: <GoHistory className="w-[80%] h-[80%]" />,
  },
  {
    title: "Your Videos",
    photo: <GoVideo className="w-[80%] h-[80%]" />,
  },
  {
    title: "Watch Later",
    photo: <MdOutlineWatchLater className="w-[80%] h-[80%]" />,
  },
  {
    title: "Liked Videos",
    photo: <BiLike className="w-[80%] h-[80%]" />,
  },
];

const Sidebar = () => {
  return (
    <div className="w-[11%] h-full  ">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="m-2  w-[90%] h-[5%]  rounded-lg flex justify-center items-center gap-1 hover:bg-gray-100"
        >
          <div className=" h-[90%] w-[20%] flex justify-center items-center">
            {icon.photo}
          </div>
          <div className=" h-[90%] w-[70%] text-md pl-1">{icon.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
