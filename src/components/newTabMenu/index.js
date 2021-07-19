import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {routineInfo} from '../../../redux/reducers/routineInfo';



function NewTabmenu({data, routineId, currentWorkouts, setCurrentWorkouts}) {
  // console.log('탭메뉴에서의 ', data);
  // console.log('탭메뉴에서의 루틴아이디', routineId);
  const items = data
  const curWorkout1 = items.filter((item) => (
    item.category === '웨이트운동' && item.default === true
  ))
  const curWorkout2 = items.filter((item) => (
    item.category === '유산소운동' && item.default === true
  ))
  const curWorkout3 = items.filter((item) => (
    item.category === '휴식' && item.default === true
  ))
  // console.log('웨이트운동 :', curWorkout1);
  // console.log('유산소운동 :', curWorkout2);
  // console.log('휴식 :', curWorkout3);

  const [trainingOne, setTrainingOne] = useState(curWorkout1)
  const [trainingTwo, setTrainingTwo] = useState(curWorkout2)
  const [trainingThree, setTrainingThree] = useState(curWorkout3)
  const [trainingOneToggle, setTrainingOneToggle] = useState(true)
  const [trainingTwoToggle, setTrainingTwoToggle] = useState(false)
  const [trainingThreeToggle, setTrainingThreeToggle] = useState(false)

  const addWorkout = async(itemTitle) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testexercise`
    const body = {
      routine_id: routineId,
      name: itemTitle,
    }
    const res = await axios.post(url, body, { withCredentials: true })
    const data = res.data
    setCurrentWorkouts(data)
  };

  const newWorkoutHandler = (e) => {
    const itemTitle = e.target.innerText;
    // console.log(e.target.innerText);
    addWorkout(itemTitle);
  };
  
  const ToggleHandlerOne = () => {
    setTrainingOneToggle(!trainingOneToggle)
    setTrainingTwoToggle(false)
    setTrainingThreeToggle(false)
  }
  const ToggleHandlerTwo = () => {
    setTrainingTwoToggle(!trainingTwoToggle)
    setTrainingOneToggle(false)
    setTrainingThreeToggle(false)
  }
  const ToggleHandlerThree = () => {
    setTrainingThreeToggle(!trainingThreeToggle)
    setTrainingOneToggle(false)
    setTrainingTwoToggle(false)
  }

  return (
    <>
    <TabmenuButtonBox>
      <TabmenuButton 
        onClick={() => {ToggleHandlerOne()}}
        >
        <ImageContainer src="/exercise.jpg" alt="exercise"/>
          {/* <h2>웨이트운동</h2> */}
        <div>웨이트 운동</div>
        </TabmenuButton>
        <TabmenuButton 
        onClick={() => {ToggleHandlerTwo()}}
        >
        <ImageContainer src="/running.jpg" alt="running"/>
          {/* <h2>웨이트운동</h2> */}
        <div>유산소 운동</div>
        </TabmenuButton>
        <TabmenuButton 
        onClick={() => {ToggleHandlerThree()}}
        >
        <ImageContainer src="/rest.jpg" alt="rest"/>
          {/* <h2>웨이트운동</h2> */}
        <div>휴식</div>
        </TabmenuButton>
    </TabmenuButtonBox>
    <Container>
      <TrainingOneList trainingOneToggle={trainingOneToggle}>
    {trainingOne.map((item) => (
        <WorkoutTtile
        onClick={(e)=> {newWorkoutHandler(e)}} 
        key={item.id}
        name={item.name} 
        set_time={item.set_time} 
        rest_time={item.rest_time}
        >{item.name}</WorkoutTtile>
        ))}
      </TrainingOneList>    
      <TrainingTwoList trainingTwoToggle={trainingTwoToggle}>
    {trainingTwo.map((item) => (
        <WorkoutTtile
        onClick={(e)=> {newWorkoutHandler(e)}} 
        key={item.id}
        name={item.name} 
        set_time={item.set_time} 
        rest_time={item.rest_time}
        >{item.name}</WorkoutTtile>
        ))}
      </TrainingTwoList>    
      <TrainingThreeList trainingThreeToggle={trainingThreeToggle}>
    {trainingThree.map((item) => (
        <WorkoutTtile
        onClick={(e)=> {newWorkoutHandler(e)}} 
        key={item.id}
        name={item.name} 
        set_time={item.set_time} 
        rest_time={item.rest_time}
        >{item.name}</WorkoutTtile>
        ))}
      </TrainingThreeList>    
    </Container>  
    </>
  )
}
  
export default NewTabmenu


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;

const TrainingOneList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  margin-top: 93px;
  position:absolute;
  top: ${(props) => (props.trainingOneToggle ? "15%" : "-1000px" )};
  /* user-select: ${(props) => (props.trainingOneToggle ? "all" : "none" )}; */
  opacity: ${(props) => (props.trainingOneToggle ? "100%" : "0" )};
`;

const TrainingTwoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  margin-top: 90px;
  position:absolute;
  top: ${(props) => (props.trainingTwoToggle ? "15%" : "-1000px" )};
  /* user-select: ${(props) => (props.trainingTwoToggle ? "all" : "none" )}; */
  opacity: ${(props) => (props.trainingTwoToggle ? "100%" : "0" )};
`;

const TrainingThreeList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  margin-top: 95px;
  position:absolute;
  top: ${(props) => (props.trainingThreeToggle ? "15%" : "-1000px" )};
  /* user-select: ${(props) => (props.trainingOneToggle ? "all" : "none" )}; */
  opacity: ${(props) => (props.trainingThreeToggle ? "100%" : "0" )};
`;

const WorkoutTtile = styled.li`
  list-style: none;
  background-color: lightgrey;
  margin-bottom: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  height: 80px;
  width: 200px;
  text-align: center;
  padding: 30px 0;
  font-family: esamanru_Light;
  opacity: 0.8;
`;

const TabmenuButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabmenuButton = styled.div`
  width:300px;
  height: 240px;
  background-color: #000035;
  color: #ffffff;
  margin: 5px;
  cursor: pointer;

  div {
    position: relative;
    color: #ffffff;
    font-size: 2.4rem;
    /* background: #000035; */
    /* opacity: 0.3; */
    text-align: center;
    padding: 100px 0;
    font-family: esamanru_Medium;
  }
`;

const ImageContainer =styled.img`
    height: 240px;
    width: 300px;
    position: absolute;
`;
