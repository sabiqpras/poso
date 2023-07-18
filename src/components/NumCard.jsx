import React from "react";

const NumCard = (props) => {
  return (
    <div className="font-secondary">
      <div className="bg-gradient-to-r  from-red-300 to-pink-400  rounded-lg w-full xl:w-72  h-28 flex items-center content-center gap-9 px-5 ">
        <div className="bg-white w-16 h-16 flex items-center content-center justify-center rounded-full p-7 ">
          <p className="text-red-300 font-bold text-2xl">{props.number}</p>
        </div>
        <div className="">
          <p>{props.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default NumCard;
