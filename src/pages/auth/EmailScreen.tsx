import { SiMinutemailer } from "react-icons/si";

const EmailScreen = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-green-600">
        <div className="flex-col flex items-center w-[90%]">
          <div>
            <SiMinutemailer className="text-9xl text-white max-sm:text-7xl" />
          </div>
          <div className="text-center font-bold max-sm:text-[13px] text-white ">
            A mail has been sent to your email, please check and get verified by
            clicking on the link provided in the mail.
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailScreen;
