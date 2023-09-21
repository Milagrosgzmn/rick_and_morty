import { createSlice } from "@reduxjs/toolkit"

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState:{
        favorites:[],
        backup:[],
    },
    reducers:{
        addFavorite: (state, action)=>{
            state.favorites = action.payload;
            state.backup = action.payload;
        },
        deleteFavorite: (state, action)=>{
            state.favorites = action.payload;
            state.backup = action.payload;
        },
        orderFavs: (state, action)=>{
            let miCopia;
            if(action.payload==='A'){
                 miCopia = state.favorites.slice().sort((a,b)=> a.id < b.id ? -1 : 1);
            }
            if (action.payload==='D') {
                miCopia = state.favorites.slice().sort((a,b)=> a.id > b.id ? -1 : 1);
            }
            state.favorites= miCopia;
        },
        filterFavs : (state, action)=>{
            const filtered = state.backup.slice().filter(character => character.gender === action.payload);
            state.favorites = filtered;
        },
        // eslint-disable-next-line no-unused-vars
        resetFavs : (state, action)=>{
            state.favorites = state.backup;
        },
        setFavorites: (state, action)=>{
            state.favorites= action.payload;
            state.backup = action.payload;
        }
    }
})
export const {filterFavs, orderFavs, deleteFavorite, addFavorite,resetFavs, setFavorites} = favoriteSlice.actions;
export default favoriteSlice.reducer;