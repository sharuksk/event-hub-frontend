import React from "react";
import image from "../assets/image1.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ClientPage = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate("/client/register");
    };

    return (
        <div className="h-screen bg-secondary flex items-center justify-center flex-col gap-10">
            <div className="bg-background h-auto w-[450px] rounded-3xl flex flex-col items-center justify-center gap-3 drop-shadow-2xl p-4">
                <img
                    src={image}
                    className="rounded-3xl h-[200px] w-full object-cover"
                />
                <p className="font-bold text-lg text-left w-full mt-3 text-foreground">
                    Qatar Event Hub
                </p>
                <p className="font-normal text-[#838383] text-left w-full">
                    Qatar's population is a diverse mix of locals and
                    expatriates, with a strong emphasis on maintaining cultural
                    traditions alongside modern development. The country's
                    infrastructure is state-of-the-art, featuring iconic
                    structures like the Museum of Islamic Art and the futuristic
                    skyline of Doha.
                </p>
                <Link
                    to="#"
                    className="flex items-end justify-end  gap-2 text-blue-600 underline underline-offset-2 w-full mt-3"
                >
                    Learn more
                    <FaArrowRightLong />
                </Link>
            </div>
            <p className="font-semibold text-xl text-foreground">
                Join with us to arrange events in all in one platform
            </p>
            <button
                className="flex gap-4 text-center items-center bg-primary p-5 rounded-full text-white"
                onClick={handleRegister}
            >
                Register here <FaArrowRightLong />
            </button>
        </div>
    );
};

export default ClientPage;
