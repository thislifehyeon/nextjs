import React from 'react';
import styled from 'styled-components';

const ReviewCardContainer = styled.li`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  list-style: none;
  height: 300px;
  max-width: 290px;
  min-width: 300px;
  padding: 30px 25px;
  margin-left: 35px;
  background-color: white;
  color: #343a40;
  border-radius: 15px;
  /* margin: 0; */
  /* box-shadow: 2px 1px 5px #343a40; */

  div {
    display: flex;
    flex-direction: row;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h4 {
      margin: 0;
      text-align: left;
      font-family: NanumGothic-Bold;
    }

    span {
      height: 80px;
      width: 80px;
    }
  }

  @media (max-width: 768px) {
    padding: 15px 35px;
    height: auto;
    min-width: 350px;
    margin: 10px 30px;
    box-sizing: border-box;

    h4 {
      margin: 0;
    }
  }
  /* 🎖🎖🎖🎖🎖 */
  h4 {
    font-family: NanumGothic-Bold;
    line-height: 18px;
  }
`;


function ReviewCard({ content }) {
  return (
    <ReviewCardContainer>
      <div>
        <span>{content.icon}</span>
        <div>
          <h4>{content.name}</h4>
          <p>{content.score}</p>
        </div>
      </div>
      <h4>{content.message}</h4>
    </ReviewCardContainer>
  );
}

export default ReviewCard;
