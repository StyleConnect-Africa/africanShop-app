import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { apiSignup,apiLogin } from "@/services/auth";
import { saveToken,saveUserData } from "@/utils/token";
import { toast } from "react-toastify";
import { useState } from "react";


export const useLoginUser=()=>{
    const navigate= useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    return useMutation(apiLogin,{
        onMutate: () => {
            setIsLoading(true);
        },
        onSuccess:(response)=>{
            setIsLoading(false);
            const { data } = response || {};
            if(data && data.user){
              saveToken(data.token);
              saveUserData(data.user, data.token);
              const rolePath = data.user.role === "vendor" ? "/dashboard" : "/shoppage";
              navigate(rolePath.trim());
              toast.success("Login successful!");
            }else{
                console.error("User data is undefined");
                toast.error("User data is undefined");
            }
        },
        onError:(error)=>{
            setIsLoading(false);
            toast.error(error.response?.data?.message || "An error occurred");
        }
    })
}

export const  useSignUpUser=()=>{
    const navigate= useNavigate();
    return useMutation(apiSignup,{
        onSuccess:(data)=>{
            localStorage.removeItem("HEADER");
           
            navigate('/login');
        },
        onError:(error)=>{
            toast.error(error.response.data.message)
        }
    }
)
}