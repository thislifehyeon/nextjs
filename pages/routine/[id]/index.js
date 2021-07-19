import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodayRoutine from '../../../src/components/TodayRoutine';
import { routineInfo } from '../../../redux/reducers/routineInfo';
import Tabmenu from '../../../src/components/newTabMenu';
import TimerModal from '../../../src/components/TimerModal';
function New() {
  const routineId = useSelector((state) => state.routineInfo.id);
  const routines = useSelector((state) => state.routine.result);
  const [workouts, setWorkouts] = useState(null);
  const [timerOpen, setTimerOpen] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    getMyRoutine(routineId);
  }, []);

  const getMyRoutine = async () => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=1`;
    const res = await axios.get(url, { withCredentials: true });
    console.log('겟루틴new@@@@@@@@');
    dispatch(routineInfo(res.data.id, res.data.name, res.data.tasks));
  };

  const TimerOpenHandler = () => {
    setTimerOpen(!timerOpen)
  }

  return (
    <>
    <Container>
      <ContainerTitle>나만의 루틴을 완성한 후 운동을 시작하세요</ContainerTitle>
      <SectionContainer>
        <FirstSection>
          <Tabmenu></Tabmenu>
        </FirstSection>
        <SecondSection>
          <TodayRoutine TimerOpenHandler={TimerOpenHandler}></TodayRoutine>
        </SecondSection>
      </SectionContainer>
    </Container>
    {/* <TimerModal timerOpen={timerOpen} setTimerOpen={setTimerOpen} ></TimerModal> */}
    </>
  )
}

export default New


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

