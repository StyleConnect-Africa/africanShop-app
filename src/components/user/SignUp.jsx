import React from "react";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import VendorSignUpPic from "../../assets/img/VendorSignUpPic.png"

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex">
        <div className="bg-[#FBF5DF] rounded-lg">
          <div className="flex p-5 font-bold text-xl">
            <p className="text-[#B28400] font-serif">
              STYLE<span className="text-black">CONNECT</span>
            </p>
            <p className="text-[#B28400] font-serif text-xl">AFRICA</p>
          </div>
          <img src={VendorSignUpPic} alt="" className="" />
        </div>
        <div className="p-5 bg-[#FBFAF2] rounded-lg -ml-8">
          <div>
            <div className="flex flex-col gap-y-2">
              <p className="text-[#B28400] text-3xl font-bold text-center">
                Create Account
              </p>
              <div className="flex gap-28">
                <Link className="text-[#B28400] font-bold">User</Link>
                <Link to="/signup1" className="text-slate-500">Vendor</Link>
              </div>
            </div>
            <form className=" flex flex-col gap-y-5 mt-2 text-center">
              <div className="">
                <input
                  type="text"
                  name="text"
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
                  name="number"
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
                  placeholder="Password"
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
            </form>
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
            <div className="flex gap-28 mt-5">
              <Link className="h-7 w-20 bg-[#F7DC6F] text-center rounded-lg hover:bg-accent2 hover:text-white">
                Sign Up
              </Link>
              <Link
                to="/login"
                className="h-7 w-20 border border-[#F7DC6F] text-[#F7DC6F]  text-center rounded-lg  hover:bg-accent2 hover:text-white hover:border-accent2"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={SignUpPrint} alt="" className="size-36 absolute right-[1px] bottom-[1px] opacity-50 rotate-12"/> */}
      {/* <div className="bg-red-800 h4 w-4 rounded-full"></div> */}
    </div>
  );
};

export default SignUp;
