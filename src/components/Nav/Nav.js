import styled from 'styled-components';
import Link from 'next/link';
import Cookies from 'js-cookie';
import SignUp from '../login&signup/signup';
import Login from '../login&signup/login';
import { useState } from 'react';
import router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const accessToken = Cookies.get('accessToken');
  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignup, setModalSignup] = useState(false);
  const [modalBuger, setModalBuger] = useState(false);

  return (
    <>
      <NavContainer>
        <Link href='/'>
          <div className='link logo'>rouDDine</div>
        </Link>
        {modalLogin ? <Overlay_modal onClick={() => setModalLogin(false)} /> : null}
        {modalSignup ? <Overlay_modal onClick={() => setModalSignup(false)} /> : null}
        {modalLogin && <Login setModalLogin={setModalLogin} />}
        {modalSignup && <SignUp setModalSignup={setModalSignup} />}

        <ButtonContainer>
          {accessToken ? (
            <>
            <Link href='/Mypage'>
              <div className='link mypage'>마이페이지</div>
            </Link>
            <Link href='/routine'>
              <div className='link main'>메인페이지</div>
            </Link>
            </>
          ) : (
            <div className='link login' onClick={() => setModalLogin(true)}>
              로그인
            </div>
          )}
          {accessToken ? (
            <div
              className='link logout'
              onClick={() => {
                Cookies.remove('accessToken');
                router.push('/');
                //로그아웃시 랜딩페이지로
              }}
            >
              로그아웃
            </div>
          ) : (
            <div className='link signup' onClick={() => setModalSignup(true)}>
              회원가입
            </div>
          )}
          {modalBuger ? (
            <FontAwesomeIcon className='bars' icon={faTimes} onClick={() => setModalBuger(false)} />
          ) : (
            <FontAwesomeIcon className='bars' icon={faBars} onClick={() => setModalBuger(true)} />
          )}
        </ButtonContainer>

        {modalBuger ? (
          <BugerModal className={modalBuger ? 'active' : 'notActive'}>
            <div className='buger logo'>rouDDine</div>
            <div className='buger buttons'>
              {/* ---------------------------- */}
              {accessToken ? (
                <Link href='/Mypage'>
                  <div className='buger mypage'>마이페이지</div>
                </Link>
              ) : (
                <div className='buger signin' onClick={() => setModalLogin(true)}>
                  로그인
                </div>
              )}

              {/* ---------버튼추가 이 아래로---------- */}
              <div onClick={() => router.push(`/routine`)}>Main</div>

              {/* ---------버튼추가 이 위로------------ */}

              {accessToken ? (
                <div
                  className='buger logout'
                  onClick={() => {
                    Cookies.remove('accessToken');
                    router.push('/');
                    //로그아웃시 랜딩페이지로
                  }}
                >
                  로그아웃
                </div>
              ) : (
                <div className='buger signup' onClick={() => setModalSignup(true)}>
                  회원가입
                </div>
              )}
              {/* ---------------------------- */}
            </div>
          </BugerModal>
        ) : null}
      </NavContainer>
    </>
  );
}

const NavContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-between;
  position: fixed;
  height: 8vh;
  width: 100%;
  z-index: 103;
  box-shadow: 0 0 3px 1px rgb(0 0 0 / 10%);
  padding: 10px;
  .link {
    color: black;
    cursor: pointer;
    align-self: center;
    padding: 10px 20px 10px 20px;
  }
  .link.logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .modal {
    position: fixed;
  }
  .bars {
    display: none;
    cursor: pointer;
  }
  .mypage,
  .login {
    //로그인,마이페이지
  }
`;
const BugerModal = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 25px 0;
  transition: 0.3s ease-in-out;
  background: rgba(21, 39, 64, 0.9215686274509803);
  top: 8vh;
  right: 0;
  animation-name: 'slidein';
  animation-duration: 0.3s;
  z-index: 100;
  @keyframes slidein {
    from {
      top: -100%;
    }

    to {
    }
  }

  .buger.logo {
    display: flex;
    justify-content: center;
    font-size: 3rem;
    font-weight: bold;
    color: white;
    justify-self: center;
    padding: 10px 10px 60px 10px;
  }
  .buger.buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    /* border: 3px solid white; */
    > div {
      display: flex;
      color: white;
      justify-content: center;
      align-items: center;
      /* background: whitesmoke; */
      font-size: 1.5rem;
      font-weight: bold;
      width: 250px;
      height: 50px;
      margin-bottom: 20px;
      border-radius: 4px;
      :hover {
        cursor: pointer;
      }
    }
  }
  @media all and (min-width: 1024px) {
    display: none;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    display: block;
    height: 100vh;
    width: 40%;
    ButtonContainer {
      flex-direction: column;
    }
  }

  @media all and (max-width: 767px) {
    display: block;
    height: 100vh;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 1024px) {
    flex-direction: column;
    > .link {
      display: none;
    }
    .bars {
      display: block;
      font-size: 2.3rem;
      padding-right: 10px;
    }
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
  z-index: 101;
`;
