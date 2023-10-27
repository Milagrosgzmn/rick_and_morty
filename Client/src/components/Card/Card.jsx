import { Link } from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions/favoritesActions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import style from './Card.module.css';



export default function Card(props) {
   const {character, id, onClose}= props;

   const {favorites} = useSelector((state)=>{
      return state.favorites;
   });
   const user = useSelector((state)=>{
      return state.user;
   });

   const [fav, setIsFav]= useState(false);
   const dispatch = useDispatch();
   const [closeBtn, setCloseBtn] = useState(true);
   useEffect(() => {
      if (!onClose) {
        setCloseBtn(false);
      }
    }, [onClose]);
 

   function handleFavorite(){
      if(fav=== true){
         setIsFav(false);
         dispatch(removeFav(character.id, user.id));
      }
      if(fav=== false){
         setIsFav(true);
         dispatch(addFav({...character, userId: user.id}));
      }
   }
 
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [favorites, id]);

   
   

   return (
      <article >
         <div className='flex justify-center items-center pb-2 '>{closeBtn && (<button className={style.botonCerrar} onClick={()=>(onClose(id))}>X</button>)}
         {
            fav ? (
               <button className='hover:bg-white
               rounded-full' onClick={handleFavorite}>❤️</button>
            ) : (
               <button className='hover:bg-red-700 rounded-full' onClick={handleFavorite}>🤍</button>
            )
         }</div>
         <Link to={`/detail/${character.id}`}>
         <div className ={`${style.card} w-56` }  >
            <div>
            <img src={character.image} alt={character.name} />
            </div>
            <div className={style.text}>
            <h1>{(character.name).toUpperCase()}</h1>   
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            </div>
         </div>
         </Link>
      </article>
   );
}