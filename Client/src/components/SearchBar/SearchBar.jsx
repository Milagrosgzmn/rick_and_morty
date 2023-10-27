import { useState } from 'react';
import {useOnKeyPress} from '../../hooks/useOnKeyPress';

export default function SearchBar(props) {
   const {onSearch} = props;
   const [id, setId]=useState('');
   useOnKeyPress(()=>{
      onSearch(id)
      setId('');
   }, 'Enter');

   function handleChange(e){
      setId(`${e.target.value}`);
   }
   return (
      <div className='m-2 flex items-center
      '>
         <input onChange={handleChange} value={id} className="rounded-full text-black px-4" type='search' />
         <button className="text-white rounded-full px-4 font-semibold py-2 bg-mygreen mx-4
         hover:bg-white hover:border-green-500 hover:text-mygreen" onClick={() => {onSearch(id)
          setId('');
         }
         }>AGREGAR</button>
      </div>
   );
}
