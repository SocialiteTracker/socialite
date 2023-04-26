import React from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Cookies from 'js-cookie';

function Login() {

    useEffect(() => {
        //check to see if user has a cookie
        if (Cookies.get('userId')) {
            location.replace("/profile");
        }
    }, [])

    return (
        <div className='text-darkpurple'>
            <p className="text-5xl text-center font-medium mt-4 sm:mb-6 mb-8 text-darkpurple"> Log On In! </p>
            <form action="/api/login" method="post">
                <div className="w-[90%] pl-2 pr-2 mx-auto my-3">
                    <label htmlFor="username" className=""><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required className="inline-block pl-4 py-4 mb-6 w-full border border-gray-300 box-border rounded-3xl" />
                    <label htmlFor="password" className=""><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" className="inline-block pl-4 py-4 mb-6 w-full border border-gray-300 box-border rounded-3xl" required />
                    <button type="submit" className="bg-pink text-white text-2xl mt-3 mb-7 py-3 hover:opacity-60 cursor-pointer w-full rounded-3xl">Login</button>
                    <label>
                        <input type="checkbox" defaultChecked={true} name="remember" /> Remember me
                    </label>
                    <div>
                        <Link to="/signup">
                            <button type="button" className="bg-purple text-white text-xl mt-6 px-3 py-2 hover:opacity-60 cursor-pointer rounded-md">Create Account</button>
                        </Link>
                        <span className="float-right pt-[16px]">Forgot <a href="#">password?</a></span>
                    </div>
                </div>
            </form>
            {/* <Link to="/profile">  */}
            {/* </Link> */}
        </div>
    )
}

export default Login;