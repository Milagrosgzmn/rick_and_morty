/* eslint-disable react/prop-types */
import { useState } from "react";
import validation from '../Form/validation';
import axios from 'axios';
import Swal from "sweetalert2";
import '../Form/formStyle.css';

export default function SignUp (){
    // eslint-disable-next-line no-unused-vars
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
            axios.post('/signup',
                userData).then(({data})=>{
                if(data){
                    Swal.fire(
                        '¡Excelente!',
                        '¡Te registraste con exito!',
                        'success'
                      )
                }
            }).catch(error=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hubo un error',
                  })
                console.error(error);
            });
            
        }
    }

    return (
        <section id='formL' className="flex flex-col w-full justify-center items-center">
        <h2 className="text-3xl text-center py-4">Regístrese</h2>
            <form id="signup" onSubmit={submitHandler}
            className="flex flex-col w-96 bg-gray-800 bg-opacity-90 p-6 m-4 rounded-xl">
            <label htmlFor="email"
            className="font-semibold  text-white text-xl" >Email</label>
            <input id="email"
            className="rounded-2xl px-4 py-1 my-4 text-black"
            placeholder="Ingrese su email" 
            onChange={handleChange}  
            name="email" 
            type="email"  required/>
            <div className="h-6 my-1">
            <span className="text-red-500 font-semibold" >{errors.email ? `${errors.email}*`: errors.email}</span>
            </div>
            <label htmlFor="password" className="font-semibold black text-white text-xl" >Contraseña</label>
            <input 
            id="password"
            className="rounded-2xl px-4 py-1 my-4 text-black"
            placeholder="Ingrese su constraseña" 
            onChange={handleChange} 
            name="password" 
            type="password" required/>
            <div className="h-6 my-1">
            <span className="text-red-500 font-semibold" >{errors.password ? `${errors.password}*`: errors.password}</span>
            </div>

            <div className=" flex justify-center">
                <button 
            className="bg-mygreen p-2 rounded-full w-1/3 my-4"
            onClick={submitHandler} type="submit">ENVIAR</button>
            </div>
            
        </form>
        </section>
    );
}