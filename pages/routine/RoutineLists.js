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
  padding: 30px;
  flex-direction: row;
  /* margin-left: 40px; */
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: rgba( 255, 255, 255, 0.60 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  border-radius: 5%;

  img {
    height: 150px;
    width: 150px;
  }

  :hover {
    border: 7px solid #ffffff;
  }
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
    </>
  );
}
