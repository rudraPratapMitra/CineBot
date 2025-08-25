import {createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        signInReducer:(state,action)=>{
            return action.payload
        },
        signOutReducer:()=>{
            return null;
        }
    }

})

export const {signInReducer,signOutReducer}=userSlice.actions;
export default userSlice.reducer;