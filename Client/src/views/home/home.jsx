
import Cards from '../../components/Cards/Cards';

import './home.css';

export default function Home ({characters,onClose}){

return (
   <div className='home'>
      <Cards onClose={onClose} characters={characters}/>
      
   </div>
);

}