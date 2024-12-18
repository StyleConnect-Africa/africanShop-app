import React, { useRef } from "react";
import { IonIcon } from "@ionic/react";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import VendorSignUpPic from "../../assets/img/VendorSignUpPic.png";
import CircularProgress from "./CircularProgress";
import LoadingModal from "../ModalLoading/";
import { useSignUpUser } from "@/hooks/useAuth";

const SignUp2 = () => {
  const showPasswordRef = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();
  const formDataRef = useRef(location.state?.formData || {});
  const { mutate: signUp, isLoading } = useSignUpUser();

  const togglePasswordVisibility = () => {
    showPasswordRef.current = !showPasswordRef.current;
    document.getElementById("password").type = showPasswordRef.current ? "text" : "password";
    document.getElementById("confirm-password").type = showPasswordRef.current ? "text" : "password";
  };

  const handleBack = () => {
    navigate("/signup1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNo = document.getElementById("phoneNo").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    if (!name || !email || !phoneNo || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const userData = {
      name,
      email,
      phoneNo,
      password,
      role: "vendor",
      ...formDataRef.current,
    };

    signUp(userData, {
      onSuccess: () => {
        toast.success("Vendor registration successful!");
        navigate("/dashboard");
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || "Vendor registration failed");
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-100">
      <LoadingModal isLoading={isLoading} />
      <div className="flex flex-col md:flex-row bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
        <div className="flex flex-col items-center p-5 bg-[#FBF5DF]">
          <div className="font-bold text-2xl mb-4">
            <p className="text-[#B28400]">
              STYLE<span className="text-black">CONNECT</span>
            </p>
            <p className="text-[#B28400]">AFRICA</p>
          </div>
          <img
            src={VendorSignUpPic}
            alt="Vendor Sign Up"
            className="w-full max-w-xs"
          />
        </div>
        <div
          className="p-8 bg-[#FBFAF2] rounded-lg flex-1 overflow-y-auto"
          style={{ maxHeight: "90vh" }}
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-[#B28400] text-xl font-medium font-sans">
              Vendor Sign Up
            </p>
            <CircularProgress currentStep={2} totalSteps={2} />
          </div>
          <form
            className="flex flex-col gap-y-5 font-thin font-serif text-sm mt-4 text-center"
            onSubmit={handleSubmit}
          >
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="border rounded-lg h-14 w-full p-4"
            />
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="border rounded-lg h-14 w-full p-4"
            />
            <input
              id="phoneNo"
              type="text"
              placeholder="Phone No"
              className="border rounded-lg h-14 w-full p-4"
            />
            <div className="relative">
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                className="border rounded-lg h-14 w-full pr-12 p-4"
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
            <div className="relative">
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                className="border rounded-lg h-14 w-full pr-12 p-4"
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
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={handleBack}
                className="h-10 w-24 border border-[#DAA520] text-[#DAA520] text-center rounded-lg hover:bg-accent2 hover:text-white"
              >
                Back
              </button>
              <button
                type="submit"
                className="h-10 w-24 bg-[#DAA520] text-white text-center rounded-lg hover:bg-accent2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp2;
