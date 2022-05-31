// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// export const Container = styled.div`
//   padding: 100px 0 160px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background: #4b59f7;
// `;

// export const PricingWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 0 auto;

//   @media screen and (max-width: 960px) {
//     margin: 0 30px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// export const PricingHeading = styled.h1`
//   color: #fff;
//   font-size: 45px;
//   margin-bottom: 24px;
// `;

// export const PricingContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media screen and (max-width: 960px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//   }
// `;

// export const PricingCard = styled(Link)`
//   background: #242424;
//   box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
//   width: 280px;
//   height: 500px;
//   text-decoration: none;
//   border-radius: 4px;

//   &:nth-child(2) {
//     margin: 24px;
//   }

//   &:hover {
//     transform: scale(1.06);
//     transition: all 0.3s ease-out;
//     color: #1c2237;
//   }

//   @media screen and (max-width: 960px) {
//     width: 90%;

//     &:hover {
//       transform: none;
//     }
//   }
// `;

// export const PricingCardInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 500px;
//   padding: 24px;
//   align-items: center;
//   color: #fff;
// `;

// export const PricingCardIcon = styled.div`
//   margin: 24px 0;
// `;

// export const PricingCardPlan = styled.h3`
//   margin-bottom: 5px;
//   font-size: 22px;
// `;

// export const PricingCardCost = styled.h4`
//   font-size: 30px;
// `;

// export const PricingCardLength = styled.p`
//   font-size: 14px;
//   margin-bottom: 24px;
// `;

// export const PricingCardFeatures = styled.ul`
//   margin: 16px 0 32px;
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: #a9b3c1;
// `;

// export const PricingCardFeature = styled.li`
//   margin-bottom: 10px;
// `;

// // 






import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 800px;
  vertical-align: middle;
  display: inline-block;
  max-height: 800px;
`;



export const Heading = styled.h1`
  margin-bottom: 24px;
  display : flex;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;