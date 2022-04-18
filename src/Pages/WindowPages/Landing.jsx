import styled from "styled-components";
import { Link } from "react-router-dom";
import LandingNav from "./Components/LandingNav";

const Page = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr 1fr;
`;
const LandingText = styled.div`
  display: flex;
  font-size: 1.25rem;
  align-items: center;
  justify-content: center;
`;
const Text = styled.p``;
const SignIn = styled(Link)`
  margin-left: 4px;
  border-bottom: 1px solid #70587c;
`;
const Logins = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Heading = styled.h2``;

const Landing = () => {
  return (
    <Page>
      <LandingNav />
      <LandingText>
        <Text>
          Welcome to the home page, here are some test creditals you can use to
        </Text>
        <SignIn to="/Login">Login.</SignIn>
      </LandingText>
      <Logins>
        <Heading>Username | Password</Heading>
        <Text>************* / *************</Text>
      </Logins>
    </Page>
  );
};

export default Landing;
