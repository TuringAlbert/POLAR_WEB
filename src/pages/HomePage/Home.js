import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive,homeObjSix } from './Data';
import { InfoSection, Pricing } from '../../components';
import Security from '../../components/Security/Security';

import '../../components/App.css';
import HomeBackground from './HomeBackground';

function Home() {
  return (
    <>
      <HomeBackground/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Pricing />
      <InfoSection {...homeObjSix}/>
      {/* <Security/> */}
      
    </>
  );
}

export default Home;



