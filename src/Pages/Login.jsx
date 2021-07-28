import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Cookies from 'js-cookie';
import { navigate } from "@reach/router";

import Layout from "../Components/Layout.jsx";
import onlyNotLogUser from "../hoc/onlyNotLogUser.js";

const appStyle = {
    height: '250px',
    display: 'flex'
};

const Forma = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function saveCredential() {
        Cookies.set('isUserLogged', email);
        return navigate("/");
    }

    return (
        <div className="appStyle">
            <Form className="formStyle">
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <button className="submitStyle" block size="lg" type="submit" onClick={saveCredential} disabled={!validateForm()}>
                    Login
                </button>
            </Form>
        </div>
    );
}

function Login() {

    return (
        <Layout>
            <div style={appStyle}>
                <Forma />
            </div>
        </Layout>
    );
};

 export default onlyNotLogUser(Login)
