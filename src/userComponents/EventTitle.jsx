import React, { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ClientInput from "../components/ClientInput";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const EventTitle = ({ isOpen, setIsOpen, title, setTitle }) => {
	const navigate = useNavigate();
	const ref = useRef(null);

	return (
		<div
			className={`bg-opacity-1 backdrop-blur-sm bg-white/30 inset-0 fixed z-10 flex justify-center items-center text-foreground duration-100 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}
		>
			<div
				className={`bg-background p-5 shadow-lg rounded-[25px] w-[500px] transition-transform transform ${isOpen ? "scale-100" : "scale-95"}`}
			>
				<div className="flex justify-between items-center">
					<h1 className="font-bold text-lg">Enter Event Name :</h1>
					<button
						className="bg-secondary p-1 rounded-md  hover:bg-primary hover:text-white"
						onClick={() => {
							navigate("/user/events");
							setIsOpen((prev) => !prev);
						}}
					>
						<CloseIcon className="w-5 h-5" />
					</button>
				</div>

				<input
					type="text"
					className="bg-input rounded-[25px] p-2 w-full mt-3 focus:ring-red-500 text-lg"
					placeholder="Type title here"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					ref={ref}
				/>
				<div className=" flex justify-end">
					{/*<button>Create</button>*/}
					<Button
						styles={
							" text-xsm max-w-[100px] py-[7px]  mt-5 hover:bg-primary/90"
						}
						handleClick={() => {
							title.length <= 0
								? ref.current.focus()
								: setIsOpen((prev) => !prev);
						}}
					>
						Save
					</Button>
				</div>
			</div>
		</div>
	);
};

export default EventTitle;
