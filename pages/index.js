import styled from 'styled-components'
import Image from 'next/image'
import Nav from '../src/components/Nav/Nav'
import {useRouter} from 'next/router';
import ReviewContainer from '../src/components/ReviewCard/Container'
import ReviewCard from '../src/components/ReviewCard/Card'
import WorkoutVideo from '../src/components/video/video';
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
  margin-top: 10vh;
  font-family: NanumGothic-ExtraBold;
  display: flex;
  flex: row;
  justify-content: center;
  max-width: 100%;
  color: #000036;
  padding: 40px;
  
  @media (min-width:768px) and (max-width:1023px) { 
    box-sizing: auto;
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    /* min-height:100%; */
    /* height: 120%; */
    margin-bottom: 200px;
  }
  
  @media ( max-width: 768px ) {
    box-sizing: auto;
    padding: 10px 0px;
    flex-direction: column;

  }
  `;

const StartButton = styled.button`
  width: 250px;
  height: 90px;
  margin-top: 20px;
  color: lightgrey;
  font-size: 1.8rem;
  font-family: NanumGothic-ExtraBold;
  background-color: #000035;
  border-radius: 30%;

  :hover {
    border: 5px solid #000035;
    color: #000035;
    background-color: lightgrey;
    opacity: 0.7;
  }
`;

const TitleContainer = styled.div`
  margin-left: 30px;
  display: block;
  flex-wrap: wrap;

  @media ( max-width: 768px ) {
    box-sizing: auto;
    max-height: 20%;
    padding: 10px 0px;
  }
`;

const TitleContents = styled.h3`
  padding: 60px 50px;
  
    @media (min-width:768px) and (max-width:1023px) { 
    box-sizing: auto;
  }

  @media ( max-width: 768px ) {
    box-sizing: auto;
  }
`;

const MainArticle = styled.article`
  display: flex;
  flex-direction: row;
  max-height: 300px;
  /* margin: 0 20px; */
`;

const TitleStrong = styled.strong`
  font-size: 8rem;
  padding-top: 120px;
`;

const TitleWrapper = styled.div`
  font-size: 3.2rem;
  padding-top: 120px;


  p {
    font-size: 2.0rem;
    margin: 0;
    text-align: center;
  }

  strong {
    font-size: 5rem;
    margin: 0 25px;
  }
`;


const UsingSection = styled.div`
  height: 80vh;
  background-color: #000036;
  max-width: 100%;
  `;

const VideoSection = styled.div`
  /* padding:15%; */
  display: flex;
  flex: row;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
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
      font-family: NanumGothic-ExtraBold;
    }

    article {
      text-align: center;
      font-family: InkLipquid;
      font-size: 1.5rem;
      margin-bottom: 50px;
    }

  }
  @media ( max-width: 768px ) {
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

const ReactiveSection= styled.div`
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
                <p>마음대로 만드는 <br/>손 안의 트레이너</p>
                <strong>루띤</strong>
              </TitleWrapper>
            </MainArticle>
            <TitleContents>
              남이 시켜서 하는 운동은 이제 그만!! <br/>
              내가 만든 나만의 루틴으로 운동하고 <br /> 
              당신의 목표를 달성을 공유해 보세요.<br/>
              <StartButton onClick={() => router.push('/routine')}>운동 시작하기</StartButton>
            </TitleContents>
          </TitleContainer>
          <Image src='/../public/main.jpeg' width='800' height='600'></Image>
        </MainSection>

        <UsingSection>
        </UsingSection>

        <VideoSection>
          <WorkoutVideo></WorkoutVideo>
        </VideoSection>

        <ReviewSection>
          <div>
            <h2>rouDDine을 사용한 많은 분들이 목표 달성에 성공하셨습니다.</h2>
            <article>하루의 시작도, 하루의 끝도 우리에겐 너무나 소중하니까, 정해진 시간 안에 최고의 효율을 경험해 보세요! 당신도 할 수 있습니다!</article>
          </div>
          <ReviewContainer>
          </ReviewContainer>
        </ReviewSection>

        <ReactiveSection></ReactiveSection>

      </Container>
      <Footer>
      </Footer>
    </>
  )
}

export default App;
