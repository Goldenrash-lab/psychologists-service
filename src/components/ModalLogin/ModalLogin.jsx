import { useState } from "react";
import CloseSvg from "../../images/modal/CloseSvg";
import EyeCloseSvg from "../../images/modal/EyeCloseSvg";
import {
  Backdrop,
  CloseBtn,
  Modal,
  ModalButton,
  ModalEyeBtn,
  ModalForm,
  ModalInput,
  ModalLabel,
  ModalText,
  ModalTitle,
} from "./ModalLogin.styled";
import EyeOpenSvg from "../../images/modal/EyeOpenSvg";

const ModalLogin = () => {
  const [eye, setEye] = useState(true);

  function handleClick() {
    setEye(!eye);
    console.log("====================================");
    console.log(eye);
    console.log("====================================");
  }

  return (
    <Backdrop>
      <Modal>
        <CloseBtn type="button">
          <CloseSvg />
        </CloseBtn>
        <ModalTitle>Log In</ModalTitle>
        <ModalText>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </ModalText>
        <ModalForm>
          <ModalLabel>
            <ModalInput type="text" placeholder="Email" name="email" />
          </ModalLabel>
          <ModalLabel>
            <ModalEyeBtn type="button" onClick={handleClick}>
              {eye ? <EyeOpenSvg /> : <EyeCloseSvg />}
            </ModalEyeBtn>
            <ModalInput placeholder="Password" name="password" />
          </ModalLabel>
          <ModalButton type="submit">Log In</ModalButton>
        </ModalForm>
      </Modal>
    </Backdrop>
  );
};

export default ModalLogin;
