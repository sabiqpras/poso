import React, { useState } from "react";
import Card from "../Card";
import Buttwo from "../Buttwo";
import { mainContent } from "../../constant/data";

const Main = () => {
  const [product, setProduct] = useState("/main-1.jpg");

  return (
    <div
      className="bg-black text-white font-primary h-auto pt-28 md:pt-32 pb-12 md:pb-24 md:px-11"
      id="products"
    >
      <div className="px-5 font-semibold">
        <h2 className="text-5xl">Products</h2>
        <Card
          title="building"
          image={product}
          style="w-full h-96 md:h-80 rounded-2xl mt-5 object-cover md:object-[center_left]"
        />
        <div className="md:flex md:justify-between">
          {mainContent.map((title) => {
            return (
              <Buttwo
                key={title.index}
                color="bg-white hover:bg-red-300"
                height="h-10"
                width="w-full  md:w-36 lg:w-52 xl:w-72"
                content={title.name}
                textColor="text-black"
                cursor="cursor-pointer"
                onClick={() => {
                  setProduct(title.image);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
