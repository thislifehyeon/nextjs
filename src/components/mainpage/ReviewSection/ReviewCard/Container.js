import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReviewCard from './Card';

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap : wrap;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
`;

function ReviewContainer() {
  const contents = [
    {
      id: 1,
      icon: "아이콘",
      name: "김계란",
      image: "/icon/icons8-circled-user-male-skin-type-1-and-2.gif",
      score: "⭐⭐⭐⭐⭐",
      message: "안녕 친구들! 빡빡이 아저씨야 자 오늘은 매일매일 바쁘게 살아가고 있는 친구들에게 아주 유용한 정보를 하나 알려줄거야 바로 루띤이라는 건데, 이걸 가지고 정말 쉽게 자기가 오늘 할 운동을 계획할 수 있어. 이거 한 번 꼭 사용해봤으면 좋곘어. 이거 좋아 정말 좋아. 그럼 안녕~ 요호호~"
    },
    {
      id: 2,
      icon: "아이콘",
      name: "헬린이",
      image: "/icon/icons8-circled-user-female-skin-type-7.gif",
      score: "⭐⭐⭐⭐⭐",
      message: "운동을 처음 시작했을 땐 모든게 어려웠습니다. 세트 시간은 어떻게 잡아야 하는지, 휴식은 얼마나 하는게 좋은지, 또는 물이나 보충제 등은 언제 먹어야 하는지도요. 루띤과 함께 하면서 드디어 저만의 운동법을 만들 수 있게 되었고, 이제 어느덧 목표달성을 눈앞에 두고 있습니다!"      
    },
    {
      id: 3,
      icon: "아이콘",
      name: "트리거",
      image: "/icon/icons8-circled-user-male-skin-type-3.gif",
      score: "⭐⭐⭐⭐⭐",
      message: "안녕하세요! 트리거입니다. 여름은 다가오는데, 배는 자꾸 나오고.. 하지만! 루띤과 함께 하면 누구나 목표가 달성이 가능하다는 사실! 트청자 여러분도 루띤과 함께 목표를 이루시길 바라며, 트리거 끝!! 냐하~"
    },
  ];

  return (
    <Container>
      {contents.map((content, index) => (
        <ReviewCard content={content} key={index} />
      ))}
    </Container>
  );
}

export default ReviewContainer;
