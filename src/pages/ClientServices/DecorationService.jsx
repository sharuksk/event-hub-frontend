import React from "react";
import { CiImageOn } from "react-icons/ci";

const DecorationService = ({ images, setImages }) => {
    console.log(images);
    return (
        <div className="mt-5">
            {" "}
            &nbsp;&nbsp;<label>Decoration images : </label>
            <br />
            <br />
            <div className="  bg-input rounded-[25px] p-2 h-[200px]  ">
                {
                    <label className=" h-full h-full cursor-pointer flex items-center justify-center">
                        <CiImageOn className="size-20 text-gray-400" />
                        <input
                            type="file"
                            className="hidden w-full"
                            onChange={(e) =>
                                setImages([...images, e.target.files[0]])
                            }
                        />
                    </label>
                }
            </div>
        </div>
    );
};

export default DecorationService;
