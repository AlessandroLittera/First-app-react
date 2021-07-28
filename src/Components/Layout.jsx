import React from 'react';
import PropTypes from 'prop-types';

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

Layout.prototype = {
    children: PropTypes.node
}

export default Layout;

