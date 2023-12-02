import React from "react";
import image from "../../assets/bottle.jpg";

interface iUser {
  name?: string;
  email?: string;
  price?: string;
}

const Component: React.FC<iUser> = ({ name, email, price }) => {
  return (
    <>
      <div className="flex items-center justify-center hover:cursor-pointer">
        <div className="flex h-[180px] border w-[99%] relative flex-col items-center justify-center rounded-lg bg-green-500">
          <div className="w-[80px] h-[80px] rounded-full border ">
            <img
              src={image}
              alt="Image"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="font-bold text-white max-sm:text-[13px]">{name}</div>
          <div className="text-[12px] font-bold max-sm:text-[10px]">
            {email}
          </div>
          <div className="font-bold text-white">₦{price}</div>
        </div>
      </div>
    </>
  );
};

const ViewAllScreen = () => {
  return (
    <div className="grid grid-cols-3 gap-2 xl:grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1 ">
      <Component
        name="Kossyrisochukwu"
        price="2,000"
        email="kossyuzoigwe@gmail.com"
      />
      <Component name="Francis" price="1,000" email="francisuzoigwe.28@gmail" />
      <Component name="Amaka" price="3,000" email="amakajudith@gmail.com" />
    </div>
  );
};

export default ViewAllScreen;
