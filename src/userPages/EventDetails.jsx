import React, { useState, useEffect } from "react";
import {
	Box,
	Typography,
	Button,
	Grid,
	Paper,
	Tabs,
	Tab,
	Modal,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { styled } from "@mui/system";
import ServiceBookSlots from "../userComponents/ServiceBookSlots";
import axios from "axios";

const EventDetails = () => {
	const [bookedEvents, setBookedEvents] = useState([]);
	const [itemName, setItemName] = useState("venue");
	const [event, setEvent] = useState([]);
	const { bookedId } = useParams();

	const BASE_URL = import.meta.env.VITE_BASE_URL;

	const setDetails = (category) => {
		const data = bookedEvents.filter(
			(event) => event.itemId.typeId.type.toLowerCase() == category,
		);
		setEvent(data);
		setItemName(category);
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await axios.get(BASE_URL + "/events/" + bookedId);

				setBookedEvents(data.data.bookings);
				const dataa = data.data.bookings.filter(
					(event) =>
						event.itemId.typeId.type.toLowerCase() == "venue",
				);
				setEvent(dataa);
				setItemName("venue");
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);
	return (
		<Box
			sx={{
				p: 0,
				display: "flex",
				flexDirection: "column",
				position: "relative",
			}}
		>
			<Box
				sx={{
					mt: 9,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					px: 10,
				}}
			>
				<Typography
					variant="h4"
					gutterBottom
					color="whitesmoke"
					sx={{ mt: 0 }}
				>
					Event Details
				</Typography>
			</Box>

			<div className="mt-20 max-w-[1200px] mr-20 text-foreground">
				<div className="flex gap-10">
					<button
						onClick={() => setDetails("venue")}
						className={`bg-input p-1 rounded hover:bg-primary hover:text-white text-center ${itemName == "venue" && " bg-primary text-white "}`}
					>
						Venue
					</button>
					<button
						onClick={() => setDetails("decoration")}
						className={`bg-input p-1 rounded hover:bg-primary hover:text-white text-center ${itemName == "decoration" && " bg-primary text-white "}`}
					>
						Decoration
					</button>
					<button
						onClick={() => setDetails("catering")}
						className={`bg-input p-1 rounded hover:bg-primary hover:text-white text-center ${itemName == "catering" && " bg-primary text-white "}`}
					>
						Catering
					</button>
					<button
						onClick={() => setDetails("organizer")}
						className={`bg-input p-1 rounded hover:bg-primary hover:text-white text-center ${itemName == "organizer" && " bg-primary text-white "}`}
					>
						Organizer
					</button>
				</div>
				<div className="mt-10 flex gap-10">
					<div className="w-1/2 space-y-5">
						<div className="bg-input rounded-[25px] p-3">
							{event[0]?.itemId?.name}
						</div>
						<div className="bg-input rounded-[25px] p-3">
							{event[0]?.itemId?.description}
						</div>
						<div className="bg-input rounded-[25px] p-3">
							{event[0]?.itemId?.contactInfo}
						</div>
						<div className="bg-input rounded-[25px] overflow-hidden p-3 ">
							<img
								src={`data:image/jpeg;base64,${event[0]?.item.images[0].data}`}
								className="object-fit w-full h-full rounded-[15px]"
							/>
						</div>
						<div className="bg-green-300 rounded-[25px] p-3 capitalize text-black">
							{event[0]?.status}
						</div>
					</div>
					<div className="w-1/2">
						{itemName == "venue" && (
							<div className="bg-input rounded-[25px] p-3">
								{" "}
								{event[0]?.itemId?.location}
							</div>
						)}
						{itemName == "catering" && (
							<ol className="bg-input rounded-[25px] p-3">
								{console.log(event[0]?.itemId)}
								{event[0]?.itemId.menuOptions[0] &&
									JSON.parse(
										event[0]?.itemId.menuOptions,
									).map((val, index) => (
										<li key={val}>
											{index + 1 + " " + val}
										</li>
									))}
							</ol>
						)}
						{itemName == "decoration" && (
							<div className="space-y-5">
								<div className="bg-input rounded-[25px] p-3 ">
									<img
										src={`data:image/jpeg;base64,${event[0]?.item.images[1]?.data}`}
										className="object-fit w-full h-full rounded-[15px]"
									/>
								</div>
								<div className="bg-input rounded-[25px] p-3 ">
									<img
										src={`data:image/jpeg;base64,${event[0]?.item.images[2]?.data}`}
										className="object-fit w-full h-full rounded-[15px]"
									/>
								</div>
								<div className="bg-input rounded-[25px] p-3 ">
									<img
										src={`data:image/jpeg;base64,${event[0]?.item.images[3]?.data}`}
										className="object-fit w-full h-full rounded-[15px]"
									/>
								</div>
							</div>
						)}
						{itemName == "organizer" && (
							<div className="bg-input rounded-[25px] p-3">
								organizer
							</div>
						)}
					</div>
				</div>
			</div>
		</Box>
	);
};

export default EventDetails;
