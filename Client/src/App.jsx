import Home from './views/home/home';
import Error from './views/error/Error';
import About from './views/about/About';
import Detail from './views/details/Detail';
import NavBar from './components/NavBar/NavBar';
import Favorites from './views/Favorites/favorites';
import Register from './views/register/register';
import Swal from "sweetalert2";

import { useDispatch, useSelector } from 'react-redux';
import { setFavs } from './redux/actions/favoritesActions';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';
import { getCharacter, addRandom, deleteCharacter } from './redux/actions/characterActions';
import { setUser, resetUser } from './redux/actions/userActions';

const apiBackUrl = import.meta.env.VITE_API_BACK_URL;
const urlApi = `${apiBackUrl}/rickandmorty`
axios.defaults.baseURL = urlApi;

function App() {
   const {allCharacters} = useSelector(state=>state.characters);
   const [access, setAccess] = useState(false);
   const dispatch = useDispatch();

   
   const navigate = useNavigate();
   let location = useLocation();

   async function searchHandler(id) {
      dispatch(getCharacter(id));
   }
   
   async function addingRandom(){
      let loTengo =[];
      let random= Math.floor(Math.random()*826);

      try {
         if(!loTengo.includes(random)){
            loTengo.push(random);
            const {data} = await axios(`/character/${random}`);
            if (data.name) {
               if(!allCharacters.includes(data))
                 dispatch(addRandom(data));
               } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      } catch (error) {
         console.error(error.message);
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error al agregar el personaje.',
          })
      }
   }
   function closeCard (id){
      dispatch(deleteCharacter(id))
   }
   function handleLogOut(){
        dispatch(resetUser());
        setAccess(false);
   }

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = '/login';

         const {data} = await axios.post(URL,{
            email,
            password,
         });
         if (data) {
         dispatch(setUser(data.id));
         dispatch(setFavs(data.favorites));
         setAccess(data);
         }
         
      } catch (error) {
         console.error(error.message);
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error al iniciar sesión.',
          });
      }
   }
   

   
   useEffect(() => {
      !access && navigate('/');
      access && navigate('/home');
   }, [access]);

   return (
     <div>
         { ( location.pathname !== '/' && location.pathname !== '*' ) && <NavBar handleLogOut={handleLogOut} addingRandom={addingRandom} onSearch={searchHandler}></NavBar>}
         
         <Routes>
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='/' element= {<Register login={login} />}/>
            <Route path='/home' element= {<Home onClose={closeCard}/>}/>
            <Route path='/detail/:id' element= {<Detail/>}/>
            <Route path='/about' element= {<About/>}/>
            <Route path='*' element= {<Error/>}/>
         </Routes>
     </div>
   )
}

export default App;
