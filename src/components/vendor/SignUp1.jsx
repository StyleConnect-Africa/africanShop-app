import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import VendorSignUpPic from "../../assets/img/VendorSignUpPic.png";
import CircularProgress from "./CircularProgress";
import { toast } from "react-toastify";

const SignUp1 = () => {
  const formDataRef = useRef({});
  const navigate = useNavigate();

  const handleNext = () => {
    const storeName = document.getElementById("storeName").value.trim();
    const businessEmail = document.getElementById("businessEmail").value.trim();
    const businessPhoneNo = document.getElementById("businessPhoneNo").value.trim();

    if (!storeName || !businessEmail || !businessPhoneNo) {
      console.log("Validation failed: Missing fields");
      toast.error("All fields are required");
      return;
    }

    formDataRef.current.storeName = storeName;
    formDataRef.current.businessEmail = businessEmail;
    formDataRef.current.businessPhoneNo = businessPhoneNo;
    formDataRef.current.role = "vendor";

    navigate("/signup2", { state: { formData: formDataRef.current } });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-100">
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
            <CircularProgress currentStep={1} totalSteps={2} />
          </div>
          <form className="flex flex-col gap-y-5 mt-4 text-center">
            <input
              id="storeName"
              type="text"
              placeholder="Store Name"
              className="border rounded-lg h-14 w-full p-4"
              required
            />
            <input
              id="businessEmail"
              type="email"
              placeholder="Business Email"
              className="border rounded-lg h-14 w-full p-4"
              required
            />
            <input
              id="businessPhoneNo"
              type="text"
              placeholder="Business Phone No"
              className="border rounded-lg h-14 w-full p-4"
              required
            />
            <input
              id="role"
              type="text"
              value="vendor"
              disabled
              className="border rounded-lg h-14 w-full p-4 bg-gray-200"
            />
            <button
              type="button"
              onClick={handleNext}
              className="h-10 w-full bg-[#DAA520] text-white text-center rounded-lg hover:bg-accent2 mt-4"
            >
              Next
            </button>
            <div className="mt-2">
              <p className="text-sm font-serif font-thin">
                Already a Vendor?{" "}
                <button
                  type="button"
                  onClick={handleLogin}
                  className="text-[#DAA520]  text-sm font-serif font-semibold hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp1;
