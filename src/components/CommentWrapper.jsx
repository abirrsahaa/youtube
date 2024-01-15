import React from "react";
import CommentCard from "./CommentCard";

const CommentWrapper = ({ commentsData }) => {
  return commentsData.map((item, index) => (
    <div
      key={index}
      className="w-full h-24 border-2 border-black border-solid flex flex-col"
    >
      <CommentCard data={item} />
      <div className="w-full h-24 p-4 m-3 border-l-black flex flex-col">
        <CommentCard data={item.replies} />
      </div>
    </div>
  ));
};

export default CommentWrapper;
