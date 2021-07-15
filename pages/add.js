import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20%;
  opacity: ${(props) => (props.isNewOpen ? "100%" : "0")};
  top: ${(props) => (props.isNewOpen ? "0" : "-100%")};
`;

const AddTitle = styled.h1`
  text-align: center;
`;

const AddInput = styled.input`
  margin: 40px;
  padding: 5px;
`;

const AddInput2 = styled.input`
  margin: 40px;
  padding: 5px;
  height: 150px;
`;

const AddButton = styled.button`
  background-color: black;
  color: white;
  width: 80px;
  font-size: 0.8rem;
  margin: 30px 45%;
  cursor: pointer;
`;

export default function add() {
  const router = useRouter();
  const userId = 1;
  // const workouts = context.data;
  // const workoutInfo = useSelector(state=> state.workout.data)
  // console.log(workoutInfo);
  const [workoutInfo, setWorkoutInfo] = useState({});
  const onChange = (e) => {
    const { value, name } = e.target;
    setWorkoutInfo({ ...workoutInfo, [name]: value });
  };

  console.log(workoutInfo);

  const addWorkout = (userId, workoutInfo) => {
    const url = `http://localhost:3000/exercise`;
    const body = {
      userid: userId,
      name: workoutInfo.name,
      set_time: workoutInfo.time,
      rest_time: workoutInfo.rest,
      memo: workoutInfo.memo,
    };
    axios
      .post(url, body, { withCredentials: true })
      .then((res) => {
        console.log('exercise@@@@@@@@@@', res);
      })
      .then(() => console.log('add성공'));
  };

  return (
    <>
      <AddContainer>
        <AddInput placeholder='이름' name='name' onChange={(e) => onChange(e)}></AddInput>
        <AddInput placeholder='운동 시간' name='set_time' type='number' onChange={(e) => onChange(e)}></AddInput>
        <AddInput name='rest_time' placeholder='휴식 시간' type='number' onChange={(e) => onChange(e)}></AddInput>
        <AddInput2 name='memo' placeholder='피드백(메모)' onChange={(e) => onChange(e)}></AddInput2>
      </AddContainer>
      <AddButton onClick={() => addWorkout(userId, workoutInfo)}>운동 추가</AddButton>
    </>
  );
}
