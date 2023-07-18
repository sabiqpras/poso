import React from "react";

const Button = (props) => {
  return (
    <div className="font-primary">
      <a
        className={`rounded-full bg-black hover:bg-red-300 px-5 py-2 text-background ${props.addStyle}`}
        href={props.link}
      >
        {props.detail}
      </a>
    </div>
  );
};

export default Button;
