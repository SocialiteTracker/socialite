import React from 'react';
import { Link } from "react-router-dom";

function Login(){
    return (
        <div>
            <p className="text-4xl text-center font-medium mt-4 mb-6"> Please Login Below </p>
            <form action="/login" method="post">
                <div className="w-[90%] pl-2 pr-2 mx-auto my-3">
                    <label htmlFor="username" className=""><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required className="inline-block pl-4 py-4 mb-6 w-full border border-gray-300 box-border" />
                    <label htmlFor="password" className=""><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" className="inline-block pl-4 py-4 mb-6 w-full border border-gray-300 box-border" required/>
                    <button type="submit" className="bg-[#04AA6D] text-white text-2xl mt-3 mb-7 py-3 hover:opacity-60 cursor-pointer w-full">Login</button>
                    <label>
                    <input type="checkbox" defaultChecked={true} name="remember"/> Remember me
                    </label>
                    <div>
                    <Link to="/signup"> 
                        <button type="button" className="bg-zinc-600 text-white mt-6 px-3 py-3 hover:opacity-60 cursor-pointer">Create an Account</button>
                    </Link>
                    <span className="float-right pt-[16px]">Forgot <a href="#">password?</a></span>
                    </div>
                </div>
            </form> 
            <Link to="/profile"> 
                <button type="submit" className="bg-blue-800 ml-[65px] text-white text-2xl mt-10 hover:opacity-60 cursor-pointer w-[15%]">Test</button>
            </Link>
        </div>
    )
}

export default Login;