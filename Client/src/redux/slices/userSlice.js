import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        id:'',
    },
    reducers:{
        setUserId : (state, action)=>{
            state.id = action.payload;
        },
        logOutUser:(state)=>{
            state.id=''
        }
    }
});

export const {setUserId, logOutUser} = userSlice.actions;
export default userSlice.reducer;