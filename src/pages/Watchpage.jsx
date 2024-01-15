import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api_key from "../components/main/constant";

import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiShareFatLight } from "react-icons/pi";
import { RxDotsHorizontal } from "react-icons/rx";
import { BiSolidBellRing } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import CommentWrapper from "../components/CommentWrapper";

const Watchpage = () => {
  const { id } = useParams();
  const [videoInfo, setvideoInfo] = useState({});
  const [channelInfo, setchannelInfo] = useState({});
  // console.log("length", channelInfo.length);
  // channel info

  const commentsData = [
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Akshay Saini",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Akshay Saini",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Akshay Saini",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];

  // this is the comments data that i will be using to create the n level nesting comments section in the watch page

  // first lets start with building the main comments for that i need a comment card component
  // the comment card component will be the one to be rendered for each comment in the comments data array by mapping
  // we will be using a comment component to pass the data which will just be providing the container or wrapper type function

  // video info

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
      setvideoInfo(data.items[0]);
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
      setchannelInfo(channel_data.items[0]);
    };
    videoInfo();
  }, []);

  return (
    <div className="w-full h-full  flex justify-center items-center gap-2 overflow-y-scroll">
      <div className="w-[68%] h-full  mt-2 border-2 border-black border-solid overflow-y-scroll flex flex-col items-center justify-center gap-2">
        <div className="w-full   h-[72%] rounded-lg">
          <iframe
            className="w-full h-full rounded-lg"
            src={"https://www.youtube.com/embed/" + id + "?si=lBmvGdlkSSnVLztj"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        {videoInfo && channelInfo && (
          <div className=" w-full h-[12%] flex flex-col">
            <div className=" w-full h-[50%] text-xl font-black">
              {videoInfo?.snippet?.localized.title}
            </div>
            <div className=" w-full h-[50%] flex justify-between">
              <div className=" h-full w-[35%] flex gap-1">
                <div className=" w-[15%] rounded-full object-cover flex justify-center items-center shadow-2xl">
                  <img
                    alt="photo"
                    src={channelInfo?.snippet?.thumbnails?.high?.url}
                    className="h-full w-full rounded-full"
                  />
                </div>
                <div className=" h-full w-[42%] shadow-2xl flex items-center justify-center flex-col">
                  <div className=" w-full h-[60%] font-semibold flex justify-center items-center">
                    {videoInfo?.snippet?.channelTitle}
                  </div>
                  <div className=" w-full h-[40%] text-gray-500 flex justify-center items-center ">
                    {channelInfo?.statistics?.subscriberCount}
                  </div>
                </div>
                <div className=" h-full w-[42%] rounded-3xl flex bg-gray-100 shadow-xl ">
                  <div className=" h-full w-[25%] flex justify-center items-center">
                    <BiSolidBellRing className="h-[70%] w-[70%]" />
                  </div>
                  <div className=" h-full w-[50%] text-sm font-semibold flex justify-center items-center">
                    Subscribed
                  </div>
                  <div className=" h-full w-[25%] flex justify-center items-center">
                    <MdKeyboardArrowDown className="h-[70%] w-[70%]" />
                  </div>
                </div>
              </div>
              <div className=" h-full w-[45%] flex justify-between">
                <div className="bg-gray-100 shadow-xl h-full w-[30%] rounded-3xl flex items-center">
                  <div className="border-r-2 border-black border-solid h-[80%] w-[65%] flex">
                    <div className=" h-full w-[40%] flex justify-center items-center">
                      <BiLike className="h-[80%] w-[80%]" />
                    </div>
                    <div className=" h-full w-[60%] flex justify-center items-center font-semibold">
                      {videoInfo?.statistics?.likeCount}
                    </div>
                  </div>
                  <div className=" h-[80%] w-[35%]">
                    <div className=" h-full w-full flex justify-center items-center">
                      <BiDislike className="h-[80%] w-[80%]" />
                    </div>
                  </div>
                </div>
                <div className=" h-full w-[20%] rounded-3xl flex bg-gray-100 shadow-xl">
                  <div className=" h-full w-[40%] flex justify-center items-center">
                    <PiShareFatLight className="h-[70%] w-[70%]" />
                  </div>
                  <div className=" h-full w-[60%] flex justify-center items-center font-semibold">
                    Share
                  </div>
                </div>
                <div className=" h-full w-[30%] rounded-3xl shadow-xl bg-gray-100  flex">
                  <div className=" h-full w-[30%] flex justify-center items-center">
                    <LiaDownloadSolid className="h-[70%] w-[70%]" />
                  </div>
                  <div className=" h-full w-[70%] flex justify-center items-center font-semibold">
                    Download
                  </div>
                </div>
                <div className=" h-full w-[10%] rounded-full flex justify-center items-center bg-gray-100 shadow-xl">
                  <RxDotsHorizontal className="h-[70%] w-[70%]" />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="border-2  border-black border-solid mt-4 w-[90%]">
          <CommentWrapper commentsData={commentsData} />
        </div>
      </div>
      <div className="w-[28%] h-full border-black border-2 border-solid flex"></div>
    </div>
  );
};

export default Watchpage;
