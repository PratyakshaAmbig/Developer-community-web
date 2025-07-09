import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";

const appStore = configureStore({
    // In reducer have a multiple Slice 
    reducer:{
        user:userReducer,
        feed:feedReducer
    }
})

// I have created this store and i have provided this store in our hole app
export default appStore;