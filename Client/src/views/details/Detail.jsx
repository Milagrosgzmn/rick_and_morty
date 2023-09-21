import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


export default function Detail (){

    const {id}= useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <section>
            <article>
                <div>
                    <h1>{character.name}</h1>
                    <div>
                        <h3>STATUS</h3>
                        <p>{character.status}</p>
                    </div>
                    <div>
                        <h3>SPECIES</h3>
                        <p>{character.species}</p>
                    </div>
                    <div>
                        <h3>GENDER</h3>
                        <p>{character.gender}</p>
                    </div>
                    <div>
                        <h3>ORIGIN</h3>
                        <p>{character.origin}</p>
                    </div>


                </div>
                <div>
                    <img src={character?.image} alt={character.name} />
                </div>
            </article>
        </section>
    );
}