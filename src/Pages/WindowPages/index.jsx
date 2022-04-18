import Admin from "./Admin";
import Hours from "./Hours";
import SignIn from "./SignIn";
import Landing from "./Landing";
import Register from "./Register";
import Schedules from "./Schedules";
import Dashboard from "./Dashboard";
import Operations from "./Operations";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Container = styled.section`
  gap: 1.5rem;
  width: 100%;
  height: 100%;
  padding: 1.5rem 0;
`;

const index = () => {
  return (
    <Router>
      <Container id="index">
        {/* Add Page Routes */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<SignIn />} />
          <Route path="/Register" element={<Register />} />
          {/*  Create Auth Protected Route Parent Component*/}
          <Route path="/Dashboard" element={<Dashboard />} />
          {/* Create Auth+Role Protected Route Parent Component */}
          <Route path="/Dashboard/Hours" element={<Hours />} />
          <Route path="/Dashboard/Schedules" element={<Schedules />} />
          <Route path="/Dashboard/Operations" element={<Operations />} />
          <Route path="/Dashboard/Administration" element={<Admin />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default index;
