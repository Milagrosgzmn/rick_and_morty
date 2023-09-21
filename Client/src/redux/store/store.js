import {configureStore} from "@reduxjs/toolkit";

import characters from "../slices/characterSlice";
import favorites from "../slices/favoriteSlice";
import user from '../slices/userSlice';

export default configureStore({
    reducer:{
        characters: characters,
        favorites: favorites,
        user: user,
    }
})