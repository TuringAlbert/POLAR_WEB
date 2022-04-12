import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt, AiOutlineCoffee } from 'react-icons/ai';
import {FaSubway } from 'react-icons/fa';
import { GiCash } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>친환경 소비가 자산이 되다!</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaSubway />
                </PricingCardIcon>
                <PricingCardPlan>이동수단 리워드</PricingCardPlan>
                <PricingCardCost>2,000원</PricingCardCost>
                <PricingCardLength>매월</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>지하철</PricingCardFeature>
                  <PricingCardFeature>버스</PricingCardFeature>
                  <PricingCardFeature>도보</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>참여하기</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCash />
                </PricingCardIcon>
                <PricingCardPlan>무브 제휴 포인트사</PricingCardPlan>
                <PricingCardCost>10,000원</PricingCardCost>
                <PricingCardLength>매월</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>PET 분리수거 리워드</PricingCardFeature>
                  <PricingCardFeature>친환경 제품 할인</PricingCardFeature>
                  <PricingCardFeature>정부/기업 친환경 포인트 통합</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>참여하기</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <AiOutlineCoffee />
                </PricingCardIcon>
                <PricingCardPlan>마이무브 포인트 사용처</PricingCardPlan>
                <PricingCardCost>100 기업</PricingCardCost>
                <PricingCardLength>친환경 기업</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>스타벅스</PricingCardFeature>
                  <PricingCardFeature>나이키</PricingCardFeature>
                  <PricingCardFeature>친환경 스타트업</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>참여하기</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
