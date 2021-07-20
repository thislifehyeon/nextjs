import React from 'react'
import styled from 'styled-components'

function Using() {
  return (
    <>
    <UsingSection1>
      <TextContainer>
        <Title>루띤과 함께 하는 나만의 운동루틴 만들기</Title>
        <Text>"누구나 쉽고 편하게 자기에게 맞는 운동 루틴을 만들도록 할 수는 없을까?"</Text>
        <Text>루띤은 이런 고민과 함께 출발하였습니다.</Text>
        <Text>시작이 반이라고는 하지만, 끝까지 가지 못한다면 그 절반은 의미가 없습니다.</Text>
        <Text>여러분의 결심이 성공으로 이어지도록, 루띤이 함께 하겠습니다.</Text>
        <Blank></Blank>
      </TextContainer>
        <ImageContainer src="/fitness/undraw_personal_trainer_ote3.png" alt="test"></ImageContainer>
    </UsingSection1>
    </>
  )
}

export default Using




const UsingSection1 = styled.div`
  padding: 50px;
  height: 150vh;
  background-color: #f3f5f7;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    
  @media (min-width:768px) and (max-width:1280px) { 
    box-sizing: auto;
  }
  @media (max-width: 768px) {
    height: 130vh;
    padding: 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 200px;;
`;

const Title = styled.h1`
  font-family: GmarketSansTTFBold;
  font-size: 2.8rem;
  margin-bottom: 60px;
`;

const ImageContainer = styled.img`
  height: auto;
  width: 60%;
  background-color: #f3f5f7;
  border-radius: 20px;
  border: 8px gray solid;
  margin-bottom: 200px;
  @media (min-width:768px) and (max-width:1280px) { 
    box-sizing: auto;
  }
  @media (max-width: 768px) {
    box-sizing: auto;
    min-width: 450px;
  }
`;

const Text = styled.div`
  font-size: 1.1rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 200%;
  }
`;

const Blank = styled.div`
  padding: 30px;
`;