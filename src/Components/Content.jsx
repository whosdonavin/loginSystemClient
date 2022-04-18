import styled from "styled-components";
import index from "../Pages/WindowPages";

const Container = styled.div`
  width: 100%;
  display: flex;
`;
const MacWindow = styled.div`
  width: 100%;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  background-color: white;
  box-shadow: -5px 10px 40px 10px rgba(0, 0, 0, 0.3);
`;
const Controls = styled.div`
  gap: 0.5rem;
  display: flex;
  padding: 0.5rem;
`;
const RedControl = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 20px;
  background-color: #df6961;
`;
const YellowControl = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 20px;
  background-color: #f2bc57;
`;
const GreenControl = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 20px;
  background-color: #6bb358;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PageBar = styled.div`
  display: grid;
  border-bottom: 2px solid black;
  grid-template-columns: repeat(3, 1fr);
`;
const WindowBox = styled.div`
  flex: 1;
  color: white;
  background-color: #0b2545;
  border-radius: 0px 0px 10px 10px;
`;
const Index = styled(index)``;
const Content = () => {
  return (
    <Container>
      <MacWindow>
        <PageBar>
          <Controls>
            <RedControl></RedControl>
            <YellowControl></YellowControl>
            <GreenControl></GreenControl>
          </Controls>

          <Title>Login System</Title>
        </PageBar>
        <WindowBox>
          <Index />
        </WindowBox>
      </MacWindow>
    </Container>
  );
};

export default Content;
