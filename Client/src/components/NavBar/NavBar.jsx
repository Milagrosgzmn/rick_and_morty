import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function NavBar({onSearch, addingRandom, handleLogOut}){
    let location = useLocation();
    

    return (
        <header className='w-full flex flex-col '>
            <div className='flex justify-between w-full bg-bgblue'>
            <nav className=" pl-4 flex items-center   h-16">
                <Link className='px-4 font-semibold hover:text-mygreen' to='/home'>
                    <img src="" alt="" />
                    HOME
                </Link>
                <Link className='px-4 font-semibold hover:text-mygreen' to='/about'>
                    ABOUT
                </Link>
                <Link className='px-4 font-semibold hover:text-mygreen' to='/favorites'>
                    FAVORITES
                </Link>
            </nav>
                <button onClick={handleLogOut} className='px-4 font-semibold hover:text-mygreen cursor-pointer'>Log out</button>
            </div>
            {location.pathname ==='/home' && 
            <div className='
            
            md:flex flex-row justify-center items-center 
             '>
            <SearchBar onSearch={onSearch} ></SearchBar>
            <button className="   h-12 
            mx-4
            bg-orange-500 rounded-xl p-2 font-semibold 
            hover:bg-white hover:border-orange-500 hover:text-orange-500" onClick={addingRandom}>Add Random</button>
            </div>}
        
        </header>
    )
}