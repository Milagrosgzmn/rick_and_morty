import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import './style.css';

export default function Detail (){

    const {id}= useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <section className="w-11/12 flex justify-center m-auto">
            <article id='detail' className="w-full flex items-center justify-center m-16">
                <div className="w-2/5">
                    <h1 className="font-semibold text-xl text-mygreen">{character.name}</h1>
                    <div className="field">
                        <h3>STATUS: </h3>
                        <p>{character.status}</p>
                    </div>
                    <div className="field">
                        <h3>SPECIES: </h3>
                        <p>{character.species}</p>
                    </div>
                    <div className="field">
                        <h3>GENDER: </h3>
                        <p>{character.gender}</p>
                    </div>
                    <div className="field">
                        <h3>ORIGIN: </h3>
                        <p>{character.origin}</p>
                    </div>


                </div>
                <div>
                    <img className="rounded-xl" src={character?.image} alt={character.name} />
                </div>
            </article>
        </section>
    );
}