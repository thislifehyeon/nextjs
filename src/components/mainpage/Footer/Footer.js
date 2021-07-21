import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';

const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  /* background-color: #000035; */
`;

const Copyright = styled.p`
  text-align: center;
  font-family: GmarketSansTTFLight;
  /* font-family: OpenSans-Regular; */
  font-size: 10px;
  font-weight: 700;
  text-shadow: 5px;
  padding-bottom: 20px;
  `;
  
  const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50vh;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width:768px) { 
    flex-direction: column;
    margin-bottom: 100px;
    /* padding: 50px; */

  }

`;

const StartButton = styled.div`
  width: 250px;
  height: 90px;
  text-align: center;
  font-size: 1.5rem;
  margin: 30px;
  /* margin: 0 95px; */
  padding: 30px 0;
  font-family: GmarketSansTTFBold;
  background-color: #000035;
  border-radius: 15px;
  border: none;
  color: #ffffff;
  cursor: pointer;

  @media (max-width:1280px) { 
    /* margin-bottom: 100px; */
    margin: 30px 0;
  }

  :hover {
    background-color:#ff001d;
    opacity: 0.7;
  }
`;


  const GithubSection = styled.div`
  background-color: #000035;
  color: #ffffff;
  opacity: 0.7;
  border-radius: 10px;
  height: 50vh;
  width: 98%;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 200%;

  @media (max-width:768px) { 

  }

`;



const Contact = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 20px;
  text-align: center;
`;

const ContactTitle = styled.strong`
  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 10px;
  font-family: OpenSans-Regular;
`;

const Linked = styled(Link)`
`;

const RoutineLogo = styled.div`

`;

const Name = styled.span`
  font-size: 1.2rem;
  cursor: pointer;
  font-family: OpenSans-Regular;

  :hover{
    font-size: 1.3rem;
  }
`;

function Footer() {
  return (
    <FooterSection>
      <ButtonContainer>
        <StartButton>회원가입</StartButton>
        <StartButton onClick={() => setModalLogin2(!modalLogin2)}>비회원으로 시작하기</StartButton>
      </ButtonContainer>
      <GithubSection>
        <Contact>
          <ContactTitle>GitHub</ContactTitle>
          <Linked href="https://github.com/codestates/rouDDine-client/wiki">
            <Name>WiKi</Name>
          </Linked>
          <Linked href="https://github.com/codestates/rouDDine-client">
            <Name>client</Name>
          </Linked>
          <Linked href="https://github.com/codestates/rouDDine-server">
            <Name>server</Name>
          </Linked>
        </Contact>
          <div>
        <Contact>
          <ContactTitle>Backend Engineer</ContactTitle>
          <Linked href="https://github.com/thislifehyeon">
            <Name>Lee Seung Hyeon</Name>
          </Linked>
          <Linked href="https://github.com/LeeGeonwoo22">
            <Name>Lee Geon Woo</Name>
          </Linked>
        </Contact>
        <div>
        </div>
        <Contact>
          <ContactTitle>Frontend Engineer</ContactTitle>
          <Linked href="https://github.com/z1hoon">
            <Name>Park Ji Hoon</Name>
          </Linked>
          <Linked href="https://github.com/kwd8905">
            <Name>Kwak Woon Do</Name>
          </Linked>
          </Contact>
          </div>
      </GithubSection>
      <Copyright>© 2021 Team rouDDine All Rights Reserved</Copyright>
    </FooterSection>
  )
}

export default Footer
