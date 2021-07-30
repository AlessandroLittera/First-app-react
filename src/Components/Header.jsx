import React from 'react';
import { Link } from "@reach/router";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import ButtonLogout from './Login/ButtonLogout.jsx';

const Header = (props) => {
    let action = <Link className="button-log" to="/login">Login</Link>
    if (props.email || Cookies.get('isUserLogged')) {
        action = <ButtonLogout>Logout</ButtonLogout>
    }
    return (
        <header>
            <h1>Header</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/description">Description</Link>
                {action}
            </nav> 
        </header>
    );
};

Header.prototype = {
    email: PropTypes.string
}
const mapStateToProps = (state) => ({
    email: state.Login.data.email
})
export default connect(mapStateToProps, null)(Header);

