import React, {useState} from 'react';

import Button from '../Components/Button.jsx'
import Header from '../Components/Header.jsx';
import BoxImage from '../Components/BoxImage.jsx';

const MyPage = () => {  //hook
  const [switchImage, setSwitchImage] = useState(false);
  
  return (
    <>
      <Header>
        <Button onClick={()=>{setSwitchImage(!switchImage)}}></Button>
      </Header>
      <BoxImage enableImage={switchImage}></BoxImage>
    </>
  );

}


export default MyPage;