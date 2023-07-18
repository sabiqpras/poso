import React from "react";
import NumCard from "../NumCard";
import { startings } from "../../constant/data";
import Button from "../Button";

const GetStarted = () => {
  return (
    <div className="bg-secondary h-auto pt-32 md:pt-48 pb-20 md:px-11 text-background" id="getStarted">
      <div className="px-5">
        <h2 className="font-primary text-5xl font-bold text-black">Poso takes care of everything.</h2>
        <p className="font-secondary pt-10 text-justify text-black">
          Sign up to Poso and our team will do the rest. We guarantee a seamless transition from your
          former contract to your new contract, without double coverage or risk interruption.
        </p>
        <div className="pt-10 flex flex-col xl:flex-row  gap-y-5 xl:gap-x-7">
          {startings.map((starts) => {
            return <NumCard key={starts.index} number={starts.number} detail={starts.detail} />;
          })}
        </div>
        <div className="pt-8 md:pt-20 flex flex-col items-center content-center">
          <Button detail="Get Covered" link="#" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
