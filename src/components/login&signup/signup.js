import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function SignUp() {
  const router = useRouter();
  //react-router-dom의 history 함수와 같은 기능
  const [userInfo, setUserInfo] = useState({});
  const [msg, setMsg] = useState('');
  const OnChange = (e) => {
    const { value, name } = e.target;
    //input값 저장
    setUserInfo({ ...userInfo, [name]: value });
  };
  const OnClickSignUp = (userInfo) => {
    if (userInfo) {
      const { username, email, password, pwdConfirm } = userInfo;
      //입력정보
      if (!username || !email || !password || !pwdConfirm) {
        return setMsg('정보를 모두 입력하세요');
      }
      if (!email.includes('@')) {
        return setMsg('이메일 주소에 `@`가 있는지 확인해주세요');
      }
      if (password !== pwdConfirm) {
        return setMsg('두 비밀번호가 일치하는지 확인하세요');
      }
      console.log(userInfo);
      console.log(username, email, password);
      axios
        .post(
          `${process.env.NEXT_PUBLIC_url}/user`,
          { username, email, password, social: null }, //social: null로 필수
          { withCredentials: true }
        )
        .then(() => router.push('/login'))
        .catch(() => setMsg('이미 존재하는 이메일입니다'));
    } else {
      console.log('안됨');
    }
  };

  return (
    <>
      <SignUpContainer>
        <div className='signup_form'>
          <span>회원가입</span>
          <div className='signup_input'>
            <span>이름</span>
            <SignUpInput name='username' onChange={(e) => OnChange(e)} />
            <span>이메일</span>
            <SignUpInput name='email' onChange={(e) => OnChange(e)} />
            <span>비밀번호</span>
            <SignUpInput name='password' input type='password' onChange={(e) => OnChange(e)} />
            <span>비밀번호 확인</span>
            <SignUpInput name='pwdConfirm' input type='password' onChange={(e) => OnChange(e)} />
          </div>
          <div className='msg'>{msg ? <div>{msg}</div> : <div />}</div>
          <div className='signup_button'>
            <SignUpButton onClick={() => OnClickSignUp(userInfo)}>회원가입</SignUpButton>
          </div>
        </div>
      </SignUpContainer>
    </>
  );
}

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top : 200px;
  margin-top: 100px;
  z-index: 103;
  .signup_form {
    position: static;
    display: flex;
    flex-direction: column;
    width: 22rem;
    height: 30rem;
    border-radius: 5px;
    background-color: white;
    align-items: center;
    justify-content: center;
    z-index: 100;
    > span {
      padding-top : 30px;
      font-size: 1.5rem;
    }
    div:nth-child(5) {
      //메세지
      width: 20em;
      padding: 0.5em;
      text-align: center;
      font-size: large;
    }
    .signup_input {
      display: flex;
      flex-direction: column;
      padding: 3rem 0rem 0rem 0rem;
      span {
        font-size: 0.8rem;
        color: grey;
      }
    }
    .signup_button {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .msg {
      display: flex;
      justify-content: center;
      width: 220px;
      height: 10px;
      font-size: 12px;
      margin: 10px;
    }
  }
`;

const SignUpInput = styled.input`
  padding: 1rem;
  width: 14rem;
  height: 1.5rem;
  border-radius: 3px;
  border: 1px solid grey;
  :hover {
    border: 1px solid black;
  }
`;

const SignUpButton = styled.div`
  border: 0px;
  border-radius: 3px;
  background-color: #495057;
  height: 2.2rem;
  width: 14rem;
  color: white;
  margin: 1rem;
  text-align: center;
  line-height: 2.2rem;

  :hover {
    cursor: pointer;
  }
`;
