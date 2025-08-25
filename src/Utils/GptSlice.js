import { createSlice } from "@reduxjs/toolkit";

const GptSlice= createSlice({
    name:"gpt",
    initialState:{
        showGptView:false,
        gptMovies:null
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptView=!state.showGptView
            state.gptMovies=null;
        },
        addGptMovieResult:(state,action)=>{
            state.gptMovies=action.payload;
        }
    }
})

export default GptSlice.reducer;
export const {toggleGptSearchView,addGptMovieResult}=GptSlice.actions;