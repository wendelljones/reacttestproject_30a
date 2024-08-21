import React from "react";
import './styles/header.css';
import { Link } from "react-router-dom";

function Header()  {
    return (
        <header className="header">
            <nav className="navBar">
            <img className="navImage" src="../images/wBrandMark_maroon_300x300.png" />
                <Link to="/">Home</Link>
                <Link to="/maps">Maps</Link>
            </nav>
        </header>
    )
}

export default Header;