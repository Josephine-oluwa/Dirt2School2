import { useState } from "react";
import { FaPenAlt } from "react-icons/fa";
import IMAGE from "../../../public/vite.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ProfileScreen = () => {
  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState(IMAGE);

  const onHandleImage = (e: any) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setAvatar(file);
    setImage(save);
  };

  const Schema = yup.object({
    fullName: yup.string().required(),
    schoolName: yup.string().required(),
    address: yup.string().required(),
    gender: yup.string().required(),
    phoneNumber: yup.string().required(),
    motivation: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async () => {
    console.log(Schema);
  });
  return (
    <>
      <div className="w-full  h-full flex items-center justify-center bg-transparent">
        <form
          className=" w-[70%] h-[500px] flex flex-col items-center"
          onSubmit={onHandleSubmit}
        >
          {/* Profile section */}
          <div className="w-full h-[120px] max-sm:mt-4 relative">
            <div className="flex items-center">
              {/*Upload image part */}
              <div className="mr-3 w-[110px] max-sm:w-[80px] h-[110px] max-sm:h-[80px] rounded-full border relative flex items-center justify-center shadow-md">
                <input type="file" id="image" hidden onChange={onHandleImage} />
                <label htmlFor="image">
                  <div className="absolute right-0 bottom-0 rounded-full border max-sm:px-1 max-sm:py-1 px-2 py-2 bg-green-500 hover:cursor-pointer hover:scale-110 duration-300 transition-all">
                    <FaPenAlt className="text-xs  text-white" />
                  </div>
                </label>
                <img
                  src={image ? image : avatar}
                  alt=""
                  className="w-full h-full rounded-full object-cover "
                />
              </div>
              <div>
                <div className="font-bold max-sm:text-[14px] text-[20px] font-[Evergreen] ">
                  Francis Uzoigwe
                </div>
                <div className="text-[12px] font-bold text-gray-400 max-sm:text-[10px]">
                  Ontario, Canada
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex items-center mt-4 justify-between max-md:flex-col">
              <div className="w-[40%] max-md:w-full ">
                <div className="h-[auto]  flex flex-col w-[100%]  border rounded-md overflow-hidden">
                  <div className="px-2">Full Name: </div>
                  <input
                    type="text"
                    className="w-full h-[35px] outline-none pl-3 "
                    {...register("fullName")}
                  />
                </div>
                {errors.fullName?.message && (
                  <div className="flex items-center justify-end text-[12px] font-bold text-red-500">
                    Input your full name
                  </div>
                )}
              </div>
              <div className="w-[40%] max-md:w-full max-md:mt-5">
                <div className="h-[auto]  flex flex-col w-[100%] border rounded-md relative overflow-hidden">
                  <div className="px-2">ShoolName: </div>
                  <input
                    type="text"
                    className="w-full h-[35px] outline-none pl-3 "
                    {...register("schoolName")}
                  />
                </div>
                {errors.schoolName?.message && (
                  <div className="flex items-center justify-end text-[12px] font-bold text-red-500">
                    Enter your school name
                  </div>
                )}
              </div>
            </div>
            <div className="w-full flex items-center mt-4 justify-between max-sm:flex-col max-md:mt-5">
              <div className="w-[40%] max-md:w-full max-md:mt-5">
                <div className="h-[auto]  flex flex-col w-[100%] border rounded-md relative overflow-hidden">
                  <div className="px-2">Address: </div>
                  <input
                    type="text"
                    className="w-full h-[35px] outline-none pl-3 "
                    {...register("address")}
                  />
                </div>
                {errors.address?.message && (
                  <div className="flex items-center justify-end text-[12px] font-bold text-red-500">
                    Enter your address
                  </div>
                )}
              </div>
              <div className="w-[40%] max-md:w-full max-md:mt-5">
                <div className="h-[auto]  flex flex-col w-[100%] border rounded-md relative overflow-hidden">
                  <div className="px-2">Phone Number: </div>
                  <input
                    type="text"
                    className="w-full h-[35px] outline-none pl-3 "
                    {...register("phoneNumber")}
                  />
                </div>
                {errors.phoneNumber?.message && (
                  <div className="flex items-center justify-end text-[12px] font-bold text-red-500">
                    Enter your phone number
                  </div>
                )}
              </div>
            </div>
            <div className="w-full flex items-center mt-4 justify-between max-md:flex-col">
              <div className="w-[40%] max-md:w-full max-md:mt-5">
                <div className="h-[auto]  flex flex-col w-[100%] border rounded-md relative overflow-hidden">
                  <div className="px-2">Gender: </div>
                  <input
                    type="text"
                    className="w-full h-[35px] outline-none pl-3 "
                    {...register("gender")}
                  />
                </div>
                {errors.gender?.message && (
                  <div className="flex items-center justify-end text-[12px] font-bold text-red-500">
                    Gender could be "Male" or "Female"
                  </div>
                )}
              </div>
              <div className="w-[40%] max-md:w-full max-md:mt-5">
                <div className="h-[auto]  flex flex-col w-[100%] border rounded-md relative overflow-hidden">
                  <div className="px-2">Motivation: </div>
                  <input
                    type="text"
                    className="w-full h-[35px] outline-none pl-3 text-[12px]"
                    {...register("motivation")}
                  />
                </div>
                {errors.motivation?.message && (
                  <div className="flex items-center justify-end text-[12px] font-bold text-red-500">
                    Not less than 20 characters
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="my-6">
            <button
              className="px-3 py-2 rounded-md bg-green-500 text-white hover:scale-110 transition-all duration-500 mb-3"
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </form>
        {/* <div className="w-full h-[2000px] bg-black">Hello</div> */}
      </div>
    </>
  );
};

export default ProfileScreen;
