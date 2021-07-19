import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { currentRoutine } from '../../redux/reducers/routine';
import TodayRoutine from '../../src/components/workout';
import { useDispatch, useSelector } from 'react-redux';
import { routineInfo } from '../../redux/reducers/routineInfo';
import Tabmenu from '../../src/components/newTabMenu';
import TimerModal from '../../src/components/TimerModal';
import Cookies from 'js-cookie';


function New({data}) {
  const routineId = data[0].id
  const [currentWorkouts, setCurrentWorkouts] = useState(data[0].tasks)  
  console.log(currentWorkouts);

  return (
    <>
      <Container>
        <ContainerTitle>나만의 루틴을 완성한 후 운동을 시작하세요</ContainerTitle>
        <SectionContainer>
          <FirstSection>
            <Tabmenu 
            data={data[1]} 
            routineId={routineId} 
            currentWorkouts={currentWorkouts} 
            setCurrentWorkouts={setCurrentWorkouts}
            />
          </FirstSection>
          <SecondSection>
            <TodayRoutine 
            routineId={routineId} 
            currentWorkouts={currentWorkouts}
            setCurrentWorkouts={setCurrentWorkouts}
            />
          </SecondSection>
        </SectionContainer>
      </Container>
    </>
  )
}

export default New

export async function getServerSideProps(ctx) {
  const token = ctx.req.headers.cookie.split(' ')[1].split('=')[1];
  const res1 = await axios.get(
    `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${ctx.params.id}`, 
    {headers: {  Cookie:`accessToken=${token}` }
  });
  const data = res1.data;

  const res2 = await axios.get(
    `${process.env.NEXT_PUBLIC_url}/testexercise`, 
    {headers: {  Cookie:`accessToken=${token}` 
  }})
  const items = res2.data.result;

  return {
    props: {
      data: [data, items]
      // data: data,
      // items: items,
    },
  };
}

// export const getInitialProps = async (ctx) => {
//   const token = ctx.req.headers.cookie.split(' ')[1].split('=')[1];
//   // const allCookies = cookies(ctx);
//   // const token = allCookies;
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_url}/routine?routine_id=1`, {
//     headers: { Cookie: `accessToken=${token}` },
//     withCredentials: true,
//   });
//   const data = res.data;
//   return {
//     props: {
//       data,
//     },
//   };
// };


// export async function getStaticProps(ctx) {
//   const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${ctx.params.id}`;
//   const res = await axios.get(url, { withCredentials: true });
//   const data = res.data;
//   return {
//     props: {
//       data: data
//     }
//   }
// }

// export async function getStaticPaths(ctx) {
//   const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=1`;
//   const res = await axios.get(url, { withCredentials: true });
//   const data = res.data;

//   const paths ={params: {id: "1"}}
//   return {
//     paths, fallback : false
//   }
// }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* padding-top: 5%; */
  height: 100vh;
  width: 100vw;
`;

const ContainerTitle = styled.div`
  text-align: center;
  font-size: 2.4rem;
  font-family: DoHyeon-Regular;
  margin: 120px 0 50px 0;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const FirstSection = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: row;
`;

const SecondSection = styled.div`
  max-height: 85vh;
  width:30%;
  /* background-color: pink; */
  border-radius: 30px;
`;