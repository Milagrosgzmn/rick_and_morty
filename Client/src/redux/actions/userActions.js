import { setUserId, logOutUser } from "../slices/userSlice";

export const setUser = (userId)=>{
    return (dispatch)=>{
        dispatch(setUserId(userId));
    }
};
export const resetUser = ()=>{
    return (dispatch)=>{
        dispatch(logOutUser());
    }
};