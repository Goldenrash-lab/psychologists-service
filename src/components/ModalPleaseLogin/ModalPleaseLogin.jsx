import React, { useRef } from "react";
import {
  Backdrop,
  CloseBtn,
  Modal,
  ModalButton,
  ModalText,
  ModalTitle,
} from "../ModalLogin/ModalLogin.styled";
import CloseSvg from "../../images/modal/CloseSvg";
import { LoginBtn, RegBtn } from "../Header/Header.styled";
import { ModalPleaseBox } from "./ModalPleaseLogin.styled";

const ModalPleaseLogin = ({ setModal }) => {
  const ref = useRef();
  function clickBackdrop(e) {
    if (e.target === ref.current) {
      setModal(false);
    }
  }
  return (
    <Backdrop ref={ref} onClick={clickBackdrop}>
      <Modal>
        <CloseBtn type="button" onClick={() => setModal(false)}>
          <CloseSvg />
        </CloseBtn>
        <ModalTitle>Please log in or register</ModalTitle>
        <ModalText>
          This functionality is available only to authorized users
        </ModalText>
        <ModalPleaseBox>
          <LoginBtn type="button" aria-label="login">
            Log In
          </LoginBtn>
          <RegBtn
            type="button"
            aria-label="register"
            // onClick={() => setModalLogin(true)}
          >
            Sign Up
          </RegBtn>
        </ModalPleaseBox>
      </Modal>
    </Backdrop>
  );
};

export default ModalPleaseLogin;
