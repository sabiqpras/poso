import React from "react";
import { advisors } from "../../constant/data";
import Button from "../Button";

const Help = () => {
  return (
    <div className="bg-primary  h-auto mt-5 pt-32 md:pt-32 pb-20 md:px-11 text-background" id="help">
      <div className="px-5">
        <h2 className="font-primary text-5xl font-bold text-center">We&apos;re here for you </h2>
        <p className="font-secondary pt-10 text-justify md:text-center">
          Do you have a question about your coverage on your contract? Our advisors are available on chat
          or by email from 8am to 9pm on weeksdays and from 9am to 8pm on weekends. Do you have a problem
          at home? Report it on the Poso application and a dedicated manager will take over to find you
          the soluion you need.
        </p>
        <div className="pt-10 flex flex-col md:flex-row content-center items-center md:justify-around gap-y-10 z-0">
          {advisors.map((adv) => {
            return (
              <div key={adv.index} className=" relative">
                <img
                  src={adv.photo}
                  alt={adv.name}
                  className="h-40 w-40 rounded-full object-cover object-center overflow-hidden  z-10"
                />
                <div className="absolute h-40 w-40 rounded-full z-20 top-0 bg-black opacity-0 hover:opacity-50 cursor-default">
                  <div className="">
                    <p className="absolute left-16 top-16 text-center">{adv.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col content-center items-center pt-10 md:pt-24">
          <Button detail="I have question" link="#" />
        </div>
      </div>
    </div>
  );
};

export default Help;
