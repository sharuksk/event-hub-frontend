import React, { useEffect, useState } from "react";
import { FileInput, Label } from "flowbite-react";
import { CiImageOn } from "react-icons/ci";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserDetail } from "../features/userDetailSlice";

const UserRegisterPage = () => {
  const { user } = useSelector((state) => state.user);
  const { userDetail } = useSelector((state) => state.userDetail);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();
  const Location = useLocation();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(
    userDetail?.firstName || user.name || ""
  );
  const [lastName, setLastName] = useState(userDetail?.lastName || "");
  const [email, setEmail] = useState(userDetail?.email || user.email || "");
  const [workExperience, setWorkExperience] = useState(
    userDetail?.workExperience || ""
  );
  const [location, setLocation] = useState(
    userDetail?.location || "Doha, Qatar"
  );
  const [contact, setContact] = useState(userDetail?.contact || "");
  const [qId, setQId] = useState(userDetail?.qId || "");
  const [picture, setPicture] = useState(userDetail?.profile_photo || null);
  const [description, setDescription] = useState(userDetail?.description || "");

  const [imageUploadSuccess, setImageUploadSuccess] = useState(false);
  const [imageExist, setImageExist] = useState(false);

  useEffect(() => {
    const getUserDetailData = async () => {
      if (!Location.state?.userId) {
        try {
          const res = await axios.get(BASE_URL + "/userDetail/" + user.id);
          if (res.data.status == "success") {
            dispatch(setUserDetail(res?.data.data.UserDetail));
            navigate("/user/events");
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    getUserDetailData();
  }, []);

  useEffect(() => {
    if (userDetail && Object.keys(userDetail).length > 0) {
      setImageExist(true);
    }
  }, [setImageExist]);

  const handleFilechange = (e) => {
    setPicture(e.target.files[0]);
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

    let bestWorkBase64 = "";
    if (picture.name) {
      bestWorkBase64 = await fileToBase64(picture);
    } else {
      bestWorkBase64 = picture;
    }

    const userDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      userId: user.id,
      workExperience: Number(workExperience),
      location: location,
      contact: contact,
      qId: qId,
      profile_photo: bestWorkBase64,
      description: description,
    };

    try {
      if (userDetail && Object.keys(userDetail).length > 0) {
        let id = Location.state?.userId;

        console.log("attempt to update");

        await axios
          .put(`${BASE_URL}/userDetail/${id}`, userDetails, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res.data);
            dispatch(setUserDetail(res.data.data.UserDetail));
            navigate("/user/events");
          })
          .catch((err) => console.log(err));
      } else {
        console.log("working fine");

        console.log("create user calle");
        await axios
          .post(`${BASE_URL}/userDetail`, userDetails, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res.data.data.newUser);
            dispatch(setUserDetail(res.data.data.newUser));
            navigate("/user/events");
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.error("There was an error posting the data!", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-card text-foreground">
      <div className="flex flex-col gap-10 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-[300px]">
          <div className="space-y-6">
            <div>
              <label className="block ">First Name :</label>
              <input
                type="text"
                className="mt-1 p-3 w-[270px] border border-r-2 shadow-custom rounded-full bg-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="block ">Last Name :</label>
              <input
                type="text"
                className="mt-1 p-3 w-[270px] border border-r-2 shadow-custom rounded-full bg-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label className="block ">Email :</label>
              <input
                type="email"
                className="mt-1 p-3 w-[270px] border border-r-2 shadow-custom rounded-full bg-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block ">Work Experience :</label>
              <input
                type="text"
                className="mt-1 p-3 w-[270px] border border-r-2 shadow-custom rounded-full bg-input"
                value={workExperience}
                onChange={(e) => setWorkExperience(e.target.value)}
              />
            </div>
            <div>
              <label className="block ">Location :</label>
              <select
                className="mt-1 p-3 w-[270px] border border-r-2 shadow-custom rounded-full bg-input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="Doha, Qatar">Doha, Qatar</option>
                <option value="Michingam, US">Michingam, US</option>
                <option value="Chennai, India">Chennai, India</option>
              </select>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block ">Contact :</label>
              <input
                type="text"
                className="mt-1 p-3 w-[270px] border border-r-2 shadow-custom rounded-full bg-input"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div>
              <label className="block ">QID :</label>
              <input
                type="text"
                className="mt-1 p-3 w-[270px] border border-r-2 shadow-custom rounded-full bg-input"
                value={qId}
                onChange={(e) => setQId(e.target.value)}
              />
            </div>
            <div>
              <label className="block ">Profile Picture :</label>

              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="dropzone-file"
                  className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-primary bg-input"
                >
                  {imageExist ? (
                    <img
                      onClick={handleClick}
                      src={picture}
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
                className="mt-1 p-3 w-full border border-r-2 shadow-custom rounded-2xl bg-input"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-primary text-white py-2 px-16 rounded-full shadow-lg"
        >
          {userDetail && Object.keys(userDetail).length > 0 ? "Update" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default UserRegisterPage;
