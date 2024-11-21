import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { apiSignup,apiLogin } from "@/services/auth";
import { saveToken,saveUserData } from "@/utils/token";
import { toast } from "react-toastify";


export const useLoginUser=()=>{
    const navigate= useNavigate();
    return useMutation(apiLogin,{
        onMutate: () => {
            // Notify the user that the login process has started
            toast.info("Logging in...");
        },
        onSuccess:(response)=>{
            // console.log('Login response:', response);

            const { data } = response || {};
            if(data && data.user){
              saveToken(data.token);
              saveUserData(data.user, data.token);
              // Trim the route path to remove any extra spaces
              const rolePath = data.user.role === "vendor" ? "/dashboard" : "/";
              navigate(rolePath.trim());
              toast.success("Login successful!");
            }else{
                console.error("User data is undefined");
                toast.error("User data is undefined");
            }
        },
        onError:(error)=>{
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