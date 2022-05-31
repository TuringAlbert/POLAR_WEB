import React from 'react';
import { Button, Container } from '../../globalStyles';
import { AiFillThunderbolt, AiOutlineCoffee } from 'react-icons/ai';
import {FaSubway } from 'react-icons/fa';
import { GiCash } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
    PricingHeading,
    PricingCardFeature,
  } from './Security.elements';

{/* <InfoSec lightBg={lightBg}>
<Container>
  <InfoRow imgStart={imgStart}>
    <InfoColumn>
      <TextWrapper>
        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
        <Heading lightText={lightText}>{headline}</Heading>
        <Heading lightText={lightText}>{headline1}</Heading>
        <Heading lightText={lightText}>{headline2}</Heading>
        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
        <Link to='/sign-up'>
          <Button big fontBig primary={primary}>
            {buttonLabel}
          </Button>
        </Link>
      </TextWrapper>
    </InfoColumn>
    <InfoColumn>
      <ImgWrapper start={start}>
        <Img src={img} alt={alt} />
      </ImgWrapper>
    </InfoColumn>
  </InfoRow>
</Container>
</InfoSec> */}

function Security() {
  return (
<Container>
<InfoRow>
    <InfoColumn>
      <TextWrapper>
        <TopLine>당신의 데이터는 세상에서 가장 안전하게!</TopLine>
        <Heading>여러분의 데이터는 가장 안전한 서버에 암호화 됩니다.</Heading>
        <Subtitle>걱정없는 데이터 보안</Subtitle>
        
          <Button>
          </Button>
      </TextWrapper>
    </InfoColumn>
    <InfoColumn>
      <ImgWrapper>
        <Img/>
      </ImgWrapper>
    </InfoColumn>
  </InfoRow>
</Container>

        
      
  );
}
export default Security;

//<PricingHeading>버스</PricingHeading>
 //       <PricingCardFeature>지하철</PricingCardFeature>

// import React from "react";
// import Content1 from './Content1';


// import "./style.css";

// class Security extends React.Component {
//     state = {
//         width: window.innerWidth,
//         height: window.innerHeight
// 	}
	
// 	onResize = e => {
// 		this.setState({
//             width: window.innerWidth,
//             height: window.innerHeight
//         });
// 	}
	
// 	componentDidMount() {
// 		window.addEventListener('resize', this.onResize);
// 	}

//     render() {
//         const { width, height } = this.state;
//         return (
//             <div className="security">
// 				<div className="contents">
// 					<Content1 width={width} height={height}/>
// 				</div>
//             </div>
//         );
//     }
//   }

// export default Security;
