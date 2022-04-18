import "./Layout.css";
import styled from "styled-components";
import NavigationBar from "../../Components/NavigationBar";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";

const Container = styled.div`
  height: 100vh;
  display: grid;
  padding: 2rem;
  margin: 0 auto;
  gap: 2rem;
  max-width: 1400px;
  grid-template-rows: auto 1fr auto;
`;

function Layout() {
  return (
    <Container className="container">
      <NavigationBar />
      <Content />
      <Footer />
    </Container>
  );
}

export default Layout;
