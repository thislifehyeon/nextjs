import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { resetServerContext, DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'
import Modal from '../ex_update_Modal'
import {useDispatch, useSelector} from 'react-redux'
import {routineInfo} from '../../../redux/reducers/routineInfo'
resetServerContext();



function TodayRoutine({currentWorkouts, routineId, setCurrentWorkouts}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false)
  const [workoutId, setWorkoutId] = useState(null);
  //드래그앤드롭으로 순서 바꾸기
  const orderChangeHandler = async(routineId, workouts) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine`
    const body = {
      routine_id :routineId,
      exercise_array: workouts
    }
    const res = await axios.patch(url, body, {withCredentials: true})
    console.log(res.data.exercise);
  }

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "#fff9f9",
    display: "flex",
  });


  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      console.log(result);
      
      return result;
    };
    setCurrentWorkouts(reorder(currentWorkouts, result.source.index, result.destination.index));
  };

  const triggerEditMode = () => {
    setEditMode(true);
    // console.log("editMode: ",editMode);
  };

  const endEditMode = () => {
    setEditMode(false);
    orderChangeHandler(routineId, currentWorkouts)
  };

  const workoutDeleteHandler = async (e, id) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testexercise?workoutid=${id}`
    const res = await axios.delete(url, {withCredentials: true})
    console.log(res);
    setCurrentWorkouts(res.data.result)
  }

  const updateHandler = async (e) => {
    console.log(e.target.id);
    setModalOpen(!modalOpen)
    setWorkoutId(e.target.id)
  }

const workoutIds = currentWorkouts && currentWorkouts.map((workout) => (workout.id))

const [btnStatus, setBtnStatus] = useState(false);
const [scrollY, setScrollY] = useState(0);


useEffect(() =>{
  const watch = () => {
    window.addEventListener('scroll', handleFollow);
  }
  watch();
  return () => {
    window.removeEventListener('scroll', handleFollow);
  }
})
const handleFollow = () => {
  setScrollY(window.pageYOffset);
  setBtnStatus(true);
}


  return (
    <>
      <DndContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="vertical">
            {(provided, snapshot) => (
              <ItemContainer
              editMode={editMode}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
              >
                {currentWorkouts && currentWorkouts.map((item, index) => (
                  <Draggable
                  isDragDisabled={!editMode}
                  key={item.id}
                  draggableId={String(item.id)}
                  index={index}
                  >
                    {(provided, snapshot) => (
                      <div>
                          <Item
                            key={item.id}
                            id={item.id}
                            index={index}
                            name={item.name}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            isDragging={snapshot.isDragging}
                            draggableStyle={provided.draggableStyle}
                            >
                          <div>
                            <ItemName>{item.name}</ItemName>
                            <ButtonContainer>
                              <UpdateButton 
                              onClick={(e)=>updateHandler(e)}
                              id={item.id}> 수정
                              </UpdateButton>
                              {/* // 삭제버튼 */}
                              <UpdateButton id={item.id} onClick={(e)=>workoutDeleteHandler(e, item.id)}> 삭제
                              </UpdateButton>
                            </ButtonContainer>
                          </div>
                          <InfoContainer>
                            <span>총 {item.set_number}세트</span>
                            <span>운동시간: {Math.floor(item.rest_time/60)}분 {(item.rest_time % 60)}초</span>
                            <span>세트 간 휴식: {Math.floor(item.rest_time/60)}분 {(item.rest_time % 60)}초</span>
                          </InfoContainer>
                        <ItemMemo>{item.memo}</ItemMemo>
                      </Item>
                    </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ItemContainer>
            )}
          </Droppable>
        </DragDropContext>
      </DndContainer>
      <ButtonContainer2 >
       <RotateButton onClick={triggerEditMode}>순서 변경</RotateButton>
        <RotateButton onClick={endEditMode}>저장</RotateButton>
        <StartButton>시작</StartButton>
      </ButtonContainer2>
      <Modal 
      workoutId={workoutId}
      setModalOpen={setModalOpen} 
      modalOpen={modalOpen} 
      setCurrentWorkouts={setCurrentWorkouts}
      currentWorkouts={currentWorkouts}
      ></Modal>

  </>
  )
}

export default TodayRoutine;



const ImageContainer = styled.img`
  height: 100%;
  width: 100%;
`;

const DndContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 90vh;
  @media (max-width: 1280px) {
    overflow-y: auto;
  }
`;

const ItemContainer = styled.div`
  display: flex; 
  flex-direction: column;
  border-radius: 6px;
  overflow-y: scroll;
  max-height: 70%;
  width: 450px;
  background-color: ${(props) => (props.isDraggingOver ? 'lightblue' : '#4665d9')};
  background-color: ${(props) => (props.editMode ? '#000' : 'white')};
  border: ${(props) => (props.editMode ? '1px solid #000' : 'none')};
  opacity: ${(props) => (props.editMode ? '0.55' : '1')};

  @media (max-width: 1280px) {
    max-width: 360px;
    min-width: 280px;
  }

  div {
    padding: 5px;
    /* background-color: #ffffff; */
  }
`;

const Item = styled.ul`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin: 5px 5px;
  font-family: esamanru_Light;
  /* background: #fff8fd; */
  color: #000036;
  opacity: 0.8;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.22 );
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(40px);

  div {
    display: flex;
    flex-direction: row;
    width: 100%;

    :hover {

    }
  }
  :hover{
    color: lightgrey;
    background: ${(props) => (props.isDragging ? '#2ac1bc' : '#000035;')};
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.8 );
  }


  span {
    text-align: left;
  }
`;

const InfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  width: 100%;
  padding-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  /* position: relative; */
`;


const ItemName = styled.div`
  font-size: 1.5rem;
  margin: 10px 0 5px;
  text-align: left;
`;

const ItemMemo = styled.li`
  list-style: none;
  `;

const UpdateButton = styled.a`
  /* margin-right: 10px; */
  box-sizing: border-box;
  max-height: 18px;
  padding: 0 10px;
  cursor: pointer;
  font-family: NanumGothic-Bold;
  /* font-weight: 800; */
  `;

const ButtonContainer2 = styled.div`
  display:flex;
  flex-direction: column;
  position: fixed; 
  right: 120px;
  bottom: 40px;
`;

const RotateButton = styled.div`
  background-color: #000035;
  font-family: esamanru_Medium;
  opacity: 0.9;
  color: lightgrey;
  padding: 10px;
  border-radius: 20px;
  height: 80px;
  width: 180px;
  text-align: center;
  margin : 10px;
  font-size: 1.5rem;
  /* vertical-align: middle; */
  padding: 25px 0;
  cursor: pointer;
  
  :hover {
    box-shadow: 3px 5px;
    background-color: #ff001d;
    opacity: 0.9;
    border: #000035 2px;
    font-weight: 600;
    color: white;
  }
`;

const StartButton = styled.div`
  background-color: #e4b200;
  font-family: esamanru_Medium;
  opacity: 0.9;
  color: #ffffff;
  padding: 10px;
  border-radius: 20px;
  height: 80px;
  width: 180px;
  text-align: center;
  margin : 10px;
  font-size: 1.5rem;
  /* vertical-align: middle; */
  padding: 25px 0;
  cursor: pointer;
  
  :hover {
    background-color: #ff001d;
    box-shadow: 3px 5px;
    opacity: 0.9;
    border: #000035 2px;
    font-weight: 600;
    color: white;
  }
`;