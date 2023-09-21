import { useState } from 'react';
import style from './SearchBar.module.css'
export default function SearchBar(props) {
   const {onSearch} = props;
   const [id, setId]=useState('');

   function handleChange(e){
      setId(`${e.target.value}`);
   }
   return (
      <div>
         <input onChange={handleChange} value={id} className={style.input} type='search' />
         <button className={style.botonAgregar} onClick={() => onSearch(id)}>AGREGAR</button>
      </div>
   );
}
