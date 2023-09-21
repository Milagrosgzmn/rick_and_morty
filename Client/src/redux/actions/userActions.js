import { setUserId } from "../slices/userSlice";

export const setUser = (userId)=>{
    return (dispatch)=>{
        dispatch(setUserId(userId));
    }
};