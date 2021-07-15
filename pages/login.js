import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../redux/reducers/user_reducer';
import router from 'next/router';

export default function login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [values, setValues] = useState({ email: '', password: '' });
  const [isLogin, setIsLogin] = useState('isLogin', false);
  const [userInfo, setUserInfo] = useState('userInfo', null);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const loginHandler = (values) => {
    const { email, password } = values;
    if (email && password) {
      axios
        .post(
          `http://localhost:3000/login`,
          {
            email: email,
            password: password,
            social: null,
          },
          { withCredentials: true }
        )
        .then((res) => {
          const { data, userinfo } = res.data;
          console.log(res);
          if (res.status === 200) {
            // const { id, username, email } = userinfo;
            // dispatch(loginUserAction({ id, username, email }));
          }
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
      })
      .then((res) => {
        if (res.status === 200) {
          alert('로그인에 성공했습니다.');
          setUser(res.data.userinfo);
        } else if (res.status === 201) {
          alert('회원가입에 성공했습니다.');
        }
      })
      .catch(() =>
        alert('이메일 또는 비밀번호를 잘못 입력하셨습니다.\n 다시 시도해주세요')
      );
  };

  return (
    <>

      <LoginContainer>
        <LoginInput
          name='email'
          placeholder='email'
          onChange={(e) => inputHandler(e)}
        />
        <LoginInput
          name='password'
          placeholder='password'
          onChange={(e) => inputHandler(e)}
        />
        <LoginButton onClick={() => loginHandler(values)}>로그인</LoginButton>
        <GoogleLogin
          clientId={`982420892016-vr0bn99ieuuaoucnhc5e2qiarg50mh2e.apps.googleusercontent.com`}
          onSuccess={(result) => handlegoogleLogin(result)}
          onFailure={(result) => console.log(result)}
          cookiePolicy='single_host_origin'
        />
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10em;
  > input,
  button {
    margin: 2em;
  }
`;

const LoginInput = styled.input`
  margin: 1em;
  padding: 0.5em;
  width: 20em;
  height: 3em;
  outline: none;
  font-size: large;
`;

const LoginButton = styled.button`
  height: 5em;
  width: 8em;
`;
