import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import BookSlots from "../components/BookSlots";
import { FileInput, Label } from "flowbite-react";
import { CiImageOn } from "react-icons/ci";
import dayjs from "dayjs";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setClient } from "../features/clientSlice";

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
  const { user } = useSelector((state) => state.user);
  const { client } = useSelector((state) => state.client);

  const navigate = useNavigate();
  const Location = useLocation();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [firstName, setFirstName] = useState(client?.firstName || "");
  const [lastName, setLastName] = useState(client?.lastName || "");
  const [email, setEmail] = useState(client?.email || "");
  const [role, setRole] = useState(client?.role || "");
  const [workExperience, setWorkExperience] = useState(
    client?.workExperience || ""
  );
  const [location, setLocation] = useState(client?.location || "");
  const [contact, setContact] = useState(client?.contact || "");
  const [bestWork, setBestWork] = useState(null);
  const [description, setDescription] = useState(client?.description || "");
  const [price, setPrice] = useState(client?.price || "");
  const [slot, setSlot] = useState(dayjs());
  const [selectedSession, setSelectedSession] = useState(
    client?.selectedSession || ""
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
      userId: user.id,
      role: role,
      workExperience: Number(workExperience),
      location: location,
      contact: contact,
      bestWork: bestWorkBase64,
      description: description,
      price: Number(price),
      availability: [{ date: slot.toDate(), isAvailable: true }],
      selectedSession: selectedSession,
    };

    let id = Location.state?.clientId;

    try {
      if (Object.keys(client).length > 0) {
        console.log("attempt to update");
        const res = await axios.put(
          `http://localhost:8081/api/v1/client/${id}`,
          clientDetails,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(setClient(res.data.data.client));
        // setClientUpdate((prev) => !prev);
        navigate("/client/dashboard");
      } else {
        const res = await axios.post(
          "http://localhost:8081/api/v1/client",
          clientDetails,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res.data);
        dispatch(setClient(res.data.data.newClient));
        // setClientLogin((prev) => !prev);
        navigate("/client/dashboard");
      }
    } catch (error) {
      console.error("There was an error posting the data!", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-card p-5 text-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[300px] relative bottom-16 left-8">
        <div className="space-y-6">
          <div>
            <label className="block ">First Name :</label>
            <input
              type="text"
              className="mt-1 p-3 w-[270px] border border-r-2 shadow-lg rounded-full bg-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label className="block ">Last Name :</label>
            <input
              type="text"
              className="mt-1 p-3 w-[270px] border border-r-2 shadow-lg rounded-full bg-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label className="block ">Email :</label>
            <input
              type="email"
              className="mt-1 p-3 w-[270px] border border-r-2 shadow-lg rounded-full bg-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block ">Role :</label>
            <select
              className="mt-1 p-3 w-[270px] border border-r-2 shadow-lg rounded-full bg-input"
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
            <label className="block ">Work Experience :</label>
            <input
              type="text"
              className="mt-1 p-3 w-[270px] border border-r-2 shadow-lg rounded-full bg-input"
              value={workExperience}
              onChange={(e) => setWorkExperience(e.target.value)}
            />
          </div>
          <div>
            <label className="block ">Location :</label>
            <select
              className="mt-1 p-3 w-[270px] border border-r-2 shadow-lg rounded-full bg-input"
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
            <label className="block ">Contact :</label>
            <input
              type="text"
              className="mt-1 p-3 w-[270px] border border-r-2 shadow-lg rounded-full bg-input"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div>
            <label className="block ">Show your best work :</label>

            <div className="flex w-full items-center justify-center">
              <Label
                htmlFor="dropzone-file"
                className="flex h-34 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-primary bg-input"
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
            <label className="block ">Description :</label>
            <textarea
              className="mt-1 p-3 w-full border border-r-2 shadow-lg rounded-2xl bg-input"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label className="block ">Price Range / day :</label>
            <input
              type="text"
              placeholder="$850"
              className="mt-1 p-3 w-[270px] border border-r-2 shadow-lg rounded-full bg-input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label className="block ">Availability for Events :</label>
            <button
              onClick={handleOpen}
              className="mt-1 p-3 w-[270px] border border-r-2 shadow-lg rounded-full bg-input"
            >
              Book your slots here <span className="text-[#24c690]">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative top-80 right-[500px]">
        <button
          onClick={handleSubmit}
          className="bg-primary text-white py-2 px-16 rounded-full shadow-lg"
        >
          {Object.keys(client).length > 0 ? "Update" : "Save"}
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
