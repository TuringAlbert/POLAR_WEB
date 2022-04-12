import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaInstagram,
  FaYoutube,
  FaBlog,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterRight
} from './Footer.elements';
import MainLogoLetter from '../../images/MainLogoLetter.png';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          여러분의 발걸음이 친환경이 됩니다!
        </FooterSubHeading>
        <FooterSubText>My Move 사전 예약</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='이메일 입력' />
          <Button fontBig>사전 신청하기</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>

      <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>서비스</FooterLinkTitle>
            <FooterLink to='/'>공지사항</FooterLink>
            <FooterLink to='/'>IR 자료</FooterLink>
            <FooterLink to='/'>언론보도</FooterLink>
          </FooterLinkItems>



          <FooterLinkItems>
            <FooterLinkTitle>고객센터</FooterLinkTitle>
            <FooterLink to='/'>1:1 문의</FooterLink>
            <FooterLink to='/'>자주 묻는 질문</FooterLink>
            <FooterLink to='/'>인재 채용</FooterLink>
          </FooterLinkItems>


          <FooterLinkItems>
            <FooterLinkTitle>문의</FooterLinkTitle>
            <FooterLink to='/'>사업 제휴</FooterLink>
            <FooterLink to='/'>마케팅 PR</FooterLink>
            <FooterLink to='/'>투자 문의</FooterLink>
            <FooterLink to='/'>광고 문의</FooterLink>
          </FooterLinkItems>



          <FooterLinkItems>
            <FooterLinkTitle>미디어</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Notion Blog</FooterLink>
            <FooterLink to='/'>Linked In</FooterLink>
          </FooterLinkItems>
        
        </FooterLinksWrapper>

      </FooterLinksContainer>

      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon><img src={MainLogoLetter} alt="Main Logo Letter" height="30" weight="30"/></SocialIcon>
            <WebsiteRights><br/>© POLAR, Innovate with Passion 2022</WebsiteRights>
          </SocialLogo>
          
          <SocialIcons>
            <SocialIconLink href='//www.instagram.com/mymove_official/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Notion'>
              <FaBlog />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com/channel/UCc4MfaeCDEqIt-hesyE9iPg'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='//www.linkedin.com/in/juyoung-kim-047185181/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
      <SocialMedia>
      <WebsiteRights>
      <br/>
      <h2> POLAR © </h2> <br/>
			<div>사업자등록번호 : 000000 | 대표 : 김주영</div>
			<div>서울특별시 성북구 안암로 145 KU개척마을 S305호 02841 (안암동, 파이빌99) </div>
      <div>문의 : polar.startup.official@gmail.com</div>	
        <div>
					<a href="/">이용 약관 및 개인정보 처리 방침</a>
				</div>
      <br/>
      <h4> POLAR © 2022, All Rights Reserved.</h4>
  
      </WebsiteRights>
      </SocialMedia>
      

    </FooterContainer>
    
    
  );
}

export default Footer;
