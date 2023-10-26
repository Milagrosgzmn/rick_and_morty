import { useState } from 'react';
export default function SearchBar(props) {
   const {onSearch} = props;
   const [id, setId]=useState('');

   function handleChange(e){
      setId(`${e.target.value}`);
   }
   return (
      <div className='m-2 flex items-center
      '>
         <input onChange={handleChange} value={id} className="rounded-full text-black px-4" type='search' />
         <button className="rounded-full px-4 font-semibold py-2 bg-mygreen mx-4
         hover:bg-orange-500" onClick={() => onSearch(id)}>AGREGAR</button>
      </div>
   );
}
