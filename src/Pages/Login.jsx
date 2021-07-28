import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import { navigate } from "@reach/router";
import Layout from "../Components/Layout.jsx";

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

    function handleSubmit(event) {
        //return window.open("/");
        return navigate("/");
    }

    return (
        <div className="appStyle">
            <Form onSubmit={handleSubmit} className="formStyle">
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
                <button class="submitStyle" block size="lg" to="/" type="submit" disabled={!validateForm()}>
                    Login
                </button>
            </Form>
        </div>
    );
}

export default function Login() {

    return (
        <Layout>
            <div style={appStyle}>
                <Forma />
            </div>
        </Layout>
    );
};
