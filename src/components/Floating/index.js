import React from 'react'
import styled from 'styled-components'


const FloatingButton = styled.button`
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  box-sizing: border-box;
  margin: auto;
  border: solid 5px #fff;
  border-radius: 50%;
  width: 75px; height: 75px;
  color: #fff;
  font: 30px Helvetica;
  line-height: 65px;
  text-align: center;
  background: #FBC02D;
  cursor: pointer;
  user-select: none;
  transition: all .4s ease-in-out;
  transform: scale(1);
  box-shadow: 0 0 20px rgba(0, 0, 0, .4);
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, .6);
    transform: scale(.99);
  }
`;


function Floating() {
  return (
    <FloatingButton></FloatingButton>
  )
}




export default Floating
