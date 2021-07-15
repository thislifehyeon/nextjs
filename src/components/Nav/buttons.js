export default function Buttons() {
  return (
    <>
      <ButtonContainer>
        {accessToken ? (
          <Link href='/Mypage'>
            <div className='link mypage'>마이페이지</div>
          </Link>
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
        {modalBuger ? <FontAwesomeIcon className='bars' icon={faTimes} onClick={() => setModalBuger(false)} /> : <FontAwesomeIcon className='bars' icon={faBars} onClick={() => setModalBuger(true)} />}
      </ButtonContainer>
      ;
    </>
  );
}
