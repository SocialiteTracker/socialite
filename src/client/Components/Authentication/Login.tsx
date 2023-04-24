import React from 'react';

function Login(){
    return (
        <div>
            <form action="/login" method="post">
                <div className="container">
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required/>

                    <button type="submit">Login</button>
                    <label>
                    <input type="checkbox" defaultChecked={true} name="remember" /> Remember me
                    </label>
                </div>

                <div className="container" style={{backgroundColor: "#f1f1f1"}}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form> 
        </div>
    )
}

export default Login;