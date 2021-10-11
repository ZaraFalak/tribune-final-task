import React from 'react'
import { Link } from 'react-router-dom'
import "../stylesheets/Login.scss"

const Login = () => {
    return (
        <div className="login_container">

        <div className="left_image">
            <img src="./images/banner.jpg" alt="picture" />

        </div>
        <div className="login_main_container">
            
            <div className="input_container">

            <h3>Login to Jobio</h3> 
            <form action="">
            <label for="username">Username:</label> <br />
            <input className="input_username" type="text" /><br /><br />
            <label for="password">Password:</label><br />
            <input  className="input_password" type="password" /> <br />
            <div className="center_text">
            <span>Remember me</span>
            <span id="forget_password">Forget your Password?</span>
            </div>
            <input className="login_button" type="submit" value="Login"/>
            </form>
            <p className="bottom_text">Don't have an account?
            <Link to="/signup">
            <span id="sign_up">SignUp</span></Link></p>
            <br />


            <button className="option_button "> Login via facebook</button>
            <button className="option_button_google">Login via Google</button>
            </div>

        </div>
        </div>
    )
}

export default Login
