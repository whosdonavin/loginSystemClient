import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = styled.header`
  padding: 0 1rem;
  /* padding: 1.5rem; */
  /* color: #70587c; */
`;
const Logo = styled(Link)`
  font-size: 1.5rem;
  &:hover {
    color: #70587c;
  }
`;

const LandingNav = () => {
  return (
    <Header>
      <Logo to="/">Login System</Logo>
    </Header>
  );
};

export default LandingNav;
