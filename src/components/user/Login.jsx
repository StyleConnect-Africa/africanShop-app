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
      <div className="p-10 bg-[#FBFAF2] rounded-lg -ml-8">
          <div>
            <div className="flex flex-col mb-6">
              <p className="text-[#B28400] text-3xl font-bold text-center">
                Log In
              </p>
              
            </div>
            <form className=" flex flex-col gap-y-5 mt-2 text-center">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="border rounded-lg h-14 w-[400px] p-4"
                />
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
            <div className="flex mt-6 justify-between">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 border-none outline-none border-[#F7DC6F] self-center"
                />
                <Link>
                 <p>Remember me</p>
                </Link>
              </div>
              <Link>Forget Password</Link>
            </div>
            <div className="flex mt-10">
              <Link className="h-7 w-20 bg-[#F7DC6F] text-center rounded-lg hover:bg-accent2 hover:text-white">
                Log in
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#FBF5DF] rounded-lg">
          <div className="flex p-5 font-bold text-xl">
            <p className="text-[#B28400] font-serif">
              STYLE<span className="text-black">CONNECT</span>
            </p>
            <p className="text-[#B28400] font-serif text-xl">AFRICA</p>
          </div>
          <img src={VendorSignUpPic} alt="" className="size-[450px]" />
        </div>
        
      </div>
      {/* <img src={SignUpPrint} alt="" className="size-36 absolute right-[1px] bottom-[1px] opacity-50 rotate-12"/> */}
      {/* <div className="bg-red-800 h4 w-4 rounded-full"></div> */}
    </div>
  );
};

export default SignUp;
