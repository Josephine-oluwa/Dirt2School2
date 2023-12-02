import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Bags = () => {
  return (
    <div className="h-[200px] max-sm:h-[100px] my-1 rounded-lg border flex -z-10 flex-col items-center justify-center">
      <div className="text-[50px] font-bold max-sm:text-[25px]">0</div>
      <div className="text-[14px] font-bold text-center max-sm:text-[8px] px-1">
        You've brought 0 bags of pet bottles
      </div>
    </div>
  );
};

const History = () => {
  return (
    <div className="h-[200px] max-sm:h-[100px] my-1 rounded-lg border -z-10 flex flex-col items-center justify-center">
      <div className="text-[16px] font-bold max-sm:text-[10px]"></div>
    </div>
  );
};

const Balance = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const onVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className="h-[200px] max-sm:h-[100px] my-1 rounded-lg border flex flex-col items-center justify-center ">
      <div className="font-bold text-[25px] max-sm:text-[15px] flex relative">
        ₦
        <span className="ml-1">
          {visible ? <div>2,000</div> : <div>*****</div>}
        </span>
      </div>
      <div
        className="relative"
        onClick={() => {
          onVisible();
        }}
      >
        {!visible ? (
          <IoMdEye className="text-3xl hover:cursor-pointer max-sm:text-xl" />
        ) : (
          <IoMdEyeOff className="text-3xl hover:cursor-pointer max-sm:text-xl" />
        )}
      </div>
    </div>
  );
};

const HubScreen = () => {
  return (
    <div className="grid md:grid-cols-3 gap-1 max-sm:gap-3   sm:grid-cols-2 mx-1 mt-3 max-sm:grid-cols-3">
      <Balance />
      <Bags />
      <History />
    </div>
  );
};

export default HubScreen;
