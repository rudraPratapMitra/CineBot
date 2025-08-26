import { createSlice } from "@reduxjs/toolkit";

const GptSlice= createSlice({
    name:"gpt",
    initialState:{
        showGptView:false,
        gptMovies:null,
        isLoading:false
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptView=!state.showGptView
            state.gptMovies=null;
        },
        addGptMovieResult:(state,action)=>{
            state.gptMovies=action.payload;
            state.isLoading = false; 
        },
        setLoadingState:(state,action)=>{
            state.isLoading=action.payload;
        }
    }
})

export default GptSlice.reducer;
export const {toggleGptSearchView,addGptMovieResult,setLoadingState}=GptSlice.actions;