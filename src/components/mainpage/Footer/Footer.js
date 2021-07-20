import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';

const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
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
  
  const GithubSection = styled.div`
  background-color: #000035;
  color: #ffffff;
  margin: 0 10px;
  opacity: 0.7;
  border-radius: 40px 10px 40px 10px;
  height: 50vh;
  width: 99%;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 200%;
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
