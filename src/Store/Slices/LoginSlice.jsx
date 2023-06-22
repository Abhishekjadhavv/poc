import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:'login',
    initialState:false,
    reducers:{
       login(state,action){
         return action.payload
       },
       logOut(state,action){
         return action.payload
       }   
    }
})

export default loginSlice.reducer;
export const {login,logOut} = loginSlice.actions;