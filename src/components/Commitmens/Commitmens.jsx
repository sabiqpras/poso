import React from "react";
import { commitments } from "../../constant/data";

const Commitmens = () => {
  return (
    <div
      className="bg-background text-black font-primary h-auto pt-32 md:pt-32 pb-24 md:px-11"
      id="commitments"
    >
      <div className="px-5 ">
        <h2 className="text-5xl font-bold">Our Commitments</h2>
        <p className="font-secondary  pt-10 text-justify md:text-left">
          To achieve our ambitions of providing useful and fair insurance to everyone, here are our
          commitments to you.
        </p>
        <div className="mt-10">
          <div className="bg-gradient-to-r from-red-300 to-pink-400 py-5 px-5 rounded-md text-white font-secondary font-medium w-full">
            {commitments.map((commit) => {
              return (
                <h3 className="text-4xl py-4 hover:text-black cursor-pointer" key={commit.index}>
                  {commit}
                  <hr className="mt-4" />
                </h3>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitmens;
