import { NavLink, Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
