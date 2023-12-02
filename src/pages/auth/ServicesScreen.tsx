import { LiaDumpsterSolid } from "react-icons/lia";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";

const ServicesScreen = () => {
  return (
    <div id="services" className="w-full flex py-5 items-center justify-center ">
        <div className="w-[90%] py-2 flex items-center justify-between max-sm:w-[100%] max-sm:flex-col ">
            <div className="py-2 flex gap-4 w-[30%] max-md:w-[40%] max-sm:w-[90%]">
                <div className="text-[34px] text-lime-500 medium:text-[32px]"><LiaDumpsterSolid/></div>
                <div className="">
                    <h2 className="text-[15px] font-bold">Dumpster Sizes</h2>
                    <p className="text-[13px] ">Lorem ipsum dolor sit amet consectetur elit. Laborum expedita, obcaecati cumque adipisci modi similique vitae!</p>
                </div>
            </div>
            <div className="px-2 py-2 flex gap-3 w-[30%] max-md:w-[40%] max-sm:w-[90%]">
                <div className="text-[26px] text-lime-500 max-md:text-[24px]"><FaRegTrashAlt/></div>
                <div className="">
                    <h2 className="text-[15px] font-bold">Waste Collection</h2>
                    <p className="text-[13px] ">Lorem ipsum dolor sit amet consectetur elit. Laborum expedita, obcaecati cumque adipisci modi similique vitae!</p>
                </div>
            </div>
            <div className="px-2 py-2 flex gap-3 w-[30%] max-md:w-[40%] max-sm:w-[90%]">
                <div className="text-[28px] text-lime-500 max-md:text-[26px]"><IoCalendarOutline/></div>
                <div className="">
                    <h2 className="text-[15px] font-bold">Pickup Schedule</h2>
                    <p className="text-[13px] ">Lorem ipsum dolor sit amet consectetur elit. Laborum expedita, obcaecati cumque adipisci modi similique vitae!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesScreen