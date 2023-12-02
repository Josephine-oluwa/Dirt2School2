import React from "react";

export interface iBlog {
    imG?: any;
    title?: string;
    subtitle?: string;
  }

const ComBlog:React.FC<iBlog> = ({imG, title, subtitle}) => {
  return (
    <div className="min-w-[300px] h-[400px] flex my-[10px] flex-col items-center rounded-[3px] border cursor-pointer max-md:w-[210px] max-sm:w-[370px] mx-2">
        <img src={imG} alt="image" className="w-[95%]  h-[65%]"/>
        <div className="w-[95%]">
            <div className="text-[18px] max-sm:text-[15px] font-bold my-[10px] break-words">{title}</div>
            <div className="text-[14px] max-sm:text-[13px] break-words">{subtitle}</div>
        </div>
    </div>
  )
}

export default ComBlog