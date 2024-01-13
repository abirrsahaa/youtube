import React, { useEffect, useState } from "react";
import api_key from "./constant";
import Card from "./Card";
import { useSelector } from "react-redux";

const Main = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const [datas, setdatas] = useState([]);

  async function getVideos() {
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=" +
        api_key
    );
    const data = await response.json();
    // console.log(data);
    setdatas(data.items);
  }
  const side = useSelector((store) => store.side.open);
  return side ? (
    <div className="w-[88%] h-full p-2 ">
      <div className="p-2 mx-auto h-[5%] border-2 border-black border-solid w-[97%]"></div>
      <div className="p-2 w-full h-full flex flex-wrap gap-4 justify-center items-center">
        {datas.length > 0 &&
          datas.map((item, index) => <Card key={index} data={item} />)}
      </div>
    </div>
  ) : (
    <div className="w-full h-full p-2">
      <div className="h-[5%]  mx-auto border-2 border-black border-solid w-[93%]"></div>
      <div className="pt-2 px-4 w-full h-full flex flex-wrap gap-9 justify-center items-center">
        {datas.length > 0 &&
          datas.map((item, index) => <Card key={index} data={item} />)}
      </div>
    </div>
  );
};

export default Main;
