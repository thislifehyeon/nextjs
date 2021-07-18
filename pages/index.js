import styled from 'styled-components'
import Image from 'next/image'
import Nav from '../src/components/Nav/Nav'
import {useRouter} from 'next/router';
import Using from '../src/components/mainpage/UsingSection/Using';
import Main from '../src/components/mainpage/MainSection/Main';
import Footer from '../src/components/mainpage/Footer/Footer';
import Review from '../src/components/mainpage/ReviewSection/Review';
import react, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
// import {Link} from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ReactiveSection = styled.div`
  height: 80vh;
  max-width: 100%;
  `;

const ButtonWrapper = styled.div`
  /* position: relative; */
  font-size: 10px;
  position: fixed; 
  cursor: pointer;
  right: 40px;
  bottom: 40px;
  /* z-index: -10;  */
  z-index: ${(props) => (props.btnStatus ? '10' : '-10')};
  opacity: ${(props) => (props.btnStatus ? '1' : '0')};
  display: block;
`;

const TopButtonImage = styled.img`
  height: 50px;
  width: 50px;

`;

function App() {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if(scrollY > 2000) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  }

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);
    setBtnStatus(false);
  }

  useEffect(() => {
    // console.log("ScrollY", scrollY);
  }, [scrollY])

  useEffect(() =>{
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    }
  })

  return (
    <>
      <Container>
        <ButtonWrapper
          onClick={handleTop}
          btnStatus={btnStatus}
        >
          <strong>TOP</strong>
          <TopButtonImage 
            src='/icon/1f3cb-fe0f.svg'
            ></TopButtonImage>
          </ButtonWrapper>
        <Main/>
        <Using/>
        <Review/>

        <ReactiveSection></ReactiveSection>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
