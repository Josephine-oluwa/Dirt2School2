import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sider = () => {
  return (
    <>
      <div className="w-[80px] h-[calc(100vh-60px)] flex flex-col  items-center">
        <div className="flex flex-col items-center fixed">
          <div className="mt-3">
            <FaUser className="text-2xl hover:scale-[1.2] duration-300 transition-all hover:cursor-pointer" />
          </div>
          <Link to="/">
            <div className="mt-8 font-bold">Hub</div>
          </Link>
          <Link to="/profile">
            <div className="mt-8 font-bold">Profile</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sider;
