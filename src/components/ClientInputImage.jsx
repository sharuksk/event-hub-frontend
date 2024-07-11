import React from "react";
import { CiImageOn } from "react-icons/ci";

const ClientInputImage = ({ title, value, setValue }) => {
    return (
        <>
            &nbsp;&nbsp;<label>{title} : </label>
            <br />
            <div className="  bg-input rounded-[25px] p-2 h-[200px]  ">
                <label className=" h-full h-full cursor-pointer flex items-center justify-center">
                    <CiImageOn className="size-20 text-gray-400" />
                    <input
                        type="file"
                        className="hidden w-full"
                        onChange={(e) => setValue([e.target.files[0]])}
                    />
                </label>
            </div>
        </>
        // <div>
        //     <label className="bg-input w-full h-[25px]">
        //         sadfa
        //         <input type="file" className="hidden" />
        //     </label>
        // </div>
    );
};

export default ClientInputImage;
