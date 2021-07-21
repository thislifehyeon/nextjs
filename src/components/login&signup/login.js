import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function login({ modalLogin, setModalLogin }) {
  const router = useRouter();
  //input value 핸들링 state
  const [values, setValues] = useState({ email: '', password: '' });
  const inputHandler = (e) => {
    //input value 핸들링 함수
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const loginHandler = (values) => {
    const { email, password } = values;
    if (email && password) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_url}/login`,
          {
            email,
            password,
            social: null,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log('로그인 성공 : ', res.data.data);
            setModalLogin(false);
            router.push('/routine');
        })
        .catch((e) => console.log('로그인 실패', e));
    }
  };

  const handlegoogleLogin = (result) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_url}/login`, {
        email: result.profileObj.email,
        username: result.profileObj.name,
        social: 'google',
        socialid: result.profileObj.googleId,
        profileimage: result.profileObj.imageUrl,
      },
      {
        withCredentials : true
      }
      )
      .then((res) => {
        if (res.status === 200) {
          alert('로그인에 성공했습니다.');
          setModalLogin(false);
        } else if (res.status === 201) {
          alert('회원가입에 성공했습니다.');
        }
      })
      .catch(() => alert('이메일 또는 비밀번호를 잘못 입력하셨습니다.\n 다시 시도해주세요'));
  };

  return (
    <>
      <LoginContainer>
        <div className='login_form'>
          {/* <div>로그인</div> */}
          <form className='login_input'>
            <span>아이디</span>
            <LoginInput name='email' onChange={(e) => inputHandler(e)} />
            <span>비밀번호</span>
            <LoginInput name='password' input type='password' onChange={(e) => inputHandler(e)} />
          </form>

          <div className='login_button'>
            <LoginButton className='login_button button' onClick={() => loginHandler(values)}>
              로그인
            </LoginButton>
            <GoogleLogin
              //  buttonText="GoogleLogin"
              clientId={`982420892016-vr0bn99ieuuaoucnhc5e2qiarg50mh2e.apps.googleusercontent.com`}
              onSuccess={(result) => handlegoogleLogin(result)}
              onFailure={(result) => console.log(result)}
              cookiePolicy='single_host_origin'
            />
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
  margin-top: 100px;
  opacity: 0.9;
  z-index: 103;
  .login_form {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 22rem;
    height: 24rem;
    opacity: 1;
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
