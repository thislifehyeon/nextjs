import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function login2({ modalLogin2, setModalLogin2 }) {
  // const [modalLogin, setModalLogin] = useState(false);
  const router = useRouter();
  //input value 핸들링 state
  const [values, setValues] = useState('');
  const inputHandler = (e) => {
    //input value 핸들링 함수
    const { value } = e.target;
    setValues(value);
  };
  console.log(values);

  const loginHandler = (values) => {
    if (values ) {
      axios.post(
          `${process.env.NEXT_PUBLIC_url}/tempuser`,
          {
            username: values,
            social: "temp",
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log('로그인 성공 : ', res.data.data);
            setModalLogin2(!modalLogin2);
            setModalLogin(!modalLogin)
            router.push('/');
        })
        .catch((e) => console.log('로그인 실패', e));
    }
  };

  return (
    <>
      <LoginContainer>
        {modalLogin2 ? <Overlay_modal onClick={() => setModalLogin2(false)} /> : null}
        <div className='login_form'>
          <div>사용할 닉네임을 입력하세요</div>
          <form className='login_input'>
            <span>닉네임</span>
            <LoginInput onChange={(e) => inputHandler(e)} />
          </form>
          <div className='login_button'>
            <LoginButton className='login_button button' 
            onClick={() => loginHandler(values)}>
              로그인
            </LoginButton>
          </div>
        </div>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 200px;
  position: fixed;
  top: 15%;
  left: 50%;
  margin-top: 100px;
  box-sizing: border-box;
  z-index: 103;
  .login_form {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 22rem;
    height: 30rem;
    border-radius: 5px;
    background-color: white;
    align-items: center;
    justify-content: center;
    z-index: 100;
    > div:nth-child(1) {
      font-size: 1.5rem;
      padding-bottom: 2rem;
    }
    .login_input {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      span {
        font-size: 0.8rem;
        color: grey;
      }
    }
    .login_button {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      flex-wrap: wrap;
      max-width: 300px;
    }
  }
`;

const LoginInput = styled.input`
  padding: 1rem;
  width: 14rem;
  height: 1.5rem;
  border-radius: 3px;
  border: 1px solid grey;
`;

const LoginButton = styled.div`
  border: 0px;
  border-radius: 3px;
  background-color: #495057;
  width: 14rem;
  height: 2.2rem;
  line-height: 2.2rem;
  text-align: center;
  color: white;
  margin: 1rem;
  :hover {
    cursor: pointer;
  }
`;
const Overlay_modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.495);
  z-index: 99;
`;