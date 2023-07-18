import React from "react";

const Card = (props) => {
  return (
    <div className="">
      <img src={props.image} alt={props.title} className={props.style} />
    </div>
  );
};

export default Card;
