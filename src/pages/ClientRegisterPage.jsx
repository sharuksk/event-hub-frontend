import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import BookSlots from "../components/BookSlots";
import { FileInput, Label } from "flowbite-react";
import { CiImageOn } from "react-icons/ci";
import dayjs from "dayjs";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

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

const ClientRegisterPage = ({
  setClientLogin,
  clientDetail,
  setClientUpdate,
}) => {
  const navigate = useNavigate();
  const Location = useLocation();

  console.log(Location.state?.clientId);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [firstName, setFirstName] = useState(clientDetail?.firstName || "");
  const [lastName, setLastName] = useState(clientDetail?.lastName || "");
  const [email, setEmail] = useState(clientDetail?.email || "");
  const [role, setRole] = useState(clientDetail?.role || "");
  const [workExperience, setWorkExperience] = useState(
    clientDetail?.workExperience || ""
  );
  const [location, setLocation] = useState(clientDetail?.location || "");
  const [contact, setContact] = useState(clientDetail?.contact || "");
  const [bestWork, setBestWork] = useState(null);
  const [description, setDescription] = useState(
    clientDetail?.description || ""
  );
  const [price, setPrice] = useState(clientDetail?.price || "");
  const [slot, setSlot] = useState(dayjs());
  const [selectedSession, setSelectedSession] = useState(
    clientDetail?.selectedSession || ""
  );

  const handleFilechange = (e) => {
    setBestWork(e.target.files[0]);
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let bestWorkBase64 = "";
    if (bestWork) {
      bestWorkBase64 = await fileToBase64(bestWork);
    }

    const clientDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      userId: "66853725b60689d846b327cd",
      role: role,
      workExperience: Number(workExperience),
      location: location,
      contact: contact,
      bestWork: bestWorkBase64,
      description: description,
      price: Number(price),
      slot: [slot.format("YYYY-MM-DD"), slot.format("dddd")],
      selectedSession: selectedSession,
    };

    let id = Location.state?.clientId;

    try {
      if (clientDetail) {
        console.log("attempt to update");
        await axios.put(
          `http://localhost:8081/api/v1/client/${id}`,
          clientDetails,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setClientUpdate((prev) => !prev);
        navigate("/client/dashboard");
      } else {
        await axios.post("http://localhost:8081/api/v1/client", clientDetails, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setClientLogin((prev) => !prev);
        navigate("/client/dashboard");
      }
    } catch (error) {
      console.error("There was an error posting the data!", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[300px] relative bottom-16 left-8">
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700">First Name :</label>
            <input
              type="text"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name :</label>
            <input
              type="text"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email :</label>
            <input
              type="email"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Role :</label>
            <select
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>photography</option>
              <option>decoration</option>
              <option>venue</option>
              <option>catering</option>
              <option>organizing Team</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Work Experience :</label>
            <input
              type="text"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
              value={workExperience}
              onChange={(e) => setWorkExperience(e.target.value)}
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
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700">Contact :</label>
            <input
              type="text"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
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
      <div className="relative top-80 right-[500px]">
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
