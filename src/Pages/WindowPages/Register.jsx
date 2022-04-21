import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LandingNav from "./Components/LandingNav";

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
const Message = styled.p``;
const Form = styled.form`
  color: white;
  display: flex;
  margin: 0 auto;
  min-width: 25%;
  min-height: 90%;
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
const ConfirmPassword = styled.div`
  display: flex;
  padding: 0.5rem 0;
  flex-direction: column;
`;
const SignUpButton = styled.button`
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
const SignInLink = styled(Link)`
  &:hover {
    color: #0b2545;
  }
`;

const Register = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);

  function handleUsername() {
    let input = document.getElementById("username");
    setUsername(input.value);
  }
  function handlePassword() {
    let input = document.getElementById("password");
    setPassword(input.value);
  }
  // function resetForm() {}
  function registerUser(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3333/api/register", {
        username: username,
        password: password,
      })
      .then((response) => {
        document.getElementById("form").id = "submitted";
        setResponseMessage(response.data.message);
        const status = response.data.status;

        if (status === "Success") {
          setTimeout(() => {
            window.location.replace("http://localhost:3000/Login");
          }, 2000);
        } else {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      });
  }
  return (
    <Page>
      <LandingNav />
      <Container>
        <Form autocomplete="off" id="form">
          <Title>Register</Title>

          <Inputs>
            <Username>
              <Label>Username</Label>
              <Input id="username" onChange={handleUsername} />
            </Username>
            <Password>
              <Label>Password</Label>
              <Input type="password" id="password" onChange={handlePassword} />
            </Password>
            <ConfirmPassword>
              <Label>Confirm Password</Label>
              <Input type="password" />
            </ConfirmPassword>

            <SignUpButton onClick={registerUser}>Sign Up</SignUpButton>
          </Inputs>

          <SignIn>
            <Text>Already Registered?</Text>
            <SignInLink to="/Login">Sign In</SignInLink>
          </SignIn>
        </Form>
        <Message id={responseStatus}>{responseMessage}</Message>
      </Container>
    </Page>
  );
};

export default Register;
