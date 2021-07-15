import styled from 'styled-components';
import RoutineLists from './RoutineLists';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { currentRoutine } from '../../redux/reducers/routine';
import { useDispatch, useSelector } from 'react-redux';
import TodayRoutine from '../workout/Dnd';
import Tabmenu from '../../src/components/Tabmenu'
import Timer from '../timerpage'
import {routineInfo} from '../../redux/reducers/routineInfo'


const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HeadSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const RoutineSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
  /* border: 2px inset; */
  /* box-shadow: 0 0 5px 0px; */
  /*     
  @media ( max-width: 768px ) {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 300px;
  justify-content: start;
  align-items: center; 
  } */
`;

const BodySection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
`;

const BodyLeftSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  border-right: 1px dotted;
  width: 50vw;
  height: 100%;
  overflow-y: scroll;

  @media ( max-width: 1024px ) {
    display: none;
  }
`;

const BodyRightSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 100%;

`;

const DndSection = styled.section`
  /* width: 50vw; */
`;
// const RoutineSection = styled.section`
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

const TabMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function Main() {
  const routines = useSelector((state) => state.routine.result);
  const routineId = useSelector((state) => state.routineInfo.id)
  const [workouts, setWorkouts] = useState(null);
  const dispatch = useDispatch();
  const userId = 5;
  console.log(userId);
  console.log(routines);
  console.log(routineId)

  useEffect(() => {
    // if(!routineId){
    //   location.replace(`/routine`)
    // } else {
      getMyRoutine(routineId)
    // }
  }, [])

  const getMyRoutine = async(routineId) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${routineId}`
    const res = await axios.get(url, { withCredentials: true });
    console.log(res.data);
    dispatch(routineInfo(res.data.id, res.data.name, res.data.tasks))
    // dispatch(dndUpdate(res.data.tasks))
  }

  return (
    <>
    <Container>
      <HeadSection/>
      <BodySection>
        <BodyLeftSection>
          <Tabmenu></Tabmenu>
          <TodayRoutine></TodayRoutine>
        </BodyLeftSection>
        <BodyRightSection>
          <Timer/>
        </BodyRightSection>
        </BodySection>
      </Container>
    </>
  );
}
