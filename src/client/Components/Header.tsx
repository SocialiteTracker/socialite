import React from 'react'
import { Link } from "react-router-dom";

function Header(){
    return (
        <div className="flex justify-center mb-10 mt-4" > 
            <p className="text-4xl font-medium"> Socials </p>
            <Link to="/shareprofile" className="ml-5"> 
                <img src="http://cdn.onlinewebfonts.com/svg/img_523454.png" className="w-10"></img>
            </Link>
        </div>
    )
}

export default Header;