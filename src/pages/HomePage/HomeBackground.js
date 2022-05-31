import React from 'react';
import '../../components/App.css';
import './HomeBackground.css';
import CountUp from 'react-countup';
import { Container } from '../../globalStyles';

import {
  InfoSec,
  HomeWrapper,
  HomeContainer,
  Card,
  CardInfor,
  CardTitle,
  CardData,
  CardInfo,
} from './HomeBackground.elements';


function HomeBackground() {
  return (
    <>
    <div className='HomeBackground-container'>
      <video src='/videos/video-11.mp4' autoPlay loop muted />
      <h1>My Move</h1>
      <p>Eco Socializing Platform</p>
      <HomeWrapper>
          <HomeContainer>

            <CardInfor>
              <CardTitle>정부지원금 유치액</CardTitle>
              <CardData>
              <CountUp
                  start={1}
                  end={250000000}
                  duration={2.5}
                  separator=","
                  decimals={[3,6,9,12]}
                  suffix=" 원"
                >
                </CountUp> 
              </CardData>
            </CardInfor>
        
            <CardInfor>
              <CardTitle>누적 리워드액</CardTitle>
              <CardData>
                <CountUp
                  start={1}
                  end={100000}
                  duration={2.5}
                  separator=","
                  decimals={[3,6,9,12]}
                  suffix=" 원"
                >
                </CountUp>
              </CardData>
            </CardInfor>
      
            <CardInfor>
              <CardTitle>제휴기업 수</CardTitle>
              <CardData>
                <CountUp 
                  start={1}
                  end={4}
                  duration={2.5}
                  separator=","
                  decimals={[3,6,9,12]}
                  suffix=" 기업"
                >
                </CountUp>
              </CardData>
            </CardInfor>
            
          </HomeContainer>
        </HomeWrapper>
      </div>
    </> 
  );
}

export default HomeBackground;
