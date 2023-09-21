/* eslint-disable react/prop-types */
import { useState } from "react";
import validation from "./validation";

export default function Form ({login}){
    
    const [errors, setErrors] = useState({});

    const [userData, setUserData]= useState({
        email:'',
        password:''
    });

    function handleChange(event){
        setUserData({
            ...userData,
            [event.target.name]: `${event.target.value}`
        });
        setErrors(
            validation({
            ...userData,
            [event.target.name]: `${event.target.value}`
        }));
    }
    function submitHandler (e){
        e.preventDefault();
        if(!errors.email && !errors.password){
             login(userData);
        }
    }

    return (
        <section>
            <form onSubmit={submitHandler}>
            <label >Email</label>
            <input 
            placeholder="Ingrese su email" 
            onChange={handleChange}  
            name="email" 
            type="email"  required/>

            <label >Password</label>
            <input 
            placeholder="Ingrese su password" 
            onChange={handleChange} 
            name="password" 
            type="password" required/>

            <button onClick={submitHandler} type="submit">SUBMIT</button>
        </form>
        </section>
    );
}