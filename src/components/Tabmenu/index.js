import React, { useState } from 'react'
import styled from 'styled-components'
import List1 from './training/level2'
import List2 from './training/level1'
import List3 from './training/level3'


const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: right;
  box-sizing: border-box;
  justify-content: center;
  width: 200px;
  /* height: 400px; */
  /* position: absolute; */
`;

const Button = styled.ul`
  display: flex;
  height: 100%;
  /* justify-content: center; */
  flex-direction: column;
  /* padding-left: 0; */
  /* margin-top: 30px; */
  /* margin-left: 20px; */
  /* width: 150px; */
  /* text-align: center; */
  /* align-items: stretch; */
`;

const List = styled.div`
  text-align: center;
  font-size: 2rem;
  width: 200px;
  height: 600px;
  color: lightgrey;
  font-weight: bold;
  background-color: #000035;
  margin: 2px;
  padding: 0 25px;
  height: 100px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 255, .2);
    border: 0;
  }
`;


const First = styled.div`
`;

const Second = styled.div`
`;

const Third = styled.div`
`;


const getMyRoutine = async(routineId) => {
  const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=11`
  const res = await axios.get(url, { withCredentials: true });
  console.log(res.data);
  dispatch(routineInfo(res.data.id, res.data.name, res.data.tasks))
}


function Tabmenu() {
  const [menuNum, setMenuNum] = useState(0)
  const clickHandler = (id) => {
    setMenuNum(id)
    console.log(menuNum)
  }
  
  const arr = ["유산소운동", "웨이트운동", "휴식"]
  
  const obj = {
    0: <First><List1></List1></First>,
    1: <Second><List2></List2></Second>,
    2: <Third><List3></List3></Third>
  }
  
  return (
    <Container>
      <Button>
        {arr.map((num, idx) => (
          <List menuNum={menuNum} key={idx} onClick={()=>{clickHandler(idx)}}>{num}</List>
          ))}
      </Button>
      {obj[menuNum]}
    </Container>
  )
}

export default Tabmenu