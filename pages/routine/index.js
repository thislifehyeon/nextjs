import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import RoutineLists from './RoutineLists'
import styled from 'styled-components';
import axios from 'axios';
import { currentRoutine } from '../../redux/reducers/routine';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { routineInfo } from '../../redux/reducers/routineInfo';

function Routine({data}) {
  const [routines, setRoutines] = useState(null);

  useEffect(() => {
    getRoutine()
  }, [])
  
  const getRoutine = async () => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine`;
    const res = await axios.get(url, {withCredentials: true})
    setRoutines(res.data)
  }
  
  const addRoutine = () => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine`;
    axios.post(url, null, { withCredentials: true })
    .then((res) => {
      getRoutine()
    })
  };

  const deleteRoutine = (routineId) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${routineId}`;
    axios.delete(url)
    .then((res) => {
      getRoutine()
    })
  };


  return (
    <>
      <RoutinePageHeader></RoutinePageHeader>
      <RoutineSection>
        {routines &&
          routines.map((routine, idx) => (
            <>
              <Link key={idx} href={`/routine/${routine.id}`}>
                  <RoutineContainer
                    key={idx}
                    id={idx}
                  >
                    <img key={idx} src={`${process.env.NEXT_PUBLIC_url}/${routine.routineimage}`}></img>
                    <RoutineItem key={idx} id={routine.id}>
                      <RoutineTitle key={idx} id={routine.id}>{routine.name}</RoutineTitle>
                    </RoutineItem>
                  </RoutineContainer>
              </Link>
              <DeleteButton 
              key={idx}
              id={routine.id} 
              onClick={() => {
                deleteRoutine(routine.id)
              }}
              >
                -
              </DeleteButton>
            </>
          ))}
        <AddRoutineButton
          onClick={() => {
            addRoutine();
            getRoutine();
          }}
        >
          +
        </AddRoutineButton>
      </RoutineSection>
    </>
  );
}

export default Routine;



export async function getStaticProps(ctx) {
  const url = `${process.env.NEXT_PUBLIC_url}/testroutine`;
  const res = await axios.get(url, { withCredentials: true });
  const data = res.data;
  return {
    props: {
      data: data
    }
  }
}

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
  position: fixed;
  right: 2%;
  bottom: 5%;

  :hover {
    /* transform: rotate(45deg); */
    border: 3px #000036 solid;
    box-shadow: 0 8px 8px 0 rgba(31, 38, 135, 0.37);
    font-size: 2.4rem;
    text-shadow: 1rem;
  }
`;

const RoutinePageHeader = styled.div`
  padding: 50px;
`;

const RoutineContainer = styled.ul`
  display: flex;
  padding: 30px;
  flex-direction: row;
  /* margin-left: 40px; */
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
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


