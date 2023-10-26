import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';


export default function NavBar({onSearch, addingRandom}){
    return (
        <header className='w-screen flex flex-col '>
            <nav className=" pl-4 w-full flex items-center  bg-bgblue h-16">
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
            <div className='
            
            md:flex flex-row justify-center items-center 
             '>
            <SearchBar onSearch={onSearch} ></SearchBar>
            <button className="   h-12 
            mx-4
            bg-orange-500 rounded-xl p-2 font-semibold 
            hover:bg-mygreen" onClick={addingRandom}>Add Random</button>
            </div>
        
        </header>
    )
}