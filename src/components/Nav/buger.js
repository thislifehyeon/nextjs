import styled from 'styled-components';

export default function Buger() {
  return (
    <Container>
      <div>버거버거버거버거버거</div>
      <div>참치</div>
      <div>샌드위치</div>
    </Container>
  );
}

const Container = styled.div`
  flex-direction: column;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 25px 0;
  transition: 0.3s ease-in-out;
  height: 100vh;
  background: rgba(10, 167, 109, 0.7215686274509803);
  z-index: 3;
  right: 0;

  @media all and (min-width: 768px) and (max-width: 1023px) {
    display: block;
    width: 50vw;
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 100vw;
  }
`;
