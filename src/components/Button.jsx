import React from "react";

const Button = ({ Icon, children, styles, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className={`rounded-[25px] w-full py-3  bg-primary text-white font-bold   ${styles}`}
        >
            {children}
        </button>
    );
};

export default Button;
