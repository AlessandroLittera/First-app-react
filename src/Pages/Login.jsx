import React from "react";

import Layout from "../Components/Layout.jsx";
import onlyNotLogUser from "../hoc/onlyNotLogUser.js";

import LoginWithUsername from '../Components/Login/LoginWithUsername.jsx';

const Login = () => {

    return (
        <Layout>
            <div style={{ height: '250px', display: 'flex' }}>
                <LoginWithUsername />
            </div>
        </Layout>
    );
};

export default onlyNotLogUser(Login);








