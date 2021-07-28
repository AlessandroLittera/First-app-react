import React from 'react';
import { Link } from "@reach/router";

const Header = (props) => {
    return (
        <header>
            <h1>Header</h1>
            <nav>
            <Link to="/">Home</Link> 
            <Link to="/description">Description</Link>
            <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

Header.prototype = {
   
}

export default Header;

