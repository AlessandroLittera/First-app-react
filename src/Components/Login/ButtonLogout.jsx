import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { navigate } from "@reach/router";
import {connect } from "react-redux";

import { checkLogin } from "../../store/Login/actionCreators.js";

const email = "";
const ButtonLogout = props => {
   
    const saveCredential = () => {
        Cookies.remove('isUserLogged');
        props.onChangeLogin(email);
        return navigate("/");
    }

    
    return (
        < >
                <button className="button-log" type="button" onClick={saveCredential} >
                    Logout
                </button>
        </>
    );
};

ButtonLogout.propTypes = {
    onChangeLogin: PropTypes.func,
}

const mapStateToProps = () => ({

})


const mapDispatchToProps = dispatch => ({
       // dispatching plain actions    
        onChangeLogin: (email) => dispatch(checkLogin(email))
});


export default connect(mapStateToProps, mapDispatchToProps)(ButtonLogout);
