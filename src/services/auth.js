import { apiClient } from "./Config";
export const apiSignup = async (payload) => { //payload is an 
    return await apiClient.post("/auth/register", payload);
    
}
export const apiLogin = async (payload) => {
    return apiClient.post("/auth/login", payload);
}
console.log(apiLogin);

// export const apiProfile = async () => {
//     return apiClient.post("/users/me");
// }

