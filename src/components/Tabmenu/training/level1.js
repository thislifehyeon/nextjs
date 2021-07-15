import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {addWorkoutArray} from '../../../../redux/reducers/workout'
import {routineInfo} from '../../../../redux/reducers/routineInfo'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 700px;
`;

const ItemContainer = styled.ul`
  background: #2ac1bc;
  color: #f7ffff;
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: NanumGothic-regular;
  font-weight: 300;
  width: 130px;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 4px 3px 2px 1px rgba(0, 0, 255, 0.2);

  &:hover {
    background-color: #f7ffff;
    color: #2ac1bc;
  }
`;

const ItemTitle = styled.h4`

`;

const ItemList = styled.li`
  list-style: none;
  text-align: center;
  font-size: 1.2em;
`;

const AddButton = styled.div`
  border-radius: 10px;
  border: 1px solid;
  color: gray;
  font-size: 1.3rem;

  :hover {
    background-color: rgba(0, 0, 255, .2);
  }
`;


function List1({getRoutine}) {
  const dispatch = useDispatch();
  const [data, setData] = useState([])
  const [workouts, setWorkouts] = useState([])
  console.log(workouts);

  const getWorkout = async () => {
    const url = `${process.env.NEXT_PUBLIC_url}/testexercise`
    const res = await axios.get(url, { withCredentials: true })
    console.log(res.data.result);
    const items = res.data.result;
    const curWorkout = items.filter((item) => (
      item.category === '웨이트운동'
    ))
    console.log(curWorkout);
    setData(curWorkout)
  }

  useEffect(() => {
    getWorkout()
    console.log(workouts);
    console.log("@@@@@@");
  }, [])
  const routineId = useSelector((state) => state.routineInfo.id)

  const addWorkout = async(itemTitle) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testexercise`
    const body = {
      userid: 1,
      routine_id: routineId,
      name: itemTitle,
    }
    const res = await axios.post(url, body, { withCredentials: true })
    console.log(res);
    const data = res.data

    getMyRoutine(routineId) 
    // dispatch(addWorkoutArray(data))
  };
  
  const getMyRoutine = async(routineId) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${routineId}`
    const res = await axios.get(url, { withCredentials: true });
    console.log(res.data);
    dispatch(routineInfo(res.data.id, res.data.name, res.data.tasks))
  }

  // useEffect(() => {
  //   getRoutine()
  // }, [])

  const newWorkoutHandler = (e) => {
    const itemTitle = e.target.parentElement.children[0].innerText;
    // const itemSetTime = e.target.parentElement.children[1].innerText
    // const itemRestTime = e.target.parentElement.children[2].innerText
    addWorkout(itemTitle);
    // const text = e.target.parentElement.innerText
  };

  return (
    <Container>
      {data.map((item) => (
        <ItemContainer key={item.id} name={item.name} set_time={item.set_time} rest_time={item.rest_time}>
          <ItemTitle>{item.name}</ItemTitle>
          {/* <ItemList>세트 시간 {item.set_time}</ItemList>
          <ItemList>휴식 시간 {item.rest_time}</ItemList>
          <ItemList>총 3세트</ItemList> */}
          <AddButton
            onClick={(e) => {
              newWorkoutHandler(e);
            }}
          >
            +
          </AddButton>
        </ItemContainer>
      ))}
    </Container>
  );
}

export default List1