import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

import style from './NavBar.module.css';

export default function NavBar({onSearch, addingRandom}){
    return (
        <nav className={style.navBar}>
            <NavLink to='/home'>
                <img src="" alt="" />
                <button>HOME</button>
            </NavLink>
            <NavLink to='/about'>
                <button>ABOUT</button>
            </NavLink>
            <NavLink to='/favorites'>
                <button>FAVORITES</button>
            </NavLink>

            <SearchBar onSearch={onSearch} ></SearchBar>
            <button className={style.addButton} onClick={addingRandom}>ADD RANDOM</button>
        </nav>
    )
}