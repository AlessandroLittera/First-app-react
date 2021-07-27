import React from 'react';
import PropTypes from 'prop-types';

const BoxImage = (props) => {

    if (props.enableImage) {
        return <img src='/logo192.png' alt='shirt' />
    }else{
        return <img src='/logo512.png' alt='LOGO' />
    }

}

BoxImage.prototype = {
    enableImage : PropTypes.bool,
}

export default BoxImage;