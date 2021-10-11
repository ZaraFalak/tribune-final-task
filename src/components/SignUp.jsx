import React from 'react'
import "../stylesheets/Login.scss"

const SignUp = () => {
    return (
        <div className="login_container">

        <div className="left_image">
            <img src="./images/banner.jpg" alt="picture" />

        </div>
        <div className="login_main_container">
            
            <div className="input_container">

            <h3>SignUp to Jobio</h3> 
            <form action="">
            <label for="username">Username:</label> <br />
            <input className="input_username" type="text" /><br /><br />
            
            <label for="password">Password:</label><br />
            <input  className="input_password" type="password" /> <br />
            <div className="center_text">
            <span>Remember me</span>
            <span id="forget_password">Forget your Password?</span>
            </div>
            <input className="login_button" type="submit" value="SignUp"/>
            </form>
            <p className="bottom_text">Don't have an account?SignUp</p>
            <br />

            <button className="option_button "> SignUp via facebook</button>
            <button className="option_button_google">SignUp via Google</button>
            </div>

        </div>
        </div>
    )
}

export default SignUp
