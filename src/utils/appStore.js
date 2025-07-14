import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";
import requestSlice from "./requestSlice";
import languageReducer from "./languageSlice";

const appStore = configureStore({
    // In reducer have a multiple Slice 
    reducer:{
        user:userReducer,
        feed:feedReducer,
        connections:connectionReducer,
        requests:requestSlice,
        config:languageReducer
    }
})

// I have created this store and i have provided this store in our hole app
export default appStore;