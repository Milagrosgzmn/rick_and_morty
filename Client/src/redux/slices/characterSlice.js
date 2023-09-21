import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
    name:"characters",
    initialState:{
        allCharacters:[],
    },
    reducers:{
        getCharById : (state, action)=>{
            state.allCharacters = [...state.allCharacters, action.payload]
        },
        addRandm : (state, action)=>{
            state.allCharacters = [...state.allCharacters, action.payload]
        },
        deleteChar: (state, action)=>{
            const id=Number(action.payload);
            const miCopia= state.allCharacters.filter(character => character.id !== id)
            state.allCharacters = miCopia;
        }

    }
});

export const {getCharById, addRandm, deleteChar} = characterSlice.actions;
export default characterSlice.reducer;