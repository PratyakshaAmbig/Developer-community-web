import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name:'language',
    initialState:{
        language:localStorage.getItem('language')
    },
    reducers:{
        toggleLanguage : (state, action)=>{
        state.language = action.payload;
        localStorage.setItem('language', state.language);
    }
    }
})

export const {toggleLanguage} = languageSlice.actions

export default languageSlice.reducer