import { BallTriangle } from "react-loader-spinner";
const LoadingScreen = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backdropFilter: "blur(4px)",
        background: "rgba(255, 255, 255, 0.15)",
      }}
      className="fixed w-full h-[100vh] z-50 top-0 left-0 items-center flex justify-center flex-col"
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass=""
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default LoadingScreen;
