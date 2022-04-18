import { useState } from "react";
import styled from "styled-components";
import { SmallScreen } from "../Helpers/Responsive";
import { VscMenu, VscClose } from "react-icons/vsc";

const Container = styled.div`
  display: none;
  ${SmallScreen({ display: "block" })}
`;
const OpenIcon = styled(VscMenu)`
  cursor: pointer;
  font-size: 2rem;
`;
const CloseIcon = styled(VscClose)`
  cursor: pointer;
  font-size: 3rem;
`;
const Navigation = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  height: 100vh;
  z-index: 1000;
  position: absolute;
  background: #6f9283;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem;
  justify-content: flex-end;
`;
const NavigationItems = styled.ul`
  gap: 1rem;
  width: 100%;
  display: flex;
  font-size: 2rem;
  align-items: center;
  flex-direction: column;
`;
const NavigationItem = styled.li``;
const NavigationItemLink = styled.a``;
const MobileNavigation = () => {
  const [menuStatus, setMenuStatus] = useState("closed");

  function openMenu() {
    setMenuStatus("open");
  }
  function closeMenu() {
    setMenuStatus("close");
  }
  return (
    <Container>
      <OpenIcon onClick={openMenu} />

      <Navigation id={menuStatus}>
        <Top>
          <CloseIcon onClick={closeMenu} />
        </Top>

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
    </Container>
  );
};

export default MobileNavigation;
