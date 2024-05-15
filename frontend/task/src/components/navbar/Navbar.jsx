import React from 'react'
import "./navbar.css"
import {NavLink} from "react-router-dom";


export const Navbar = () => {
  return (
    <>
    <header className='header'>
        <div className="container">
        <div className="navbar">
            <div className="left-side">
                <h1>EATWELL</h1>
            </div>
            <div className="right-side">
                <ul>
                <NavLink className="home" to={"/"}>HOME</NavLink>
                    <li>ABOUT</li>
                    <li>OFFER</li>
                    <li>MENU</li>
                    <li>NEWS</li>
                    <li>GALLERY</li>
                    <li>CONTACT</li>
                    <NavLink className="post" to={"/post"}>POST</NavLink>
                </ul>
            </div>
        </div>
        <div className="mainsection">
            <h1>Welcome To EatWell</h1>
            <p>Come and eat well with our delicious & healthy foods.</p>
            <button>Reservation</button>
        </div>
        </div>
        </header>
    </>
  )
}
