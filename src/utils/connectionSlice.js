import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name:'connection',
    initialState:[],
    reducers:{
        addConnections : (state, action)=>{
            return action.payload
        },
        removeConnection : ()=> null
    }
})

export const {addConnections,removeConnection} = connectionSlice.actions;

export default connectionSlice.reducer