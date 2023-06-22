import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slices/LoginSlice";
const store = configureStore({
 reducer:{
    loginS : LoginSlice
 }   
})

export default store;