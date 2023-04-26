import React from 'react'
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

function Header(){

    function logout(){
        Cookies.remove('userId');
        location.replace("/");
    }

    return (
        <div className="flex justify-center mb-10 mt-4" > 
            <p className="text-4xl font-medium"> Socials </p>
            <Link to="/shareprofile" className="ml-5"> 
                <img src="http://cdn.onlinewebfonts.com/svg/img_523454.png" className="w-10"></img>
            </Link>
            <button type="submit" className="bg-gray-800 ml-[65px] text-white text-xl mt-10 hover:opacity-60 cursor-pointer w-[15%] rounded-md" onClick={logout}>Logout</button>
        </div>
    )
}

export default Header;