import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {routineInfo} from '../../redux/reducers/routineInfo'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Image from 'next/image';

const RoutineContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 80px 15px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 50px;

  img {
    height: 300px;
    width: 300px;
  }
`;

const RoutineHeader = styled.div`
`;

const RoutineList = styled.li`
  background: rgba( 255, 255, 255, 0.60 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  padding: 20px 15px;
  margin: 4px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: pointer;
  background-color:#dbe4e4;
  list-style: none;

  :hover {
    background-color: #2ac1bc;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex: row;
`;

const RoutineItem = styled.div`
  padding: 0 5px;
  list-style: none;
  margin: 5px;
  border-radius: 15px;
  font-size: 1rem;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const RoutineTitle = styled.h2`
  width: 250px;
  text-align: center;
`;

const RoutineHeaderTitle = styled.h4`
  width: 110px;
`;

const DeleteButton = styled.button`
  position: sticky;
  /* background: none; */
`;
export default function RoutineLists({
  routineId,
  routine,
  getRoutine,
  userId,
  img,
}) {
  const router = useRouter();
  const dispatch = useDispatch();

  const deleteHandler = (routineId) => {
    // const routineId = e.target.parentElement.id
    // console.log(e.target.parentElement.id);
    deleteRoutine(routineId)
  }
  const deleteRoutine = async (routineId) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${routineId}`;
    const res = await axios.delete(url)
    console.log(`${userId}의 루틴을 삭제했습니다`);
    console.log(res);
    getRoutine(userId, routineId);
  };
  
  const getMyRoutine = async(e) => {
    const id = e.target.id
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${id}`
    const res = await axios.get(url, { withCredentials: true });
    console.log(res.data);
    dispatch(routineInfo(res.data.id, res.data.name, res.data.tasks))
    e.preventDefault()
  }
  
  return (
    <>
    <RoutineHeader>
      <RoutineTitle></RoutineTitle>
    <DeleteButton id={routine.id} onClick={() => deleteHandler(routine.id)}/>

    </RoutineHeader>
    <Link href={`/routine/${routine.id}`}>
     <a>
       <RoutineContainer
        id={routine.id}
        onClick={(e) => {getMyRoutine(e)}}
        >
        <img id={routine.id} src={`${process.env.NEXT_PUBLIC_url}/${img}`}></img>
        <RoutineList id={routine.id}>
          <ItemContainer id={routine.id}>
            <RoutineItem id={routine.id}>
                <RoutineTitle id={routine.id}>{routine.name}</RoutineTitle>
            </RoutineItem>
          </ItemContainer>
          </RoutineList>
        </RoutineContainer>
      </a>
    </Link>
    </>
  );
}
