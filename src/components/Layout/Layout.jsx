import { Outlet, useLocation } from "react-router-dom";
import { Container } from "./Layout.styled";
import Header from "../Header/Header";
import { HeaderTag } from "../Header/Header.styled";
import styled from "styled-components";
import IMG from "/HeroBackGradient.png?url";
import ModalLogin from "../ModalLogin/ModalLogin";

const Background = styled.div`
  background-image: url(${IMG});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: absolute;
  z-index: -1;
  width: 100vw;
`;

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && <Background />}
      <HeaderTag>
        <Container>
          <Header />
        </Container>
      </HeaderTag>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <ModalLogin />
    </>
  );
};

export default Layout;
