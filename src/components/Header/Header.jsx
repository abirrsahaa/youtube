import React, { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbVideoPlus } from "react-icons/tb";
import { HiMicrophone } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleSide } from "../../store/sideSlice";

import { setSearch } from "../../store/SearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setsearch] = useState("");
  const [searchdata, setsearchdata] = useState([]);
  console.log("SearchData: ", searchdata);
  console.log(search);

  const searchList = useSelector((store) => store.search.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchList[search]) {
        setsearchdata(searchList[search]);
      } else {
        const data = fetchData();
        setsearchdata(data);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
          search
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log("Search data: ", data);
      dispatch(setSearch({ [search]: data[1] }));

      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <>
      <div className=" w-full h-[10%] flex justify-between">
        <div className="w-[14%] h-full  flex justify-center items-center">
          <div className="w-[90%] h-[70%]  flex justify-center items-center">
            <div className="w-[25%] h-full  flex justify-center items-center">
              <div
                className="w-[80%] h-[80%] cursor-pointer"
                onClick={() => dispatch(toggleSide())}
              >
                <RxHamburgerMenu className="h-full w-full" />
              </div>
            </div>
            <div className="w-[75%] h-full  object-fit flex justify-center items-center overflow-hidden">
              <img
                alt="youtube"
                src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg"
              />
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full  flex items-center justify-center">
          <div className="h-full w-[90%]  flex justify-center items-center">
            <input
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              type="search"
              className="p-3  h-[70%] w-[80%] rounded-l-3xl shadow-lg "
              placeholder="Search...."
            />
            <div className=" flex justify-center items-center border-black h-[70%] w-[10%] rounded-r-3xl bg-gray-100 shadow-lg">
              <CiSearch className="h-[40%] w-[40%]" />
            </div>
          </div>
          <div className="h-12 w-12 rounded-full flex justify-center items-center bg-gray-100  ">
            <HiMicrophone className="h-[55%] w-[55%]" />
          </div>
        </div>
        <div className="w-[13%] h-full  flex">
          <div className="w-[33.33%] h-full  flex justify-center items-center">
            <div className="w-[50%] h-[50%]  ">
              <TbVideoPlus className="h-full w-full" />
            </div>
          </div>
          <div className="w-[33.33%] h-full  flex justify-center items-center">
            <div className="w-[50%] h-[50%] ">
              <IoIosNotificationsOutline className="h-full w-full" />
            </div>
          </div>
          <div className="w-[33.33%] h-full  flex justify-center items-center">
            <div className="w-[50%] h-[50%] rounded-full border-black border-2 border-solid"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
