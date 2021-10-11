/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import "../stylesheets/Header.scss"

const Header = () => {
    return (
        <nav className="header_container">
            <Link to="/">
            <img className="logo" src="./images/logo-image.png" alt="image"/>
                </Link>
            <div className="button_container">

            <Link to="/login">
            <button className="login_register">Login/Register</button>
            </Link>


            <Link to="/jobs">
            <button className="jobs">Job Post</button>
            </Link>
            
          
            </div>
        </nav>
    )
}

export default Header

