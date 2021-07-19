export default function Buttons() {
  return (
    <>
      <ButtonContainer>
        {accessToken ? (
          <Link href='/Mypage'>
            <div className='link mypage'>My page</div>
          </Link>
        ) : (
          <div className='link login' onClick={() => setModalLogin(true)}>
            Login
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
            Logout
          </div>
        ) : (
          <div className='link signup' onClick={() => setModalSignup(true)}>
            Signup
          </div>
        )}
        {modalBuger ? <FontAwesomeIcon className='bars' icon={faTimes} onClick={() => setModalBuger(false)} /> : <FontAwesomeIcon className='bars' icon={faBars} onClick={() => setModalBuger(true)} />}
      </ButtonContainer>
      ;
    </>
  );
}
