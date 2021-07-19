import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalOpenAction } from '../../../redux/reducers/modal';
import { workoutInfo } from '../../../redux/reducers/workoutInfo';
import { routineInfo } from '../../../redux/reducers/routineInfo';

import axios from 'axios';
import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';

function Modal({ 
  currentWorkouts, 
  setCurrentWorkouts, 
  setModalOpen, 
  modalOpen, 
  workoutId
}) {
  const [values, setValues] = useState({ name: '', set_number: '', minutes: '', seconds: '', rest_minutes: '', rest_seconds: '', memo: '' });
  const inputHandler = (e) => {
    //input value 핸들링 함수
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const updateWorkoutInfo = async (workoutId, values) => {
    console.log("요청");
    const url = `${process.env.NEXT_PUBLIC_url}/testexercise`
    let body = {
      workoutid: workoutId,
      name: values.name,
      memo: values.memo,
    }
    let set_time = values.minutes * 6 + values.seconds
    let rest_time = values.rest_minutes * 6 + values.rest_seconds
    
    if(values.set_number !== "") {
      body.set_number = values.set_number
    }
    if(set_time !== "") {
      body.set_time = values.set_time
    }
    if(rest_time !== "") {
      body.rest_time = values.rest_time
    }    

    const res = await axios.patch(url, body, {withCredential: true})
    console.log(res);
    setModalOpen(!modalOpen)
    setCurrentWorkouts(res.data.result)
    console.log(currentWorkouts);
  };

  // const getMyRoutine = async (routineId) => {
  //   const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${routineId}`;
  //   const res = await axios.get(url, { withCredentials: true });
  //   console.log(res.data);
  //   dispatch(routineInfo(res.data.id, res.data.name, res.data.tasks));
  // };

  // useEffect(() => {
  //   // setModalOpen(false);
  //   getMyRoutine(routineId);
  // }, []);

  return (
    <ModalSection modalOpen={modalOpen}>
      <div className='input_container'>
        <div>수정 하고싶은 부분을 수정해주세요 </div>
        <div className='workout_name'>
          <div>운동이름</div>
          <input
            name='name'
            onChange={(e) => {
              inputHandler(e);
            }}
          />
        </div>
        <div className='set_input'>
          <div>운동시간</div>
          <div>
            <input
              name='minutes'
              type='number'
              placeholder='분'
              min='0'
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              name='seconds'
              type='number'
              placeholder='초'
              min='0'
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              name='set_number'
              type='number'
              placeholder='세트'
              min='0'
              onChange={(e) => {
                inputHandler(e);
              }}
            />
          </div>
        </div>
        <div className='rest_input'>
          <div>휴식 시간</div>
          <div>
            <input
              name='rest_minutes'
              type='number'
              placeholder='분'
              min='0'
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              name='rest_seconds'
              type='number'
              placeholder='초'
              min='0'
              onChange={(e) => {
                inputHandler(e);
              }}
            />
          </div>
        </div>
        <div className='input_memo'>
          <div>메모</div>
          <textarea
            name='memo'
            onChange={(e) => {
              inputHandler(e);
            }}
          />
        </div>
      </div>
      <ModalSaveBtn
        onClick={() => {
          updateWorkoutInfo(workoutId, values);
        }}
      >
        저장
      </ModalSaveBtn>
    </ModalSection>
  );
}

export default Modal;

export const ModalContainer = styled.section`
  height: 40vh;
  width: 20vw;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 50%;
  align-items: center;
  position: fixed;
  z-index: 101;
`;

export const ModalSection = styled.section`
  /* background: rgba(255, 255, 255, 0.6); */
  background-color: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  /* -webkit-backdrop-filter: blur(12px); */
  border-radius: 10px;
  margin: 10% 30%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  /* position: absolute; */
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 999;
  left: 0;
  opacity: ${(props) => (props.modalOpen ? '100%' : '0')};
  top: ${(props) => (props.modalOpen ? '0' : '-1500%')};
  height: 580px;
  /* right: 100px;
  top: 50px; */
  width: 400px;
  .input_container {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    height: 70%;
    justify-content: space-around;
    input {
      border: 1px solid grey;
      border-radius: 3px;
      padding: 3px;
    }
    .workout_name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      > div {
        color: grey;
        align-self: flex-start;
        font-size: 0.8rem;
        padding-bottom: 5px;
      }
      > input {
        width: 64%;
      }
    }
    .set_input {
      display: flex;
      flex-direction: column;
      > div {
        padding-bottom: 5px;
        font-size: 0.8rem;
        color: grey;
      }
      input {
        width: 40px;
        margin-right: 5px;
        :nth-child(3) {
          width: 50px;
        }
      }
    }
    .rest_input {
      display: flex;
      flex-direction: column;
      color: grey;
      > div {
        padding-bottom: 5px;
        font-size: 0.8rem;
      }
      input {
        width: 40px;
        margin-right: 5px;
      }
    }
    .input_memo {
      height: 30%;
      border-radius: 3px;
      > div {
        color: grey;
        font-size: 0.8rem;
        padding-bottom: 5px;
      }
      > textarea {
        width: 100%;
        height: 50%;
        resize: none;
      }
    }
  }
  /* 
  @media screen and (max-width: 768px) {
    min-width: 80%;
  }

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 50%;
  } */
`;

export const ModalSaveBtn = styled.span`
  font-size: 0.2rem;
  cursor: pointer;
  padding: 5px;
  border: 2px solid #000035;
  background-color: #000035;
  color: #ffffff;
  font-size: 1rem;
`;