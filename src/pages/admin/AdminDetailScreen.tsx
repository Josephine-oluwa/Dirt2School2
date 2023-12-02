import vite from "../../../public/vite.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const AdminDetailScreen = () => {
  const Schema = yup.object({
    amount: yup.string().required(),
    number: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onHandleSubmit = handleSubmit(async () => {
    console.log(Schema);
  });
  return (
    <>
      <div>
        <div
          className="w-full h-screen bg-green-500 flex items-center justify-center  text-white "
          onSubmit={onHandleSubmit}
        >
          <form className="flex h-auto shadow-md bg-white w-[80%]  flex-col items-center rounded-lg">
            <div className="w-[130px] h-[130px] rounded-full border mt-5">
              <img
                src={vite}
                alt="Image"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="font-bold text-black max-sm:text-[13px] font-[Evergreen] text-[20px] mt-5">
              Francis Uzoigwe
            </div>
            <div className="text-[12px] text-black font-bold max-sm:text-[10px] font-[Evergreen] mt-3">
              kossyuzoigwe@gmail.com
            </div>
            <div className="font-bold mt-3 text-black">₦2,000</div>
            <div className="w-full items-center flex-col flex">
              <div className="max-sm:w-[90%] md:w-[60%] flex justify-center">
                <div className="w-full">
                  <div className="border-black border w-full flex-col flex rounded-md mt-3">
                    <div className="px-2 max-sm:text-[11px] text-black">
                      Amount:
                    </div>
                    <input
                      type="text"
                      className="w-full h-[30px] max-sm:h-[25px] pl-3 bg-transparent outline-none text-black"
                      {...register("amount")}
                    />
                  </div>
                  {errors.amount?.message && (
                    <div className="flex items-center justify-end text-red-500 text-[12px] font-[Evergreen] font-bold">
                      Input an amount
                    </div>
                  )}
                </div>
              </div>
              <div className="max-sm:w-[90%] md:w-[60%] flex justify-center">
                <div className="w-full">
                  <div className="border border-black w-full flex-col flex rounded-md mt-3">
                    <div className="px-2 max-sm:text-[11px] text-black">
                      No. of Bags:
                    </div>
                    <input
                      type="number"
                      className="w-full h-[30px] max-sm:h-[25px] pl-3 bg-transparent outline-none text-black"
                      {...register("number")}
                    />
                  </div>
                  {errors.number?.message && (
                    <div className="flex items-center justify-end text-red-500 text-[12px] font-[Evergreen] font-bold">
                      Input number of bags
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="my-5">
              <button
                className="px-4 py-2 rounded-md font-bold text-[14px] bg-green-500 text-white"
                type="submit"
              >
                Save Updates
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminDetailScreen;
