import React from 'react';

function Signup() {
    return (
        <div className='text-darkpurple'>
            <p className="text-5xl text-center font-medium mt-4 sm:mb-6 mb-8 underline decoration-wavy underline-offset-8"> Create an Account! </p>
            <form action="/api/signup" method="post">
                <div className="w-[90%] pl-2 pr-2 mx-auto my-3">
                    <label htmlFor="username" className=""><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required className="inline-block pl-4 py-4 mb-6 w-full border border-gray-300 box-border rounded-3xl" />
                    <label htmlFor="password" className=""><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" className="inline-block pl-4 py-4 mb-6 w-full border border-gray-300 box-border rounded-3xl" required />
                    <button type="submit" className="bg-purple text-white text-2xl mt-3 mb-7 py-5 hover:opacity-60 cursor-pointer w-full rounded-3xl">Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;