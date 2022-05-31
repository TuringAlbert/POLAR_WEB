import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  font-family: "NotoSans";

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;


export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: "NotoSans";
  }
`;

export const Card = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const CardInfor = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  padding: 62px;
  align-items: center;
  color: #fff;
`;

export const CardData = styled.div`
  display: flex;
  margin: 24px;
  font-size: 50px;
  font-family: "NotoSans-Bold";
`;


export const CardTitle = styled.h3`
  display: flex;
  margin-bottom: 2px;
  font-size: 22px;
  font-family: "NotoSans";
`;

