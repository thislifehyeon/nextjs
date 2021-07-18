import React from 'react'
import styled from 'styled-components'

function Using() {
  return (
    <UsingSection>
      <TextContainer>
        <Title>쉽고 빠르게 나만의 루틴 만들기</Title>
        <Script>원하는 운동을 클릭만으로 간편하게 추가하고</Script>
        <Script></Script>
        <Script></Script>
      </TextContainer>

      <ImageContainer>그림이 들어갈 곳 </ImageContainer>
    </UsingSection>
  )
}

export default Using


const UsingSection = styled.div`
  height: 80vh;
  background-color: #f3f5f7;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TextContainer = styled.div`

`;

const Title = styled.h1`

`;

const Script = styled.strong`

`;

const ImageContainer = styled.div`

`;
