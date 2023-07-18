import React from "react";
import FooterDetails from "../FooterDetails";
import { findUs, footerDatas } from "../../constant/data";
import Button from "../Button";

const div = () => {
  return (
    <div className="pt-10 bg-black text-white">
      <div className="font-primary md:px-16 px-5">
        <a className="text-3xl md:text-3xl font-bold" href="#">
          Poso.org
        </a>
        <div className="grid grid-cols-2 md:grid-cols-3 pt-10 gap-10 pb-11">
          <div className="col-span-2 md:col-span-1 ">
            <FooterDetails title={findUs.title} />
            {findUs.details.map((item) => {
              return <FooterDetails key={item.index} detail={item} />;
            })}
          </div>
          <div className="font-secondary font-thin col-span-2 md:col-span-1 ">
            <p>Poso respects high social and environmental standards and is committed to progress.</p>
          </div>
          {footerDatas.map((data) => {
            return (
              <div key={data.index}>
                <FooterDetails title={data.title} />
                {data.details.map((item) => {
                  return (
                    <FooterDetails
                      key={item.index}
                      detail={item}
                      addStyle="hover:text-red-300 cursor-pointer"
                    />
                  );
                })}
              </div>
            );
          })}
          <div className="col-span-2 m-auto md:m-0">
            <Button detail="Get the app" addStyle="border cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="pt-2 pb-5 md:pb-2 px-5 md:px-16 bg-background text-black">
        <p className="font-secondary">
          Made with{" "}
          <span className="hover:text-red-300">
            <a href="https://www.github.com/sabiqpras/poso" rel="noreferrer" target="_blank">
              ♥
            </a>
          </span>{" "}
          by{" "}
          <span className="font-bold hover:text-red-300">
            <a
              href="https://www.linkedin.com/in/muhammad-sabiq-umar-prasetyo/"
              rel="noreferrer"
              target="_blank"
            >
              Sabiq Prasetyo
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default div;
