import React, { useState } from 'react';


import Button from "./Button.jsx";

const BoxImage = () => {
    let image
    const [switchImage, setSwitchImage] = useState(false);

    if (switchImage) {
        image = '/image/avatar.PNG'
    } else {
        image = '/image/persona.jpg'
    }

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <Button onClick={() => { setSwitchImage(!switchImage) }} />
            <img src={image} alt='image' />
        </div>
    )

}

BoxImage.prototype = {

}

export default BoxImage;