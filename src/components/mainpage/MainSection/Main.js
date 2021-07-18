import React from 'react'
import styled from 'styled-components';
import WorkoutVideo from '../../video';
import {useRouter} from 'next/router';



function First() {
  const router = useRouter();
  return (
    <MainSection>
          <TitleContainer>
            <MainArticle>
              <TitleStrong>내</TitleStrong>
              <TitleWrapper>
                <TitleChild>마음대로 만드는</TitleChild>
                <TitleChild>손 안의 트레이너</TitleChild>
              </TitleWrapper>
            </MainArticle>
                <RoutineTitle>루띤</RoutineTitle>
            <TitleContents>
              남이 시켜서 하는 운동은 이제 그만! <br/>
              내가 만든 루틴으로 운동하고 <br /> 
              목표를 달성을 공유해 보세요.<br/>
            </TitleContents>
            <StartButton onClick={() => router.push('/routine')}>시작하기</StartButton>
          </TitleContainer>
        <VideoSection>
              <WorkoutVideo/>
        </VideoSection>
          {/* <Image src='/../public/main.jpeg' width='800' height='600'></Image> */}
        </MainSection>
  )
}

export default First


const MainSection = styled.div`
  height: 100%;
  display: flex;
  flex: row;
  justify-content: center;
  align-items: center;
  color: #000036;
  padding: 0 40px;
  
  @media (max-width:1280px) { 
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    margin-bottom: 200px;
    margin-top: 50px;
  }
  
  @media (max-width: 768px) {
    /* max-width: 440px; */
    padding: 10px 0px;
    flex-direction: column;
  }
`;

const StartButton = styled.div`
  width: 250px;
  height: 90px;
  text-align: center;
  font-size: 1.8rem;
  margin: 0 95px;
  padding: 30px 0;
  font-family: GmarketSansTTFBold;
  background-color: #000035;
  border-radius: 15px;
  border: none;
  color: #ffffff;
  cursor: pointer;

  @media (max-width:1280px) { 
    margin-bottom: 100px;
  }

  :hover {
    background-color:#ff001d;
    opacity: 0.7;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  flex-wrap: wrap;
  
  @media ( max-width: 768px ) {
    margin: 0;
  }
`;

const TitleChild = styled.p`
  /* padding: 0 10px; */
  font-size: 2.3rem;
  margin: 0;
  text-align: left;
  font-family: tway_sky;

  @media ( max-width: 768px ) {
    font-size: 2.0rem;
  }
`;

const RoutineTitle = styled.div`
  font-size: 8rem;
  font-family: tway_sky;
  text-align: center;
  padding-left: 40px;

  @media (max-width: 768px) {
    font-size: 7rem;
  }
`;

const TitleContents = styled.h3`
  padding: 60px 0;
  text-align: center;
  font-family: GmarketSansTTFLight;
  line-height: 150%;
  
  @media (min-width:768px) and (max-width:1280px) { 
    box-sizing: auto;
  }

  @media (max-width: 768px) {
    box-sizing: auto;
  }
`;

const MainArticle = styled.article`
  display: flex;
  flex-direction: row;
  max-height: 300px;
  justify-content: center;
`;

const TitleStrong = styled.strong`
  font-size: 7rem;
  font-family: tway_sky;
  padding-top: 35px;

  @media (max-width: 768px) {
    font-size: 6rem;
    /* padding-left: 0px; */
  }
`;

const TitleWrapper = styled.div`
  padding-top: 30px;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;


const VideoSection = styled.div`
  margin-left: 40px;
  display: flex;
  flex: row;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border-radius: 50%;
  overflow: hidden;
  
  @media (min-width:768px) and (max-width:1280px) { 
    /* box-sizing: auto; */
    /* width: 90%; */
    height: auto;
    border: 0;
  }
  
  @media ( max-width: 768px ) {
    /* box-sizing: auto; */
    /* width: 90%; */
    /* display: none; */
    margin: 0;
    border-radius: 0;
    height: auto;
  }
  `;