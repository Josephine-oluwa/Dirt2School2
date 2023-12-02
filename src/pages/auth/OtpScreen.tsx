import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { verifyApi } from "../../apis/authApi";

const Otp = () => {
  const { token }:any = useParams();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (token) {
      verifyApi(token);
    }
  }, []);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-slate-600">
      <div className="w-[300px] h-[300px] shadow-md rounded-md bg-white flex items-center justify-center flex-col p-3">
        <OtpInput
          inputStyle={{
            border: "1px solid",
            width: "50px",
            height: "45px",
            outline: "none",
            borderRadius: "3px",
            fontSize: "18px",
            margin: "4px",
          }}
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />

        <button
          className="w-full h-[40px] hover:cursor-pointer transition-all duration-300 bg-black text-white rounded-md mb-[15px] mt-[20px] text-[17px]"
          onClick={() => {
            verifyApi(token).then((res: any) => {
                console.log(res)
              if (res) {
                navigate("/verified");
              } else {
                navigate("/");
              }
            });
          }}
        >
          enter
        </button>
      </div>
    </div>
  );
};

export default Otp;
