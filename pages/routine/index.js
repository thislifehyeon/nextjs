import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import RoutineLists from './RoutineLists'
import styled from 'styled-components';
import axios from 'axios';
import { currentRoutine } from '../../redux/reducers/routine';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { routineInfo } from '../../redux/reducers/routineInfo';

function Routine() {
  const router = useRouter();
  const dispatch = useDispatch();
  const routines = useSelector((state) => state.routine.result);
  const routineId = router.query.id;

  useEffect(() => {
    getRoutine();
  }, []);

  const getRoutine = () => {
    axios.get(`${process.env.NEXT_PUBLIC_url}/testroutine`, { withCredentials: true }).then((res) => dispatch(currentRoutine(res.data)));
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

  const deleteRoutine = async (routineId) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${routineId}`;
    const res = await axios.delete(url);
    console.log(`${userId}의 루틴을 삭제했습니다`);
    getRoutine(userId, routineId);
  };

  const getMyRoutine = async (e) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${e.target.id}`, { withCredentials: true });
    dispatch(routineInfo(res.data.id, res.data.name, res.data.tasks));
  };

  return (
    <>
      <RoutinePageHeader></RoutinePageHeader>
      <RoutineSection>
        {routines &&
          routines.map((routine, index) => (
            <>
              <Link href={`/routine/${routine.id}`} key={index}>
                <RoutineContainer
                  id={routine.id}
                  key={index}
                  onClick={(e) => {
                    getMyRoutine(e);
                  }}
                >
                  <img id={routine.id} src={`${process.env.NEXT_PUBLIC_url}/${routine.routineimage}`}></img>
                  <RoutineItem id={routine.id}>
                    <DeleteButton className='delete_btn' id={routine.id} onClick={() => deleteRoutine(routineId)}>
                      -
                    </DeleteButton>
                    <RoutineTitle id={routine.id}>{routine.name}</RoutineTitle>
                  </RoutineItem>
                </RoutineContainer>
              </Link>
            </>
          ))}
        <AddRoutineButton
          onClick={() => {
            addRoutine(userId);
          }}
          // icon={{ as: 'i', className: 'plus'}}
        >
          +
        </AddRoutineButton>
      </RoutineSection>
    </>
  );
}

export default Routine;

const RoutineSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
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
  bottom: 5%;

  :hover {
    transform: rotate(45deg);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    font-size: 2.4rem;
    text-shadow: 1rem;
  }
`;

const RoutinePageHeader = styled.div`
  padding: 50px;
`;

const RoutineContainer = styled.ul`
  display: flex;
  padding: 20px;
  flex-direction: row;
  /* margin-left: 40px; */
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 5%;
  margin: 30px;
  cursor: pointer;
  img {
    height: 150px;
    width: 150px;
  }

  /* :hover {
    border: 7px solid #ffffff;
  } */
`;

const RoutineItem = styled.div`
  padding: 0 5px;
  list-style: none;
  margin: 5px;
  border-radius: 15px;
  font-size: 1rem;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .delete_btn {
    position: absolute;
    align-self: flex-end;
    margin: 0px 0px 130px;
  }
`;

const RoutineTitle = styled.h2`
  width: 250px;
  text-align: center;
`;

const DeleteButton = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  /* position: relative; */
  width: 20px;
  height: 20px;
  color: #ffffff;
  cursor: pointer;
  background-color: #b00000;
  text-align: center;
  margin-right: 10px;

  :hover {
    height: 22px;
    width: 22px;
    font-size: 1.3rem;
  }
`;
