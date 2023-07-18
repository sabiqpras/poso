import React, { useState } from "react";
import List from "./list";
import Button from "../Button";
import Hamburger from "./Hamburger";
import Close from "./Close";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const sideBar = `${
    toggle ? "" : "translate-x-full"
  } transition top-0 fixed z-40 bg-black opacity-90 text-white  h-full w-full text-4xl px-2 overflow-hidden md:hidden`;

  return (
    <div className=" w-full overflow-hidden">
      <div className={sideBar} onClick={handleToggle}>
        <div className="opacity-100 ">
          <div className="flex justify-end mt-5 px-2">
            <Close onClick={handleToggle} />
          </div>

          <ul className="font-primary text-center flex justify-center items-center flex-col gap-y-10 mt-36 drop-shadow-2xl">
            <List onClick={handleToggle} holder="Products" link="#products" />
            <List onClick={handleToggle} holder="Commitments" link="#commitments" />
            <List onClick={handleToggle} holder="Help" link="#help" />
            <List onClick={handleToggle} holder="Testimonials" link="#" />
            <List onClick={handleToggle} holder="Get Started" link="#getStarted" />
          </ul>
        </div>
      </div>

      <div className="fixed z-30 top-0 w-full drop-shadow-md flex items-center content-center justify-between px-5 md:px-16 font-primary py-6 text-black bg-background">
        <a className="text-3xl md:text-3xl font-bold" href="#">
          Poso.org
        </a>
        <ul className="hidden md:flex gap-11 py-4 justify-center font-normal">
          <List holder="Products" link="#products" />
          <List holder="Commitments" link="#commitments" />
          <List holder="Help" link="#help" />
          <List holder="Testimonials" link="#" />
        </ul>
        <Hamburger onClick={handleToggle} />
        <div className="hidden md:flex">
          <Button detail="Get Started" link="#getStarted" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
