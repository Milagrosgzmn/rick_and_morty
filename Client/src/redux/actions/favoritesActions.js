import axios from 'axios';

import {filterFavs, orderFavs, deleteFavorite, addFavorite,resetFavs, setFavorites} from '../slices/favoriteSlice';

export const addFav = (character)=>{
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
       try {
        const { data } = await axios.post(endpoint, character);
        dispatch(addFavorite(data));
       } catch (error) {
          console.error(error.message);
       }
    } 
};
export const removeFav = (id,userId) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}_${userId}`;
    return async (dispatch) => {
       try {
        const {data} = await axios.delete(endpoint);
        dispatch(deleteFavorite(data));
       } catch (error) {
          console.error(error.message);
       }
    } 
};
export const filterCards = (gender)=>{
    return (dispatch)=>{
        dispatch(filterFavs(gender))
    }
};
export const orderCards = (orden)=>{
    return (dispatch)=>{
        dispatch(orderFavs(orden))
    }
};
export const resetCards =()=>{
    return (dispatch)=>{
        dispatch(resetFavs())
    }
};
export const setFavs =(favs)=>{
    return (dispatch)=>{
        dispatch(setFavorites(favs))
    }
};