import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";

const VerifiedScreen = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-green-600">
        <div className="flex-col flex items-center w-[90%]">
          <div>
            <MdOutlineMarkEmailRead className="text-9xl text-white max-sm:text-7xl" />
          </div>
          <div className="text-center font-bold max-sm:text-[14px] text-white">
            Your account has been verified successfully, please proceed to login
          </div>
          <Link to="/signin">
            <div className="mt-3  font-bold px-4 py-[6px] rounded-full text-green-700 bg-white max-sm:text-[13px] text-[16px] ">
              Signin
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VerifiedScreen;
