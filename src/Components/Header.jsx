import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header>
            <h1>Header</h1>
            {props.children}
        </header>

    );
};

Header.prototype = { 
    children: PropTypes.node 
}
  
export default Header;

