import React from 'react';
import styled from 'styled-components';

const ReviewCardContainer = styled.li`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 5px 8px 8px 0 rgba(31, 38, 135, 0.2);
  list-style: none;
  opacity: 0.85;
  height: 360px;
  max-width: 290px;
  min-width: 300px;
  padding: 10px 0;
  margin: 0 15px;
  background-color: white;
  color: #343a40;
  border-radius: 15px;


  @media (max-width: 1024px) {
    box-sizing: auto;
    min-width: 500px;
    height: auto;
    padding: 20px 0;
    margin: 10px 0;
  }
  /* margin: 0; */
  /* box-shadow: 2px 1px 5px #343a40; */
  

  @media (max-width: 768px) {
    box-sizing: auto;
    padding: 15px 25px 50px 25px;
    height: auto;
    min-width: 350px;
    margin: 10px 30px;
    box-sizing: border-box;
  }
  /* 🎖🎖🎖🎖🎖 */
  `;

const ReviewCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 15px 0;
  padding: 0 10px;
`;


const ReviewerName = styled.div`
  font-family: NanumGothic-Bold;
  margin-left: 5px;
  padding: 15px;
  font-size: 1.1rem;
`;

const IconSpan = styled.span`
  margin-left: 20px;
`;

const ReviewCardMessage = styled.div`
  font-family: NanumGothic-Regular;
  text-align: justify;
  line-height: 160%;
  padding: 0 20px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
`;

function ReviewCard({ content }) {
  return (
    <ReviewCardContainer>
      <ReviewCardHeader>
        <IconSpan>
          <ProfileImage src={content.image}></ProfileImage>
        </IconSpan>
        <ReviewerName>{content.name}</ReviewerName>
      </ReviewCardHeader>
      {/* <ReviewScore>{content.score}</ReviewScore> */}
      <ReviewCardMessage>{content.message}</ReviewCardMessage>
    </ReviewCardContainer>
  );
}

export default ReviewCard;
