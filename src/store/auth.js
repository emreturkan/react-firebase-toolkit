import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name:'auth',
    initialState:{
        user: JSON.parse(localStorage.getItem('users')) ?? false
    },
    reducers:{
        login:(state,action)=>{
            localStorage.setItem('users',JSON.stringify(action.payload))
            state.user = action.payload
        },
        logout:(state)=>{
            localStorage.removeItem('users')
            state.user = false
        }
    }
})


export const {login,logout} = auth.actions
export default auth.reducer