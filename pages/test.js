// import { ParallaxProvider } from 'react-scroll-parallax';
// import styled from 'styled-components';
// import { Parallax } from 'react-scroll-parallax';
// import Image from 'next/image';

// export default function test() {
//   return (
//     <Body>
//       <Parallax offsetYMin={200} offsetYMax={1500}>
//         <Image src='/../public/a.png' width='1000' height='300' />
//       </Parallax>

//       <Parallax offsetYMin={-500} offsetYMax={2000}>
//         <Image src='/../public/b.png' width='1000' height='500' />
//       </Parallax>
//     </Body>
//   );
// }

// const Body = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   width: 100vw;
//   height: 100vh;
//   color: red;
//   font-size: 10rem;
// `;

// const Content = styled.div`
//   background-position-y: position / 2;
// `;
import Image from 'next/image';
import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
export default function test() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    console.log(scrollY);
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <Body>
        <Content>
          <Parallax y={[-20, position / 2]} tagOuter='figure'>
            <StyledImage src='/../public/2.jpeg' alt='2' width={500} height={500} />
          </Parallax>
          <Parallax y={[position / 2, 20]} tagOuter='figure'>
            <StyledImage src='/../public/a.png' alt='1' width={500} height={500} />
          </Parallax>
        </Content>
      </Body>
    </>
  );
}

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  height: 300vh;
  width: 100vw;
`;
const StyledImage = styled(Image)`
  border-radius: 10px;
  position: fixed;
`;
