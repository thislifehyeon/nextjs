import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';

const FooterSection = styled.footer`
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
  margin: 0 20px;
  border-radius: 20px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  line-height: 200%;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  margin: 0 20px;
  text-align: center;
`;

const ContactTitle = styled.strong`
  font-size: 13px;
  font-weight: 700;
  margin-top: 10px;
  font-family: OpenSans-Regular;
`;

const Linked = styled(Link)`
`;

const Name = styled.div`
  font-size: 11px;
  cursor: pointer;
  font-family: OpenSans-Regular;

  :hover{
    font-size: 12px;
  }
`;

function Footer() {
  return (
    <FooterSection>
      <GithubSection>
        <Contact>
          <ContactTitle>GitHub</ContactTitle>
          <Linked href="https://github.com/codestates/rouDDine-server">
            <Name>server</Name>
          </Linked>
          <Linked href="https://github.com/codestates/rouDDine-server">
            <Name>client</Name>
          </Linked>
          <Linked href="https://github.com/codestates/rouDDine-server">
            <Name>WiKi</Name>
          </Linked>
        </Contact>
        <Contact>
          <ContactTitle>Backend Engineer</ContactTitle>
          <Linked href="https://github.com/codestates/rouDDine-server">
            <Name>Lee Seung Hyeon</Name>
          </Linked>
          <Linked href="https://github.com/codestates/rouDDine-server">
            <Name>Lee Geon Woo</Name>
          </Linked>
        </Contact>
        <Contact>
          <ContactTitle>Frontend Engineer</ContactTitle>
          <Linked href="https://github.com/codestates/rouDDine-server">
            <Name>Park Ji Hoon</Name>
          </Linked>
          <Linked href="https://github.com/codestates/rouDDine-server">
            <Name>Kwak Woon Do</Name>
          </Linked>
          </Contact>
      </GithubSection>
      <Copyright>© 2021 Team rouDDine All Rights Reserved</Copyright>
    </FooterSection>
  )
}

export default Footer
