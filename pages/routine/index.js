import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import RoutineLists from './RoutineLists'
import styled from 'styled-components'
import axios from 'axios'
import { currentRoutine } from '../../redux/reducers/routine';
import {useRouter} from 'next/router'
import Link from 'next/link'

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

const AddRoutineButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #000036;
  color: #ffffff;
  font-size: 2rem;
  position: absolute;
  right: 2%;
  bottom: 30%;

  :hover {
    transform: rotate( 45deg );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    font-size: 2.4rem;
    text-shadow: 1rem;
  }
`;

function Routine() {
  const router = useRouter();
  const dispatch = useDispatch();
  const routines = useSelector((state) => state.routine.result);
  const userId = 5;
  console.log(userId);
  console.log(routines);

  useEffect(() => {
    getRoutine(userId);
  }, []);

  const getRoutine = async (userId) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine`;
    const res = await axios.get(url, { withCredentials: true });
    dispatch(currentRoutine(res.data));
    // setRoutines(res.data.result)
    console.log(res);
  };

  const addRoutine = async (userId) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine`;
    const body = {
      userid: userId,
      routine_name: '새 루틴',
      share: 'false',
    };
    const res = await axios.post(url, body, { withCredentials: true });
    console.log(res);
    await getRoutine(userId);
  };

  return (
    <RoutineSection>
    {routines &&
      routines.map((routine) => (
        <RoutineLists
        id={routine.id}
        img={routine.routineimage}
        // workouts={workouts}
        userId={userId}
        key={routine.id}
        routines={routines}
        routine={routine}
        routineId={routine.id}
        getRoutine={getRoutine}
        >
        </RoutineLists>
        ))}
    <AddRoutineButton 
      onClick={()=>{addRoutine(userId)}}
      // icon={{ as: 'i', className: 'plus'}}
      >+</AddRoutineButton>
  </RoutineSection>
  )
}

export default Routine
