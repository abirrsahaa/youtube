import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  console.table(data);
  const { channelTitle, title } = data?.snippet;
  const { viewCount } = data?.statistics;
  const thumbnails = data?.snippet.thumbnails.high.url;
  const side = useSelector((store) => store.side.open);
  const { id } = data;
  const navigate = useNavigate();
  // console.table(thumbnails, channelTitle, title, viewCount);
  return side ? (
    <div
      onClick={() => navigate("/" + id)}
      className="w-[32%] h-[45%] cursor-pointer  flex flex-col justify-center gap-2 shadow-2xl rounded-xl"
    >
      <div className="w-full rounded-t-lg h-[75%] object-fit overflow-hidden">
        <img
          src={thumbnails}
          alt="photo"
          className="h-full w-full rounded-lg"
        />
      </div>
      <div className="p-1 w-full h-[23%]  flex gap-1 justify-between overflow-hidden">
        <div className="w-full h-full  flex flex-col gap-1 overflow-hidden">
          <div className="w-full h-[45%] overflow-hidden">{title}</div>
          <div className="w-full h-[54%]  flex gap-1">
            <div>{channelTitle}</div>
            <div>.{viewCount} views</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-[22%] h-[35%]  flex flex-col justify-center gap-2 shadow-2xl rounded-xl">
      <div className="w-full rounded-t-lg h-[75%] object-fit overflow-hidden">
        <img
          src={thumbnails}
          alt="photo"
          className="h-full w-full rounded-lg"
        />
      </div>
      <div className="p-1 w-full h-[23%]  flex gap-1 justify-between overflow-hidden">
        <div className="w-full h-full  flex flex-col gap-1 overflow-hidden">
          <div className="w-full h-[45%] overflow-hidden">{title}</div>
          <div className="w-full h-[54%]  flex gap-1">
            <div>{channelTitle}</div>
            <div>.{viewCount} views</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
