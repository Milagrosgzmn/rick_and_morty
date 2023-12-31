import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import style from '../../components/Cards/Cards.module.css';
import { orderCards, filterCards, resetCards} from "../../redux/actions/favoritesActions";
import { useEffect, useState } from "react";

export default  function Favorites(){

    const {favorites} = useSelector((state)=>{
        return state.favorites;
     });

     useEffect(()=>{
        
     }, [favorites]);

    const dispatch = useDispatch();
    const [aux, setAux]= useState(false);

    function handleOrder (e){
        dispatch(orderCards(e.target.value));
        if(aux){
            setAux(false);
        }else{
             setAux(true);
        }
    }

    function handlerFilter (e){
        dispatch(filterCards(e.target.value));
    }
    function handleReset (){
        dispatch(resetCards());
    }

    return (
        <div className="mt-4">
            <select className="p-2 bg-slate-900 rounded-md mt-2 mx-2" onChange={handleOrder} name="" id="">
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select className="p-2 bg-slate-900 rounded-md mt-2 mx-2" onChange={handlerFilter} name="" id="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            <button className="p-2 bg-slate-900 rounded-md mt-2 mx-2" onClick={handleReset} > Reset Filters</button>
            
            <div className={style.cardsList}>
                {favorites?.map(favorite =>(
                <Card id={favorite.id} key={favorite.id} character={favorite}></Card>
            ))}
            </div>
            
        </div>
    )
}