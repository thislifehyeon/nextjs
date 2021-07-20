import React from 'react'
import styled from 'styled-components'
import ReviewCard from './ReviewCard/Card'
import ReviewContainer from './ReviewCard/Container'
import Image from 'next/image'

const ReviewSection = styled.div`
  color: #343a40;
  background-color: #ffffff;
  margin-top: 60px;
  /* padding: 100px 120px; */
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;

    h2 {
      text-align: center;
      font-size: 2.1rem;
      font-family: Army_Bold;
      margin-bottom: 50px;
    }
`;

const ReviewArticle = styled.article`
  text-align: center;
  font-family: NEXONLv1GothicLight;
  /* font-family: NEXONLv1GothicRegular; */
  font-size: 1.35rem;
  margin-bottom: 80px;
  line-height: 135%;

  @media (max-width:768px) {
    display: none;
  }
`;

const ImageFinishLine = styled.img`
  margin-top: 80px;
  margin-bottom: 30px;
  /* margin: 30px 0; */
  height: 500px;
  width: 600px;

  @media (max-width:768px) {
    width: 80%;
    height: auto;
  }
`;


function Review() {
  return (
    <ReviewSection>
      <ImageFinishLine src='/fitness/undraw_finish_line_katerina_limpitsouni_xy20.png' height={900} width={900}></ImageFinishLine>
      <div>
        <h2>rouDDine을 사용한 많은 분들이 목표 달성에 성공하셨습니다.</h2>
        <ReviewArticle>하루의 시작도, 하루의 끝도 우리에겐 너무나 소중하니까.<br/>
        정해진 시간 안에 최고의 효율을 경험해 보세요.</ReviewArticle>
      </div>
      <ReviewContainer></ReviewContainer>
    </ReviewSection>
  )
}

export default Review
