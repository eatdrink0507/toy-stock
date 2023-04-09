import Header from "../Components/Header";
import Footer from "../Components/Footer";

import styled from "styled-components";
import Wave from "./stacked-waves-haikei.svg";

const Div = styled.div`
  padding: 40px;
  display: grid;
  grid-template-rows: 90px auto 100px;
  z-index: -10;
  grid-template-areas:
    "header"
    "main"
    "footer";
  min-height: 100vh;
`;
const Main = styled.main`
  grid-area: main;

  background: white;
  padding: 20px 70px;
`;

const Layout = ({ children }) => {
  return (
    <Div style={{ backgroundImage: `url(${Wave})` }}>
      <Header />

      <Main>{children}</Main>
      <Footer />
    </Div>
  );
};

export default Layout;
