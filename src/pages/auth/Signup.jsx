import React, { useState, useEffect } from "react";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import TextInputBox from "./TextInputBox";
import PasswordInputBox from "./PasswordInputBox";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import SocialmediaAuthBtn from "./SocialmediaAuthBtn";
import googlelogo from "../../assets/googleLogo.webp";
import fbLogo from "../../assets/fb.png";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const label = { inputProps: { "aria-label": "Switch demo" } };

    const handleSignup = async () => {
        try {
            if (
                name.trim().length === 0 ||
                email.trim().length === 0 ||
                password.trim().length === 0
            ) {
                alert("Enter valid credentials");
                return;
            }
            if (password.trim().length < 8) {
                alert("Password length must be greater than 8");
                return;
            }
            if (password !== confirmPassword) {
                alert("Password dosen't match");
                return;
            }
            const res = await axios.post(BASE_URL + "/user", {
                name: name,
                email,
                password: password,
            });
            console.log(res.data);
            console.log(res.data.data);
            dispatch(setUser(res.data.data));
            navigate("/user");
        } catch (error) {
            console.log("Error occured");
            console.log(error);
        }
    };
    const handleAuthWithGoogle = () => {};
    const handleAuthWithFacebook = () => {};

    return (
        <div className="bg-gradient-to-l from-auth-bg via-background to-background min-h-screen flex items-center justify-center">
            <div className="flex w-[1000px] bg-auth-bg rounded-[25px]  overflow-hidden flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-10 text-foreground">
                    <h2 className="text-xl font-bold">Sign up</h2>
                    <br />
                    <div className="space-y-3">
                        <TextInputBox
                            type="text"
                            placeholder="Full name"
                            Icon={Person2OutlinedIcon}
                            value={name}
                            setValue={setName}
                        />

                        <TextInputBox
                            type="text"
                            placeholder="abc@gmail.com"
                            Icon={MailOutlinedIcon}
                            value={email}
                            setValue={setEmail}
                        />

                        <PasswordInputBox
                            placeholder="password"
                            Icon={MailOutlinedIcon}
                            value={password}
                            setValue={setPassword}
                        />

                        <PasswordInputBox
                            placeholder="Confirm password"
                            Icon={MailOutlinedIcon}
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                        />
                    </div>
                    <br />

                    <div className="flex items-center flex-col">
                        <Button
                            handleClick={handleSignup}
                            styles={"max-w-fit px-20 mx-auto mb-8 "}
                        >
                            {"SIGN UP"}
                        </Button>
                        <p className="text-gray-600 mb-4">OR</p>

                        <SocialmediaAuthBtn
                            img={googlelogo}
                            handleClick={handleAuthWithGoogle}
                            text={"Login with Google"}
                        />

                        <SocialmediaAuthBtn
                            img={fbLogo}
                            handleClick={handleAuthWithFacebook}
                            text={"Login with Facebook"}
                        />
                        <p>
                            Already have an account{" "}
                            <Link to="/auth/signin" className="text-blue-500">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="hidden md:flex w-1/2 overflow-hidden rounded-l-[25px]  ">
                    <img
                        src="https://previews.123rf.com/images/sentavio/sentavio1702/sentavio170200069/72686226-qatar-country-design-template-linear-flat-famous-historic-sight-cartoon-style-web-site-vector.jpg"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Signup;
