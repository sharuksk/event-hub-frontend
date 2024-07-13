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

  const BASE_URL = import.meta.env.VITE_BASE_URL;

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
  const [bestWork, setBestWork] = useState(client?.bestWork || null);
  const [description, setDescription] = useState(client?.description || "");
  const [slot, setSlot] = useState(dayjs());
  // const [selectedSession, setSelectedSession] = useState(
  //   client?.selectedSession || ""
  // );
  const [imageUploadSuccess, setImageUploadSuccess] = useState(false);
  const [imageExist, setImageExist] = useState(false);

  useEffect(() => {
    if (Object.keys(client).length > 0) {
      setImageExist(true);
    }
  }, [setImageExist]);
  const [options, setOptions] = useState([]);

  const handleFilechange = (e) => {
    setBestWork(e.target.files[0]);
    setImageUploadSuccess(true);
  };

  const handleClick = () => {
    setImageExist(false);
    setImageUploadSuccess(false);
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
    console.log(bestWork);
    let bestWorkBase64 = "";
    if (bestWork.name) {
      bestWorkBase64 = await fileToBase64(bestWork);
    } else {
      bestWorkBase64 = bestWork;
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
      availability: [{ date: slot.format("YYYY-MM-DD"), isAvailable: true }],
      // selectedSession: selectedSession,
    };

    let id = Location.state?.clientId;

    try {
      if (client && Object.keys(client).length > 0) {
        console.log("attempt to update");
        const res = await axios.put(`${BASE_URL}/client/${id}`, clientDetails, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        dispatch(setClient(res.data.data.client));
        navigate("/client/dashboard");
      } else {
        console.log("working fine");

        console.log("create client calle");
        const res = await axios.post(`${BASE_URL}/client`, clientDetails, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res.data);
        dispatch(setClient(res.data.data.newClient));
        navigate("/client/dashboard");
      }
    } catch (error) {
      console.error("There was an error posting the data!", error);
    }
  };

  useEffect(() => {
    const getTypes = async () => {
      const res = await axios.get(BASE_URL + "/types");
      console.log(res.data.types);
      setOptions(res.data.types);
    };
    getTypes();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-card p-5 text-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-[300px] relative bottom-16 left-8">
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
              {options.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.type}
                </option>
              ))}
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
                className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-primary bg-input"
              >
                {imageExist ? (
                  <img
                    onClick={handleClick}
                    src={bestWork}
                    className="w-full h-full rounded-xl object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center pb-6 pt-5 gap-2">
                    {imageUploadSuccess ? (
                      <>
                        <CiImageOn className="size-6 text-gray-400" />

                        <p className="mt-2 text-green-700">
                          Image selected successfully
                        </p>
                      </>
                    ) : (
                      <>
                        <CiImageOn className="size-6 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          Select file
                        </p>
                      </>
                    )}
                  </div>
                )}

                <FileInput
                  id="dropzone-file"
                  className="hidden"
                  onChange={handleFilechange}
                  onClick={handleClick}
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
            <label className="block ">Availability for Events :</label>
            <button
              onClick={handleOpen}
              className="mt-1 p-3 w-[270px] border border-r-2 shadow-lg rounded-full bg-input"
            >
              Update your visibility <span className="text-[#24c690]">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative top-80 right-[500px]">
        <button
          onClick={handleSubmit}
          className="bg-primary text-white py-2 px-16 rounded-full shadow-lg"
        >
          {client && Object.keys(client).length > 0 ? "Update" : "Save"}
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
            // selectedSession={selectedSession}
            // setSelectedSession={setSelectedSession}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ClientRegisterPage;
