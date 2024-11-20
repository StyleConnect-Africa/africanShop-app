import { createSlice,createAsyncThunk, current, isRejectedWithValue } from "@reduxjs/toolkit";
import { apiSignup,apiLogin } from "@/services/auth";

const initialState={
    authStatus:"idle",
    currentUser:null,
    errorMessage:null,
}

export const signUpUser =createAsyncThunk("user/signup",async(payload)=>{
    try {
        const response = await apiSignup(payload);
        return response.data
        
    } catch (error) {
        return isRejectedWithValue(error.response.data) 
    }
});

export const loginUser=createAsyncThunk("user/login",async(payload)=>{
    try {
        const response = await apiLogin(payload)
        return response.data
        
    } catch (error) {
         return isRejectedWithValue(error.response.data) 
    }
})
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
          .addCase(signUpUser.pending, (state) => {
            state.authStatus = "loading";
          })
          .addCase(signUpUser.fulfilled, (state, action) => {
            state.authStatus = "success";
            state.currentUser = action.payload.user;
          })
          .addCase(signUpUser.rejected, (state, action) => {
            (state.authStatus = "failed"),
              (state.errorMessage = action.error.message);
          })
          .addCase(loginUser.pending, (state) => {
            state.authStatus = "loading";
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.authStatus = "success";
            state.currentUser = action.payload.user;
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.authStatus = "failed";
            state.errorMessage =
              action.payload?.message || action.error.message;
          });
    },
})

export const selectAuthStatus =(state)=>state.user.authStatus;
export const selectCurrentUser=(state)=>state.user.currentUser;
export const selectUserRole = (state) => state.user.currentUser?.role;
export const selectErrorMessage=(state)=>state.user.errorMessage;
export default userSlice.reducer;
