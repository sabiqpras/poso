import React from "react";

const Buttwo = (props) => {
  return (
    <div>
      <div
        className={`${props.color} ${props.width} ${props.height} ${props.textColor} ${props.onDesktop} ${props.cursor}
       mt-4 py-2 px-5 rounded-lg font-secondary font-medium md:text-center`}
        onClick={props.onClick}
      >
        {props.content}
      </div>
    </div>
  );
};

export default Buttwo;
