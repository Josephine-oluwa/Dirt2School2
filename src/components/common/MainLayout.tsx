import { Outlet } from "react-router-dom";
import MainHeader from "../static/MainHeader";
import Sider from "../static/Sider";
// import Footer from "../static/Footer";

const MainLayout = () => {
  return (
    <div className="w-full h-auto flex-col ">
      <MainHeader />
      <div className="flex w-full h-auto">
        <div className="w-[80px] max-sm:hidden mr-2 ">
          <Sider />
        </div>
        <div
          className="w-full h-auto 
        "
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
