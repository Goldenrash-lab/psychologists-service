import { NavLink, Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";
import Header from "../Header/Header";
import { HeaderTag } from "../Header/Header.styled";

const Layout = () => {
  return (
    <>
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
    </>
  );
};

export default Layout;
