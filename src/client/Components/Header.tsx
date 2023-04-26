import React from 'react'
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

function Header() {

    function logout() {
        Cookies.remove('userId');
        location.replace("/");
    }

    return (
        <div className="mb-10 mt-4 text-darkpurple" >
            <header className='flex justify-end px-10'>
                <button type="submit" className="bg-darkpurple text-white text-xl hover:opacity-60 cursor-pointer w-24 h-12 rounded-md" onClick={logout}>Logout</button>
            </header>
            <div className="flex place-items-center place-content-center">
                <p className="text-4xl font-medium place-items-center place-content-center underline decoration-wavy underline-offset-8"> Socials </p>
                <Link to="/shareprofile" className="ml-5">
                    <img src="http://cdn.onlinewebfonts.com/svg/img_523454.png" className="w-10"></img>
                </Link>
            </div>
        </div>
    )
}

export default Header;