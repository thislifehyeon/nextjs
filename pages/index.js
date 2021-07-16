import styled from 'styled-components'
import Image from 'next/image'
import Nav from '../src/components/Nav/Nav'
import {useRouter} from 'next/router';
import ReviewContainer from '../src/components/ReviewCard/Container'
import ReviewCard from '../src/components/ReviewCard/Card'
import WorkoutVideo from '../src/components/video';
// import {Link} from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Logo = styled.span`
  font-size: 2rem;
  padding: 10px;
`;

const MainSection = styled.div`
  height: 100%;
  /* margin-top: 50px; */
  display: flex;
  flex: row;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  color: #000036;
  padding: 0 40px;
  
  @media (max-width:1280px) { 
    box-sizing: auto;
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    /* min-height:100%; */
    /* height: 120%; */
    margin-bottom: 200px;
  }

  @media (max-width: 768px) {
    box-sizing: auto;
    padding: 10px 0px;
    flex-direction: column;
  }
`;

const StartButton = styled.div`
  width: 250px;
  height: 90px;
  margin : 0 200px;
  text-align: center;
  font-size: 1.8rem;
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
  margin-left: 30px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  flex-wrap: wrap;

  @media ( max-width: 768px ) {
    margin: 0;
  }
`;

const TitleChild = styled.p`
  min-width: 350px;
  padding-left: 10px;
  font-size: 2.5rem;
  margin: 0;
  text-align: left;
  font-family: tway-sky;

  @media ( max-width: 768px ) {
    font-size: 2.0rem;
  }
`;

const RoutineTitle = styled.div`
  font-size: 8rem;
  font-family: tway-sky;
  text-align: center;
  padding-left: 40px;

  @media (max-width: 768px) {
    font-size: 7rem;
  }
`;

const TitleContents = styled.h3`
  padding: 60px 50px;
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
  /* text-align: center; */
  /* margin: 0 20px; */
`;

const TitleStrong = styled.strong`
  font-size: 7rem;
  font-family: tway-sky;
  padding-top: 35px;

  @media (max-width: 768px) {
    font-size: 6rem;
    padding-left: 70px;
  }
`;

const TitleWrapper = styled.div`
  padding-top: 30px;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const UsingSection = styled.div`
  height: 80vh;
  background-color: #000036;
  max-width: 100%;
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
  /* border: 3px solid black; */

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

const ReviewSection = styled.div`
  color: #343a40;
  background-color: #ffffff;
  margin-top: 60px;
  padding: 100px 120px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;

  div {
    margin: 0 auto;

    h2 {
      text-align: center;
      font-size: 2rem;
      font-family: Army_Bold;
    }

    article {
      text-align: center;
      font-family: NEXONLv1GothicLight;
      /* font-family: NEXONLv1GothicRegular; */
      font-size: 1.5rem;
      margin-bottom: 50px;
    }
  }
  @media (max-width: 768px) {
    padding: 10px 0px;
  }
`;

const Footer = styled.footer`
  height: 20vh;
  background-color: #000036;
  display: flex;
  flex-direction: row;
  max-width: 100%;
`;

const ReactiveSection = styled.div`
  height: 80vh;
  max-width: 100%;
`;

function App() {
  const router = useRouter();
  return (
    <>
      <Container>
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

        <UsingSection></UsingSection>


        <ReviewSection>
          <div>
            <h2>rouDDine을 사용한 많은 분들이 목표 달성에 성공하셨습니다.</h2>
            <article>하루의 시작도, 하루의 끝도 우리에겐 너무나 소중하니까. <br/> 
            정해진 시간 안에 최고의 효율을 경험해 보세요. 당신도 할 수 있습니다!</article>
          </div>
          <ReviewContainer></ReviewContainer>
        </ReviewSection>

        <ReactiveSection></ReactiveSection>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
