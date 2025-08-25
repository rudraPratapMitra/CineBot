import { createSlice } from "@reduxjs/toolkit";

const langSlice=createSlice({
    name:"language",
    initialState:{
        language: "en",
    },
    reducers:{
        setLanguage:(state,action)=>{
            state.language=action.payload
        }
    }

})  

export default langSlice.reducer;
export const {setLanguage}=langSlice.actions