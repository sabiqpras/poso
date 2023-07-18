import React from "react";

const Close = (props) => {
  return (
    <div className="md:hidden">
      <button onClick={props.onClick}>
        <img src="../public/x.svg" width="30px" alt="menu" />
      </button>
    </div>
  );
};

export default Close;
