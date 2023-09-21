import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        id:'',
    },
    reducers:{
        setUserId : (state, action)=>{
            state.id = action.payload;
        }
    }
});

export const {setUserId} = userSlice.actions;
export default userSlice.reducer;