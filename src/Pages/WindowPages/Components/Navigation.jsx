import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = styled.header`
  width: 100%;
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
`;
const Logo = styled(Link)`
  font-size: 1.5rem;
  &:hover {
    color: #70587c;
  }
`;
const Nav = styled.nav``;
const NavigationItems = styled.ul`
  gap: 1rem;
  display: flex;
  font-size: 1.25rem;
`;
const NavigationItem = styled.li``;
const NavigationItemLink = styled(Link)`
  &:hover {
    color: #70587c;
  }
`;
const Navigation = () => {
  return (
    <Header>
      {/* Link to dashboard */}
      <Logo to="/">Login System</Logo>
      <Nav>
        <NavigationItems>
          <NavigationItem>
            <NavigationItemLink to="/Dashboard/Hours">Hours</NavigationItemLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemLink to="/Dashboard/Schedules">
              Schedules
            </NavigationItemLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemLink to="/Dashboard/Operations">
              Operations
            </NavigationItemLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemLink to="/Dashboard/Administration">
              Admin
            </NavigationItemLink>
          </NavigationItem>
        </NavigationItems>
      </Nav>
    </Header>
  );
};

export default Navigation;
