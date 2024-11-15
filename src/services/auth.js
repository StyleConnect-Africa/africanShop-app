import { apiClient } from "./config";
export const apiVendorSignup = async (payload) => { //payload is an object containing all the details entered
    // return await apiClient.post("/api/auth/register/", payload);
    return await apiClient.post("/api/auth/register", payload);
    // first parameter of POST = 'path', second parameter = 'payload'...
}

export const apiLogin = async (payload) => {
    return apiClient.post("/api/auth/login", payload);
}

// export const apiProfile = async () => {
//     return apiClient.post("/users/me");
// }

