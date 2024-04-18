import { Outlet, useLocation } from "react-router-dom";
import { Background, Container } from "./Layout.styled";
import Header from "../Header/Header";
import { HeaderTag } from "../Header/Header.styled";
import ModalLogin from "../ModalLogin/ModalLogin";
import { useState } from "react";
import ModalSignUp from "../ModalSignUp/ModalSignUp";

const Layout = () => {
  const location = useLocation();

  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignUp, setModalSignUp] = useState(false);

  return (
    <>
      {location.pathname === "/" && <Background />}
      <HeaderTag>
        <Container>
          <Header
            setModalLogin={setModalLogin}
            setModalSignUp={setModalSignUp}
          />
        </Container>
      </HeaderTag>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      {modalLogin && <ModalLogin setModal={setModalLogin} />}
      {modalSignUp && <ModalSignUp setModal={setModalSignUp} />}
    </>
  );
};

export default Layout;
