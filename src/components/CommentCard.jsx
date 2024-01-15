const CommentCard = ({ data }) => {
  return (
    <div className="border-2 border-black border-solid w-full h-16 flex justify-between items-center gap-2">
      <div className=" ml-4 w-12 h-12 border-2 border-black border-solid rounded-full"></div>
      <div className="w-[90%] h-full border-2 border-black border-solid flex flex-col justify-center items-center ">
        <div className="border-2 border-solid border-black w-full h-[45%] text-sm font-semibold">
          {data.name}
        </div>
        <div className="border-2 border-solid border-black w-full h-[55%]">
          {data.text}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
