import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
    // In reducer have a multiple Slice 
    reducer:{
        user:userReducer
    }
})

// I have created this store and i have provided this store in our hole app
export default appStore;