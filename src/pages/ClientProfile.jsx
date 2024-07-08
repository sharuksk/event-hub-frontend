import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BookSlots from "../components/BookSlots";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const ClientProfile = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary-bg p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[300px] relative bottom-16 left-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-gray-700">
                            First Name :
                        </label>
                        <input
                            type="text"
                            placeholder="Mohammed"
                            className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">
                            Last Name :
                        </label>
                        <input
                            type="text"
                            placeholder="Khan"
                            className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Role :</label>
                        <select className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl">
                            <option>Photographer</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">
                            Work Experience :
                        </label>
                        <input
                            type="text"
                            placeholder="15 years"
                            className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">
                            Location :
                        </label>
                        <select className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl">
                            <option>Doha, Qatar</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Contact :</label>
                        <input
                            type="text"
                            className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
                        />
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <label className="block text-gray-700">
                            Show your best work :
                        </label>
                        <div className="mt-1 p-10 w-full  border-2 rounded-2xl flex items-center justify-center border-primary bg-white">
                            <span>Select file</span>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700">
                            Description :
                        </label>
                        <textarea
                            className="mt-1 p-3 w-full border rounded-2xl shadow-sm"
                            rows="4"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700">
                            Price Range / day :
                        </label>
                        <input
                            type="text"
                            placeholder="$850"
                            className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">
                            Availability for Events :
                        </label>
                        <button
                            onClick={handleOpen}
                            className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-x"
                        >
                            Book your slots here{" "}
                            <span className="text-primary">→</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative top-72 right-[500px]">
                <button className="bg-primary text-white py-2 px-16 rounded-full shadow-lg ">
                    Save
                </button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <BookSlots close={handleClose} />
                </Box>
            </Modal>
        </div>
    );
};

export default ClientProfile;
