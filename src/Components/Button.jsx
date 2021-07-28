import PropTypes from 'prop-types';
import React from 'react';


const Button = (props) => {
    return <button onClick={props.onClick}>Switch</button>;
};

 Button.propTypes = {
     onClick: PropTypes.func,
}

 export default Button;
