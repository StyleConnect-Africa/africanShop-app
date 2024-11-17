import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import VendorSignUpPic from "../../assets/img/VendorSignUpPic.png";
import LoadingModal from "../ModalLoading/";

const VendorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
      toast.success("Login successful!");
    }, 2000);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center px-4">
      <ToastContainer />
      <LoadingModal isLoading={loading} />
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
        <div className="p-6 bg-[#FBFAF2] flex-1">
          <div className="flex flex-col mb-6">
            <p className="text-[#B28400] text-xl font-medium font-sans text-center">
              Log In as Vendor
            </p>
          </div>
          <form className="flex flex-col gap-y-5 mt-2 font-serif font-thin text-center">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border rounded-lg h-14 w-full p-4"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="border rounded-lg h-14 w-full pr-12 p-4"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <IonIcon
                  icon={showPassword ? eyeOffOutline : eyeOutline}
                  size="medium"
                />
              </button>
            </div>
          </form>
          <div className="flex mt-6 justify-between">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 border-none outline-none border-[#F7DC6F] self-center"
              />
              <Link>
                <p className="font-serif text-sm font-thin">Remember me</p>
              </Link>
            </div>
            <Link className="font-serif text-sm font-thin">Forget Password</Link>
          </div>
          <div className="flex flex-col mt-10">
            <button
              onClick={handleLogin}
              className="h-10 w-full bg-[#F7DC6F] text-center rounded-lg hover:bg-accent2 hover:text-white"
            >
              Log in
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm font-serif font-thin">
                Don't have an account?{" "}
                <Link to="/signup1" className="text-[#DAA520] hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FBF5DF] flex-1 hidden md:flex flex-col items-center justify-center">
          <div className="flex p-5 font-bold text-xl">
            <p className="text-[#B28400] font-serif">
              STYLE<span className="text-black">CONNECT</span>
            </p>
            <p className="text-[#B28400] font-serif text-xl">AFRICA</p>
          </div>
          <img src={VendorSignUpPic} alt="Vendor Sign Up" className="w-full max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
