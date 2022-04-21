import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
const SignUp = styled.div`
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

const SignIn = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  function handleUsername() {
    let usernameInput = document.getElementById("username");
    setUsername(usernameInput.value);
  }
  function handlePassword() {
    let passwordInput = document.getElementById("password");
    setPassword(passwordInput.value);
  }
  function clearForm() {
    document.getElementById("username").value = null;
    document.getElementById("password").value = null;
  }
  function logUserIn(e) {
    axios
      .post("http://localhost:3333/api/login", {
        reqUsername: username,
        reqPassword: password,
      })
      .then((req, res) => {
        const status = req.data;
        console.log(status);
        if (status.authenticated === true) {
          clearForm();
          alert(status.message);
        } else if (status.authenticated === false) {
          clearForm();
          alert(status.message);
        }
      })
      .catch((error) => {
        console.log(`The ${error}, has occurred.`);
      });
    e.preventDefault();
  }

  return (
    <Page>
      <LandingNav />
      <Container>
        <Form>
          <Title>Sign In</Title>

          <Inputs>
            <Username>
              <Label>Username</Label>
              <Input id="username" onChange={handleUsername} />
            </Username>
            <Password>
              <Label>Password</Label>
              <Input id="password" type="password" onChange={handlePassword} />
            </Password>

            <SignInButton onClick={logUserIn}>Sign In</SignInButton>
          </Inputs>

          <SignUp>
            <Text>Need To Register?</Text>
            <SignUpLink to="/Register">Sign Up</SignUpLink>
          </SignUp>
        </Form>
      </Container>
    </Page>
  );
};

export default SignIn;
