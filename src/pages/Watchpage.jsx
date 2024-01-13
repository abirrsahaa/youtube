import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api_key from "../components/main/constant";

const Watchpage = () => {
  const { id } = useParams();
  useEffect(() => {
    const videoInfo = async () => {
      const response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
          id +
          "&key=" +
          api_key
      );
      const data = await response.json();
      console.log("video info : ", data);
      const { channelId } = data.items[0].snippet;
      console.log(channelId);

      const channelResponse = await fetch(
        "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
          channelId +
          "&key=" +
          api_key
      );

      const channel_data = await channelResponse.json();
      console.log("channel data :", channel_data);
    };
    videoInfo();
  }, []);

  return (
    <div className="w-full h-full border-black border-2 border-solid flex justify-center items-center gap-2">
      <div className="w-[68%] h-full  mt-2 ">
        <div className="w-full   h-[75%] rounded-lg">
          <iframe
            className="w-full h-full rounded-lg"
            src={"https://www.youtube.com/embed/" + id + "?si=lBmvGdlkSSnVLztj"}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="w-[28%] h-full border-black border-2 border-solid flex"></div>
    </div>
  );
};

export default Watchpage;
