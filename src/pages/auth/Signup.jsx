import React, { useState } from "react";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import TextInputBox from "./TextInputBox";
import PasswordInputBox from "./PasswordInputBox";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import Button from "../../components/Button";
import SocialmediaAuthBtn from "./SocialmediaAuthBtn";
import googlelogo from "../../assets/googleLogo.webp";
import fbLogo from "../../assets/fb.png";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const label = { inputProps: { "aria-label": "Switch demo" } };

    const handleSignup = () => {};
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
                            value={fullName}
                            setValue={setFullName}
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
