import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export default function Update() {
  const router = useRouter();
  const routineId = useSelector((state) => state.id_reducer.curRoutineId);
  const workoutId = useSelector((state) => state.id_reducer.curWorkoutId);
  const userId = useSelector((state) => state.id_reducer.userId);
  const [curWorkout, setCurWorkout] = useState(null);
  const [workoutInfo, setWorkoutInfo] = useState({});

  const getUserInfo = async () => {
    const url = `${process.env.NEXT_PUBLIC_url}/user?user_id=${userId}`;
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setWorkoutInfo({ ...workoutInfo, [name]: value });
  };
  console.log(workoutInfo);
  useEffect(() => {
    getCurWorkout();
  }, []);

  const getCurWorkout = async () => {
    const url = `${process.env.NEXT_PUBLIC_url}/exercise?userid=${userId}`;
    await axios.get(url).then((res) => {
      // console.log(res)
      const results = res.data.result;
      const curWorkouts = results.filter((result) => result.id === workoutId);
      setCurWorkout(curWorkouts[0]);
    });
  };

  const updateWorkout = async () => {
    console.log('클릭');
    const url = `${process.env.NEXT_PUBLIC_url}/exercise`;
    const body = {
      workoutid: workoutId,
      name: workoutInfo.name,
      set_time: workoutInfo.time,
      rest_time: workoutInfo.rest,
      memo: workoutInfo.memo,
    };
    await axios.patch(url, body).then((res) => {
      console.log(res);
      router.push(`/workout/${routineId}`);
    });
  };
  // console.log(curWorkout.name)
  return (
    <>
      <AddContainer>
        {/* <div>{curWorkout.name}</div> */}
        <AddInput placeholder={curWorkout && curWorkout.name} name='name' onChange={(e) => onChange(e)}></AddInput>
        <AddInput
          placeholder={curWorkout && curWorkout.set_time}
          // placeholder='운동 시간'
          name='time'
          onChange={(e) => onChange(e)}
        ></AddInput>
        <AddInput
          name='rest'
          placeholder={curWorkout && curWorkout.rest_time}
          // placeholder='휴식 시간'
          onChange={(e) => onChange(e)}
        ></AddInput>
        <AddInput2
          name='memo'
          placeholder={curWorkout && curWorkout.memo}
          // placeholder='피드백(메모)'
          onChange={(e) => onChange(e)}
        ></AddInput2>
      </AddContainer>
      <AddButton onClick={updateWorkout}>운동 수정</AddButton>
    </>
  );
}

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20%;
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
