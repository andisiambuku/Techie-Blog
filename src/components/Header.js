import React from "react";
import { Link } from 'react-router-dom';

function Header(){
     return(
       <nav className=" hover:text-gray-700 relative px-8 py-4 shadow-lg w-full items-center justify-between flex flex-wrap">
            <h1 className='text-4xl text-left'>Techie Blog</h1>
            <div className="space-x-4 tex-2xl ">
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Add New Post</Link>
            </div>
        </nav>
     );
}
export default Header;