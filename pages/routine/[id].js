import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { currentRoutine } from '../../redux/reducers/routine';
import { useDispatch, useSelector } from 'react-redux';
import TodayRoutine from '../workout';
import Tabmenu from '../../src/components/Tabmenu';
import Timer from '../timerpage';
import { routineInfo } from '../../redux/reducers/routineInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HeadSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const BodySection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
`;

const BodyLeftSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-right: 1px dotted;
  min-width: 50vw;
  margin-top: 15px;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 1280px) {
    min-width: 30%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const TraningSection = styled.div`
  background-color: #000035;
  height: 100%;
  min-width: 220px;
  box-sizing: border-box;
  margin-top: 15px;

  @media (max-width: 1280px) {
    display: none;
  }
`;

const BodyRightSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #000035;
  margin-top: 15px;
  width: 45vw;
  padding-bottom: 50px;
  height: 100%;

  @media (max-width: 1280px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    font-size: 11em;
    font-size: 8rem;
    padding-bottom: 30px;
  }
`;

const DndSection = styled.div`
  /* width: 50vw; */
`;
// const RoutineSection = styled.div`
//   margin: 10px;
//   display: flex;
//   justify-content: center;
//   flex-direction: row;

//   @media ( max-width: 768px ) {
//     display: flex;
//     flex-direction: column;
//     flex-wrap: wrap;
//     max-width: 300px;
//     /* justify-content: start; */
//     /* align-items: center; */
//   }
// `;

export default function Main() {
  const routines = useSelector((state) => state.routine.result);
  const routineId = useSelector((state) => state.routineInfo.id);
  const [workouts, setWorkouts] = useState(null);
  const dispatch = useDispatch();
  // const userId = 5;
  // console.log(userId);
  console.log('루틴목록', routines);
  console.log('루틴아이디', routineId);

  useEffect(() => {
    getMyRoutine(routineId);
  }, []);

  const getMyRoutine = async (routineId) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${routineId}`;
    const res = await axios.get(url, { withCredentials: true });
    // console.log(res.data);
    console.log('겟루틴');
    dispatch(routineInfo(res.data.id, res.data.name, res.data.tasks));
    // dispatch(dndUpdate(res.data.tasks))
  };

  return (
    <>
      <Container>
        <HeadSection />
        <BodySection>
          <TraningSection>
            <Tabmenu></Tabmenu>
          </TraningSection>
          <BodyLeftSection>
            <TodayRoutine></TodayRoutine>
          </BodyLeftSection>
          <BodyRightSection>{/* <Timer/> */}</BodyRightSection>
        </BodySection>
      </Container>
    </>
  );
}
