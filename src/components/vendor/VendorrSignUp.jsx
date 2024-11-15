import React from "react";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";
import { Link, useNavigate } from "react-router-dom";
import VendorSignUpPic from "../../assets/img/VendorSignUpPic.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoChevronForwardOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiVendorSignup } from "../../services/auth";

const VendorSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);

      // Prepare form data
      const formData = new FormData(event.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const phoneNo = formData.get("phoneNo");
      const password = formData.get("password");
      const role = formData.get("role");
      const storeName = formData.get("storeName");
      const businessEmail = formData.get("businessEmail");
      const businessPhoneNo = formData.get("businessPhoneNo");

      // Payload for the API
      const payload = {
        name,
        email,
        phoneNo,
        password,
        role,
        storeName,
        businessEmail,
        businessPhoneNo,
      };

      // Call the API to sign up
      const response = await apiVendorSignup(payload);
      console.log(response.data);

      // If sign-up is successful, show success toast and navigate to login
      toast.success("You've signed up successfully!");

      setTimeout(() => {
        navigate("/login"); // Navigate to login page after the toast
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Sign-up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex">
        <div className="bg-[#FBF5DF] rounded-lg">
          <div className="flex p-5 font-bold text-2xl">
            <p className="text-[#B28400]">
              STYLE<span className="text-black">CONNECT</span>
            </p>
            <p className="text-[#B28400]">AFRICA</p>
          </div>
          <img src={VendorSignUpPic} alt="" />
        </div>
        <div className="p-5 bg-[#FBFAF2] rounded-lg -ml-8">
          <div>
            <div className="flex flex-col gap-y-5">
              <p className="text-[#B28400] text-3xl font-bold text-center">
                Sign Up
              </p>
              <div className="flex gap-28">
                <Link to="/signup" className="text-slate-500 font-bold">
                  User
                </Link>
                <Link to="/signup1" className="text-[#B28400] font-bold">
                  Vendor
                </Link>
              </div>
              <div>
                <p className="text-[#B28400]">Contact Information</p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col gap-y-5 mt-2 text-center"
            >
              <div className="">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="border rounded-lg h-14 w-[400px] p-4"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="border rounded-lg h-14 w-[400px] p-4"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="phoneNo"
                  placeholder="Phone"
                  className="border rounded-lg h-14 w-[400px] p-4"
                />
              </div>
              <div>
                <select
                  name="role"
                  className="border rounded-lg h-14 w-[400px] p-4"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Role
                  </option>
                  <option value="vendor">Vendor</option>
                  <option value="user">User</option>
                </select>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder=" Create Password"
                  className="border rounded-lg h-14 w-[400px] pr-12 p-4"
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
              <div className="">
                <input
                  type="text"
                  name="storeName"
                  placeholder="Business Name"
                  className="border rounded-lg h-14 w-[400px] p-4"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="businessEmail"
                  placeholder="Business Email"
                  className="border rounded-lg h-14 w-[400px] p-4"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="businessPhoneNo"
                  placeholder=" Business Phone"
                  className="border rounded-lg h-14 w-[400px] p-4"
                />
              </div>

              <div className="flex mt-4">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 border-none outline-none border-[#F7DC6F] self-center"
                  />
                  <Link>
                    Agree to <span className="text-blue-700">terms</span> &{" "}
                    <span className="text-blue-700">conditions</span>
                  </Link>
                </div>
              </div>
              <div className="flex gap-28 mt-5 ">
                <Link
                  to="/vendorlogin"
                  className="h-7 w-20 border border-[#DAA520] text-[#DAA520] text-center rounded-lg hover:bg-accent2 hover:text-white hover:border-accent2"
                >
                  Log in
                </Link>
                <button
                  type="submit"
                  className=" h-7 w-20 bg-[#DAA520] text-white text-center rounded-lg flex justify-center hover:bg-accent2 hover:text-white"
                >
                  {loading ? "Loading..." : "Sign Up"}
                  <IoChevronForwardOutline className="self-center size-4" />
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      {/* <img src={SignUpPrint} alt="" className="size-36 absolute right-[1px] bottom-[1px] opacity-50 rotate-12"/> */}
      {/* <div className="bg-red-800 h4 w-4 rounded-full"></div> */}
    </div>
  );
};

export default VendorSignUp;
