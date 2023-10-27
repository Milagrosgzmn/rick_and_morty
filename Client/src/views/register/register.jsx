import { useState } from "react";
import Form from "../../components/Form/Form";
import SignUp from "../../components/signup/signup";

export default function Register ({login}){
    const [isRegistered, setIsRegistered] = useState(true);



    function handleRegister (){
        setIsRegistered(false);
    }
    function handleLogin (){
        setIsRegistered(true);
    }

    return (
    <main className="w-screen">
        {isRegistered && 
        <div className="flex flex-col items-center">
            <Form login={login}/>
            <p onClick={handleRegister} className=" black underline">¿No está registrado? Regístrese aquí</p>
        </div>}
        {!isRegistered && 
        <div className="flex flex-col items-center">
            <SignUp/> 
            <p onClick={handleLogin} className=" black underline">¿Ya tiene una cuenta? Inicie Sesion</p>
        </div>}
    </main>
    );
}
