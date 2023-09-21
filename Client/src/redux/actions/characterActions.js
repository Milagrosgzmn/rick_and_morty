import axios from 'axios';

import {getCharById, addRandm, deleteChar} from '../slices/characterSlice';

export const getCharacter = (id)=>{
    const endpoint = `http://localhost:3001/rickandmorty/character/+${id}`;
    return async (dispatch) => {
       try {
        const { data } = await axios(endpoint);
        dispatch(getCharById(data));
       } catch (error) {
          console.error(error.message);
       }
    } 
};
export const addRandom = (character)=>{
   return (dispatch)=>{
       dispatch(addRandm(character))
   }
};
export const deleteCharacter = (id)=>{
   return (dispatch)=>{
       dispatch(deleteChar(id))
   }
};