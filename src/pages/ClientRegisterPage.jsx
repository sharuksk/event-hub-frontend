import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import BookSlots from "../components/BookSlots";
import { FileInput, Label } from "flowbite-react";
import { CiImageOn } from "react-icons/ci";
import dayjs from "dayjs";
import { useNavigate, useLocation } from "react-router-dom";

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

const ClientRegisterPage = () => {
  const navigate = useNavigate();
  const Location = useLocation();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [firstName, setFirstName] = useState(
    Location.state?.clientDetails?.firstName || ""
  );
  const [lastName, setLastName] = useState(
    Location.state?.clientDetails?.lastName || ""
  );
  const [role, setRole] = useState(Location.state?.clientDetails?.role || "");
  const [workExperiance, setWorkExperiance] = useState(
    Location.state?.clientDetails?.workExperiance || ""
  );
  const [location, setLocation] = useState(
    Location.state?.clientDetails?.location || ""
  );
  const [contact, setContact] = useState(
    Location.state?.clientDetails?.contact || ""
  );
  const [bestWork, setBestWork] = useState(null);
  const [description, setDescription] = useState(
    Location.state?.clientDetails?.description || ""
  );
  const [price, setPrice] = useState(
    Location.state?.clientDetails?.price || ""
  );
  const [slot, setSlot] = useState(
    dayjs(Location.state?.clientDetails?.slot || "")
  );
  const [selectedSession, setSelectedSession] = useState(
    Location.state?.clientDetails?.selectedSession || ""
  );

  const handleFilechange = (e) => {
    setBestWork(e.target.files[0]);
  };

  const handleSubmit = () => {
    // e.PreventDefault();

    const clientDetails = {
      firstName: firstName,
      lastName: lastName,
      role: role,
      workExperiance: workExperiance,
      location: location,
      contact: contact,
      bestWork: bestWork,
      description: description,
      price: price,
      slot: [slot.format("YYYY-MM-DD"), slot.format("dddd")],
      selectedSession: selectedSession,
    };

    localStorage.setItem("clientDetails", JSON.stringify(clientDetails));

    navigate("/client/dashboard");

    // console.log(clientDetails);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[300px] relative bottom-16 left-8">
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700">First Name :</label>
            <input
              type="text"
              placeholder="Mohammed"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name :</label>
            <input
              type="text"
              placeholder="Khan"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Role :</label>
            <select
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Photographer</option>
              <option>Venu</option>
              <option>Catring</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Work Experience :</label>
            <input
              type="text"
              placeholder="15 years"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
              value={workExperiance}
              onChange={(e) => setWorkExperiance(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Location :</label>
            <select
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>Doha, Qatar</option>
              <option>Chennai, India</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Contact :</label>
            <input
              type="text"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700">Show your best work :</label>

            <div className="flex w-full items-center justify-center">
              <Label
                htmlFor="dropzone-file"
                className="flex h-34 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-green-300 bg-white"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5 gap-2">
                  <CiImageOn className="size-6 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    Select file
                  </p>
                </div>
                <FileInput
                  id="dropzone-file"
                  className="hidden"
                  onChange={handleFilechange}
                />
              </Label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Description :</label>
            <textarea
              className="mt-1 p-3 w-full border rounded-2xl shadow-sm"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Price Range / day :</label>
            <input
              type="text"
              placeholder="$850"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
              Book your slots here <span className="text-[#24c690]">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative top-72 right-[500px]">
        <button
          onClick={handleSubmit}
          className="bg-[#24c690] text-white py-2 px-16 rounded-full shadow-lg "
        >
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
          <BookSlots
            close={handleClose}
            slot={slot}
            setSlot={setSlot}
            selectedSession={selectedSession}
            setSelectedSession={setSelectedSession}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ClientRegisterPage;
