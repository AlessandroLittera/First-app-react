import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { navigate } from "@reach/router";
import {connect } from "react-redux";

import { checkLogin } from "../../store/Login/actionCreators.js";


const LoginWithUsername = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function saveCredential() {
        Cookies.set('isUserLogged', email);
        props.onChangeLogin(email)
        return navigate("/");
    }

    
    return (
        <div className="appStyle">
            <form className="formStyle">
                    <label>Email</label>
                    <input
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
              
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                <button type="button" onClick={saveCredential} disabled={!validateForm()}>
                    Login
                </button>
            </form>
        </div>
    );
};

LoginWithUsername.propTypes = {
    onChangeLogin: PropTypes.func,
}

const mapStateToProps = () => ({

})


const mapDispatchToProps = dispatch => ({
       // dispatching plain actions    
        onChangeLogin: (email) => dispatch(checkLogin(email))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginWithUsername);
