import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";
const store = configureStore({
    reducer:{
        user:userSlice,
        products:productSlice,
    },
})
export default store