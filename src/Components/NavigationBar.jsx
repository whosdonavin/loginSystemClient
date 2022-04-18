import styled from "styled-components";
import MobileNavigation from "./MobileNavigation";
import { SmallScreen } from "../Helpers/Responsive";

const Container = styled.div`
  width: 100%;
  display: flex;
  max-width: 1400px;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.a`
  font-size: 2rem;
  &:hover {
    color: #0b2545;
  }
`;
const Navigation = styled.nav`
  ${SmallScreen({ display: "none" })}
`;
const NavigationItems = styled.ul`
  gap: 1rem;
  display: flex;
  font-size: 2rem;
`;
const NavigationItem = styled.li``;
const NavigationItemLink = styled.a`
  &:hover {
    color: #0b2545;
    border-bottom: 1px solid #0b2545;
  }
`;

const NavigationBar = () => {
  return (
    <Container>
      <Logo href="http://127.0.0.1:5500/index.html">Package Tester</Logo>

      <Navigation>
        <NavigationItems className="navigationItems">
          <NavigationItem className="navigationItem">
            <NavigationItemLink href="#">Appointment System</NavigationItemLink>
          </NavigationItem>
          <NavigationItem className="navigationItem">
            <NavigationItemLink href="#" className="currentPage">
              Login System
            </NavigationItemLink>
          </NavigationItem>
          <NavigationItem className="navigationItem">
            <NavigationItemLink href="#">Cart System</NavigationItemLink>
          </NavigationItem>
        </NavigationItems>
      </Navigation>

      <MobileNavigation />
    </Container>
  );
};

export default NavigationBar;
