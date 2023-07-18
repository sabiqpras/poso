import React, { useState } from "react";

const Hamburger = (props) => {
  return (
    <div className="md:hidden">
      <button onClick={props.onClick}>
        <img src="../public/menu.svg" alt="menu" />
      </button>
    </div>
  );
};

export default Hamburger;
