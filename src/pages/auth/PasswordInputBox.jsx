import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const PasswordInputBox = ({ placeholder, value, setValue }) => {
    const [type, setType] = useState("password");
    return (
        <div className="w-full rounded-[25px]  bg-input px-4 flex items-center justify-center gap-2">
            <LockOutlinedIcon className="text-gray-400" />
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full border-none outline-none py-4 bg-input"
            />
            <button
                onClick={() =>
                    setType((prev) =>
                        prev === "password" ? "text" : "password"
                    )
                }
            >
                {type === "text" ? (
                    <VisibilityOffOutlinedIcon className="text-gray-400" />
                ) : (
                    <VisibilityOutlinedIcon className="text-gray-400" />
                )}
            </button>
        </div>
    );
};

export default PasswordInputBox;
