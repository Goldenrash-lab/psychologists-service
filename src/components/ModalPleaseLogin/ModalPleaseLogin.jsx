import React from "react";
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

const ModalPleaseLogin = () => {
  return (
    <Backdrop>
      <Modal>
        <CloseBtn type="button">
          <CloseSvg />
        </CloseBtn>
        <ModalTitle>Please log in or register</ModalTitle>
        <ModalText>
          This functionality is available only to authorized users
        </ModalText>
        <ModalPleaseBox>
          <LoginBtn
            type="button"
            aria-label="login"
            // onClick={() => setModalLogin(true)}
          >
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
