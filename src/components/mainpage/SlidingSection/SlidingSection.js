import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SlideSection = styled.div`
  padding: 50px 0;
  height: 150vh;
  background-color: #f3f5f7;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h1 {
    font-family: GmarketSansTTFBold;
    text-align: center;
   
    @media (max-width: 768px) {
    font-size: 2.4rem;
    }
  }

  h4 {
    font-family: GmarketSansTTFLight;
    text-align: center;
    margin: 0;

    @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0 20px;
    }
  }
    
  @media (min-width:768px) and (max-width:1280px) { 
    height: 100vh;
    box-sizing: auto;
  }
  @media (max-width: 768px) {
    height: 100vh;
    box-sizing: auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 60%;
  font-size: 3.2rem;
`;

const SliderContainer = styled.div`
  width: 50%;
  /* padding: 0 30%; */
  height: auto;
  display: flex;
  flex-direction :row ;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width:768px) and (max-width:1280px) { 
    width: 80%;
  }
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const Slide = styled.img`
  height: auto;
  margin-right: 100%;
  width: 100%;
  background-color: #f3f5f7;
  border-radius: 20px;
  border: 4px gray solid;
  /* margin-bottom: 50px; */
  @media (min-width:768px) and (max-width:1280px) { 
    /* box-sizing: auto; */
  }
  @media (max-width: 768px) {
  margin-right: 118%;

  }
`;

const TOTAL_SLIDES = 4;


export default function Sliding() {
  const Title = [
  "원하는 운동을 선택하세요!", 
  "운동의 시간을 입력하세요!", 
  "드래그앤드롭으로 편하게!", 
  "타이머를 실행하고 오늘의 루틴을 성공시켜 보세요!",
  "오늘 성공한 루틴을 기록하고 공유하세요!"
  ]

  const contents = [
    "당신을 위한 운동이 준비되어 있습니다. 원하는 운동을 클릭해서 운동 목록으로 이동시키세요", 
    "루띤은 세트 수, 운동 시간, 세트 간 휴식, 운동 간 휴식까지도 다양하게 제공합니다", 
    "운동의 순서를 바꾸고 싶으신가요? 드래그앤 드롭으로 쉽고 편하고, 유연하게 순서를 바꿔보세요", 
    "이제 본격적으로 운동할 시간입니다. 모든 열정을 불태우세요!",
    "오늘도 루틴을 모두 달성하셨나요? 당신의 기록을 확인하고 친구들에게 공유해 보세요."
  ]

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 1.8s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide * 2}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);


  return (
    <SlideSection>
      <h1>{Title[currentSlide]}</h1>
      <h4>{contents[currentSlide]}</h4>
      <SliderContainer ref={slideRef}>
        <Slide src="/slide/slide1.gif" />
        <Slide src="/slide/slide2.gif" />
        <Slide src="/slide/slide3.gif" />
        <Slide src="/slide/slide4.gif" />
        <Slide src="/fitness/undraw_fitness_stats_sht6.png" />
      </SliderContainer>
      <ButtonContainer>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className='btn prev' onClick={prevSlide}>
        </FontAwesomeIcon>
        <FontAwesomeIcon icon={faArrowAltCircleRight} className='btn next' onClick={nextSlide}>
        </FontAwesomeIcon>
      </ButtonContainer>
    </SlideSection>
  );
}