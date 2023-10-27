import axios from 'axios';
import Swal from 'sweetalert2';

import {getCharById, addRandm, deleteChar} from '../slices/characterSlice';

export const getCharacter = (id)=>{
    const endpoint = `/character/+${id}`;
    return async (dispatch) => {
       try {
        const { data } = await axios(endpoint);
        dispatch(getCharById(data));
       } catch (error) {
          console.error(error.message);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error al agregar el personaje.',
          })
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