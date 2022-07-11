import React from "react"

export default function Navbar() {
    return (
        <nav className="navbar--wrapper">
            <img src="./images/logo.svg" className="logo"/>
            <div className="links">
            <a href="#" className="nav-focus">Free Designs</a>
            <a href="#">License</a>
            <a href="#">Articles</a>
            <a href="#">Contributors</a>
            <a href="#">About</a>
            </div>
            <div className="right-navbar">
                <button className="login">Log In</button>
                <button className="signup">Sign Up</button>
            </div>
        </nav>
    )
}