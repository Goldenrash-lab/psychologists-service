import { useEffect, useRef, useState } from "react";
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

const ModalLogin = ({ setModal }) => {
  const [eye, setEye] = useState(true);
  const ref = useRef();

  function clickBackdrop(e) {
    if (e.target === ref.current) {
      setModal(false);
    }
  }
  useEffect(() => {
    function closeOnESC(e) {
      if (e.key === "Escape") {
        setModal(false);
      }
    }
    document.addEventListener("keydown", closeOnESC);

    return () => {
      document.removeEventListener("keydown", closeOnESC);
    };
  }, [setModal]);

  return (
    <>
      <Backdrop ref={ref} onClick={clickBackdrop}>
        <Modal>
          <CloseBtn
            type="button"
            onClick={() => {
              setModal(false);
            }}
          >
            <CloseSvg />
          </CloseBtn>
          <ModalTitle>Log In</ModalTitle>
          <ModalText>
            Welcome back! Please enter your credentials to access your account
            and continue your search for a psychologist.
          </ModalText>
          <ModalForm>
            <ModalLabel>
              <ModalInput type="text" placeholder="Email" name="email" />
            </ModalLabel>
            <ModalLabel htmlFor="password">
              <ModalEyeBtn type="button" onClick={() => setEye(!eye)}>
                {eye ? <EyeOpenSvg /> : <EyeCloseSvg />}
              </ModalEyeBtn>
              <ModalInput
                type={eye ? "text" : "password"}
                placeholder="Password"
                name="password"
                id="password"
              />
            </ModalLabel>
            <ModalButton type="submit">Log In</ModalButton>
          </ModalForm>
        </Modal>
      </Backdrop>
    </>
  );
};

export default ModalLogin;
