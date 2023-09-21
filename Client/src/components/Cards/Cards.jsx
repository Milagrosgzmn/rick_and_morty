import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards(props) {

const {onClose} = props;
const {allCharacters} = useSelector(state=>{
   return state.characters;
});

   return <div className={style.cardsList}>
      {allCharacters?.map((character) =>(
            <Card onClose={onClose} id={character.id} key={character.id} character={character}></Card>
      ))
      }
   </div>;
}
