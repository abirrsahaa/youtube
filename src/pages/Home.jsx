import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import { useSelector } from "react-redux";

const Home = () => {
  const side = useSelector((store) => store.side.open);
  console.log("side", side);
  return (
    <div className="w-full h-full flex justify-between items-center">
      {side && <Sidebar />}
      <Main />
    </div>
  );
};

export default Home;
