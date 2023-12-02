import avatar from "../../../public/vite.svg";
import { FaSortDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { LiaSchoolSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import DropDown from "./DropDown";
const MainHeader = () => {
  const user = useSelector((state: any) => state.user);
  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };

  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <>
      {scroll ? (
        <div className="w-full h-[60px] max-sm:h-[50px] flex justify-center items-center bg-white text-black ">
          <div className="w-full h-[60px] justify-between flex transition-all duration-300 px-7 items-center fixed bg-white z-50 ">
            <div className="w-[45px] h-[45px] max-sm:w-[40px] max-sm:h-[40px]  rounded-full border flex items-center justify-center border-green-500 ">
              <LiaSchoolSolid className="text-4xl text-green-500 max-sm:text[2xl hover:text-gray-100 duration-300 transition-all cursor-pointer" />
            </div>
            <div className="flex items-center">
              <div className="w-[45px] h-[45px] bg-white overflow-hidden rounded-full border max-sm:hidden">
                <img
                  src={avatar}
                  className="w-full h-full border-[50%] object-cover"
                />
              </div>
              <div
                className="flex items-center justify-center relative cursor-pointer"
                onClick={() => {
                  onShow();
                }}
              >
                <div className="mr-2 max-sm:hidden max-sm:mr-1 font-bold text-green-500 ml-3">
                  {user.studentName ? user.studentName : user.email}
                  Onwuka Austin
                </div>
                <div className="text-green-500 max-sm:hidden">
                  {show ? (
                    <FaSortDown className="rotate-180 transition-all duration-300" />
                  ) : (
                    <FaSortDown className="rotate-[-0] transition-all duration-300" />
                  )}
                </div>
                <div className="hidden max-sm:block">
                  <GiHamburgerMenu className="text-2xl hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 text-green-500" />
                </div>
                {show ? (
                  <div className="absolute top-11 right-4">
                    <DropDown />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[60px] max-sm:h-[50px] flex justify-center items-center bg-green-500 text-black ">
          <div className="w-full h-[60px] justify-between flex transition-all duration-300 px-7 items-center fixed bg-green-500 z-50">
            <div className="w-[45px] h-[45px] max-sm:w-[40px] max-sm:h-[40px]  rounded-full border flex items-center justify-center border-white ">
              <LiaSchoolSolid className="text-4xl text-white max-sm:text[2xl hover:text-gray-100 duration-300 transition-all cursor-pointer" />
            </div>
            <div className="flex items-center">
              <div className="w-[45px] h-[45px] bg-white overflow-hidden rounded-full border max-sm:hidden">
                <img
                  src={avatar}
                  className="w-full h-full border-[50%] object-cover"
                />
              </div>
              <div
                className="flex items-center justify-center relative cursor-pointer"
                onClick={() => {
                  onShow();
                }}
              >
                <div className="mr-2 max-sm:hidden max-sm:mr-1 font-bold text-white ml-3">
                  {user.studentName ? user.studentName : user.email}
                  Onwuka Austin
                </div>
                <div className="text-white max-sm:hidden">
                  {show ? (
                    <FaSortDown className="rotate-180 transition-all duration-300" />
                  ) : (
                    <FaSortDown className="rotate-[-0] transition-all duration-300" />
                  )}
                </div>
                <div className="hidden max-sm:block">
                  <GiHamburgerMenu className="text-2xl hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 text-white" />
                </div>
                {show ? (
                  <div className="absolute top-11 right-4">
                    <DropDown />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainHeader;
