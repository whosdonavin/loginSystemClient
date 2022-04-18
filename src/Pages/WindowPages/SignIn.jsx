import styled from "styled-components";
import LandingNav from "./Components/LandingNav";
import { Link } from "react-router-dom";

const Page = styled.section`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  color: white;
  display: flex;
  margin: 0 auto;
  min-width: 25%;
  min-height: 75%;
  padding: 1rem 2rem;
  border-radius: 5px;
  background: #70587c;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.p`
  font-size: 2rem;
`;
const Inputs = styled.div``;
const SignIn = styled.div`
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
`;
const Label = styled.label`
  font-size: 1.25rem;
`;
const Input = styled.input`
  border: none;
  padding: 0.5rem;
  font-size: 1.25rem;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
const Username = styled.div`
  display: flex;
  padding: 0.5rem 0;
  flex-direction: column;
`;
const Password = styled.div`
  display: flex;
  padding: 0.5rem 0;
  flex-direction: column;
`;
const SignInButton = styled.button`
  width: 100%;
  border: none;
  color: #0b2545;
  font-size: 1rem;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 5px;
  &:hover {
    color: white;
    cursor: pointer;
    background: #0b2545;
  }
`;
const Text = styled.p``;
const SignUpLink = styled(Link)`
  &:hover {
    color: #0b2545;
  }
`;

const Register = () => {
  return (
    <Page>
      <LandingNav />
      <Container>
        <Form>
          <Title>Sign In</Title>

          <Inputs>
            <Username>
              <Label>Username</Label>
              <Input></Input>
            </Username>
            <Password>
              <Label>Password</Label>
              <Input></Input>
            </Password>

            <SignInButton>Sign In</SignInButton>
          </Inputs>

          <SignIn>
            <Text>Need To Register?</Text>
            <SignUpLink to="/Register">Sign Up</SignUpLink>
          </SignIn>
        </Form>
      </Container>
    </Page>
  );
};

export default Register;
