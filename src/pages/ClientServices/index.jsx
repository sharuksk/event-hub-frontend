import React, { useState } from "react";
import { useSelector } from "react-redux";
import ClientInput from "../../components/ClientInput";
import ClientTextArea from "../../components/ClientTextArea";
import Button from "../../components/Button";
import ClientInputImage from "../../components/ClientInputImage";
import CatringService from "./CatringService";
import PhotographyService from "./PhotographyService";
import VenueService from "./VenueService";
import DecorationService from "./DecorationService";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ClientServices = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(null);
    //catring
    const [menuOptions, setMenuOptions] = useState([]);

    //photography
    const [portfolio, setPortfolio] = useState([]);

    //venu
    const [location, setLocation] = useState("");
    const [capacity, setCapacity] = useState(0);

    //decoration
    const [decorationImages, setDecorationImages] = useState([]);

    const navigate = useNavigate();

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const { client } = useSelector((state) => state.client);
    const { user } = useSelector((state) => state.user);

    const handleSubmit = async () => {
        const data = new FormData();

        data.append("images", image[0]);

        data.append("typeId", client?.role?._id);
        data.append("clientId", user.id);
        data.append("name", name);
        data.append("description", description);
        data.append("contactInfo", contactInfo);
        data.append("price", price);
        if (client?.role?.type === "Catring") {
            data.append("menuOptions", JSON.stringify(menuOptions));
        } else if (client?.role?.type === "Venue") {
            data.append("location", location);
            data.append("capacity", capacity);
        } else if (client?.role?.type === "Photograph") {
            data.append("portfolio", JSON.stringify(portfolio));
        } else if (client?.role?.type === "Decoration") {
            decorationImages.forEach((image) =>
                data.append("decorationImages", image),
            );
        }
        console.log(data);
        try {
            const res = await axios.post(BASE_URL + "/items/create", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(res);
            navigate("/client/dashboard");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="  bg-card text-foreground p-20 flex flex-col justify-center items-center ">
            <div className="flex w-full max-w-[1200px] gap-10">
                <div className="space-y-5 flex-1 ">
                    {/* //typid //clientid */}
                    {/* name */}
                    <ClientInput
                        title={"Name"}
                        type={"text"}
                        value={name}
                        setValue={setName}
                    />
                    <ClientTextArea
                        title={"Description"}
                        value={description}
                        setValue={setDescription}
                    />
                    <ClientInput
                        title={"Contact info"}
                        type={"text"}
                        value={contactInfo}
                        setValue={setContactInfo}
                    />
                    <ClientInput
                        title={"Price"}
                        type={"number"}
                        value={price}
                        setValue={setPrice}
                    />

                    <ClientInputImage
                        title={"Image"}
                        value={image}
                        setValue={setImage}
                    />
                </div>
                <div className="space-y-5 flex-1">
                    {client?.role?.type == "Catring" && (
                        <CatringService
                            options={menuOptions}
                            setOptions={setMenuOptions}
                        />
                    )}

                    {client?.role?.type == "Venue" && (
                        <VenueService
                            location={location}
                            setLocation={setLocation}
                            capacity={capacity}
                            setCapacity={setCapacity}
                        />
                    )}

                    {client?.role?.type == "Photograph" && (
                        <PhotographyService
                            options={portfolio}
                            setOptions={setPortfolio}
                        />
                    )}

                    {client?.role?.type == "Decoration" && (
                        <DecorationService
                            images={decorationImages}
                            setImages={setDecorationImages}
                        />
                    )}
                </div>
                {/* //description //images //price //contact info //dates */}
            </div>
            <div className="flex justify-center mt-10">
                <Button
                    styles="w-fit mx-auto px-10 py-[10px]"
                    handleClick={handleSubmit}
                >
                    Create
                </Button>
            </div>
        </div>
    );
};

export default ClientServices;
