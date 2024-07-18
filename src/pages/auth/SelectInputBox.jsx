import React, { useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const PasswordInputBox = ({ placeholder, value, setValue }) => {
  return (
    <div className="w-full rounded-[25px]  bg-input px-4 flex items-center justify-center gap-2 overflow-hidden">
      <PermIdentityIcon className="text-gray-400" />
      <select
        type="select"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border-none outline-none py-4 bg-input"
      >
        <option className="bg-input">User</option>
        <option>Ventar</option>
      </select>
    </div>
  );
};

export default PasswordInputBox;
