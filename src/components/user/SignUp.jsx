import React, { useRef } from "react";
import { IonIcon } from "@ionic/react";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import VendorSignUpPic from "../../assets/img/VendorSignUpPic.png";
import { ArrowBigLeftIcon, ArrowLeft } from "lucide-react";

const SignUp = () => {
  const passwordRef = useRef(null);
  const showPasswordRef = useRef(false);

  const togglePasswordVisibility = () => {
    showPasswordRef.current = !showPasswordRef.current;
    passwordRef.current.type = showPasswordRef.current ? "text" : "password";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
        <div className="flex flex-col items-center p-5 bg-[#F7DC6F]">
          <div className="font-bold text-2xl mb-4">
            <p className="text-[#B28400]">
              STYLE<span className="text-black">CONNECT</span>
            </p>
            <p className="text-[#B28400]">AFRICA</p>
          </div>
          <img
            src={VendorSignUpPic}
            alt="User Sign Up"
            className="w-full max-w-xs"
          />
        </div>
        <div
          className="p-8 bg-[#FBFAF2] bg-opacity-90 rounded-lg flex-1 overflow-y-auto"
          style={{ maxHeight: "90vh" }}
        >
          <div className="flex  justify-end mb-4">
            <Link to="/" className="text-[#B28400]  underline text-sm hover:text-[#DAA520]">
              Home
            </Link>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-[#B28400] text-xl font-semibold font-sans text-center">
              Create Account
            </p>
          </div>
          <form className="flex flex-col font-serif text-sm gap-y-5 mt-4 text-center">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border rounded-lg h-12 w-full p-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border rounded-lg h-12 w-full p-4"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              className="border rounded-lg h-12 w-full p-4"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Create Password"
                className="border rounded-lg h-12 w-full pr-12 p-4"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <IonIcon
                  icon={showPasswordRef.current ? eyeOffOutline : eyeOutline}
                  size="medium"
                />
              </button>
            </div>
          </form>
          <div className="flex mt-4 justify-center">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 border-none outline-none border-[#F7DC6F] self-center"
              />
              <span className="text-gray-400">
                Agree to <span className="text-[#B28400]">terms</span> &{" "}
                <span className="text-[#B28400]">conditions</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-5 space-y-3">
            <button className="h-10 w-full bg-[#DAA520] text-white text-center rounded-lg flex justify-center items-center hover:bg-[#B28400]">
              Sign Up
            </button>
            <div className="text-center">
              <span className="text-gray-400">Already have an Account? </span>
              <Link
                to="/login"
                className="text-primary hover:text-primary underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
