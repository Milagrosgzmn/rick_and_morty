/* eslint-disable no-useless-escape */
export default function validation (input){
    let errors = {};
    if (!input.email){
        errors.email= 'Email requerido'
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
        errors.email='Email invalido';
    }
    if (input.email.length>100) {
        errors.email='Máximo 35 caracteres';
    }
     if (!input.password) {
        errors.password= 'Contraseña requerida';
    }
    if(input.password.length<6 || input.password.length>10){
        errors.password= 'La contraseña debe tener entre 6 y 10 caracteres';
    }
    if (!/.*[0-9].*/.test(input.password)) {
        errors.password= 'La contraseña debe tener al menos un digito';
    }
   
    return errors;
}