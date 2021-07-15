import styled from 'styled-components';
import Link from 'next/link';

export default function statistics() {
  return (
    <>
      <Body>
        <div>루틴명</div>
        <Data>
          <div>통계자료</div>
        </Data>
        <Button>
          <Link href='/Mypage'>
            <a>나가기</a>
          </Link>
        </Button>
      </Body>
    </>
  );
}

let Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div {
    :nth-child(1) {
      font-size: 2em;
    }
  }
`;

let Data = styled.div`
  border: 1px solid black;
  display: flex;
  height: 70%;
  width: 30%;
  font-size: 3em;
  justify-content: center;
  align-items: center;
`;

let Button = styled.div`
  font-size: 2em;
  padding: 1%;
  border: 1px solid black;
  :hover {
    background-color: grey;
  }
`;
