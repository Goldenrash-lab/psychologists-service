import { Outlet, useLocation } from "react-router-dom";
import { Background, Container } from "./Layout.styled";
import Header from "../Header/Header";
import { HeaderTag } from "../Header/Header.styled";
import ModalLogin from "../ModalLogin/ModalLogin";
import { useState } from "react";
import ModalSignUp from "../ModalSignUp/ModalSignUp";
import { AnimatePresence, motion } from "framer-motion";

export const Layout = () => {
  const location = useLocation();

  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignUp, setModalSignUp] = useState(false);
  if (modalLogin || modalSignUp) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {location.pathname === "/" && <Background />}
      <HeaderTag>
        <Container>
          <Header setModalLogin={setModalLogin} setModalSignUp={setModalSignUp} />
        </Container>
      </HeaderTag>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>

      <AnimatePresence>
        {modalLogin && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
            <ModalLogin setModal={setModalLogin} />
          </motion.div>
        )}
        {modalSignUp && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
            <ModalSignUp setModal={setModalSignUp} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Layout;
