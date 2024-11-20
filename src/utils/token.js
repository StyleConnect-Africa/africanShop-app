// Function to save the token to localStorage
export const saveToken = (token) => {
  localStorage.setItem("africanShopUserToken", token);
};

// Function to retrieve the token from localStorage

export const getToken=()=>{
    return localStorage.getItem("africanShopUserToken")
}
// Function to remove the token from localStorage
export const removeToken=()=>{
    localStorage.removeItem("africanShop")
}
// Function to save user data to localStorage
export const saveUserData = (user) => {
  localStorage.setItem("USER", JSON.stringify(user));
};

// Function to retrieve user data from localStorage
export const getUserData = () => {
  const user = localStorage.getItem("USER");
  return user ? JSON.parse(user) : null;
};

// Function to remove user data from localStorage
export const removeUserData = () => {
  localStorage.removeItem("USER");
};
