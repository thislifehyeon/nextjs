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
  const [timerOpen, setTimerOpen] = useState(false)
  console.log(data);

  return (
    <>
      <Container>
        <ContainerTitle>
          <div>나만의 루틴을 완성한 후</div>
          <span>&nbsp; </span>
          <div>운동을 시작하세요</div>
        </ContainerTitle>
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
            timerOpen={timerOpen}
            setTimerOpen={setTimerOpen}
            routineId={routineId} 
            currentWorkouts={currentWorkouts}
            setCurrentWorkouts={setCurrentWorkouts}
            />
          </SecondSection>
        </SectionContainer>
      </Container>
      <TimerModal taskIds={data[0].tasks} timerOpen={timerOpen} setTimerOpen={setTimerOpen}></TimerModal>
    </>
  )
}

export default New

export async function getServerSideProps(ctx) {
  //하나의 루틴 불러오기
  const token = ctx.req.headers.cookie.split(' ')[1].split('=')[1];
  const res1 = await axios.get(
    `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${ctx.params.id}`, 
    {headers: {  Cookie:`accessToken=${token}` }
  });
  const data = res1.data;
  //모든 루틴 불러오기
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
  width: 98vw;
`;

const ContainerTitle = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: 2.4rem;
  font-family: DoHyeon-Regular;
  margin: 120px 0 50px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  span {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1280px) {
    /* flex-direction: column; */
    /* max-width: 100%;
    height: 80%;
    margin-top: 15px;
    padding: 30px; */
  }

  @media (max-width: 768px) {
    /* max-width: 100%;
    height: 80%;
    margin-top: 15px;
    padding: 30px; */
  }
`;

const FirstSection = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: row;


  @media (max-width: 1280px) {
    display: none;
    /* max-width: 100%;
    height: 80%;
    margin-top: 15px;
    padding: 30px; */
  }
`;

const SecondSection = styled.div`
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  /* width:30%; */
  /* background-color: pink; */
  border-radius: 30px;

  @media (max-width: 1280px) {
    max-width: 450px;
    flex-direction: column-reverse;
    /* min-width: 280px; */
  }
`;