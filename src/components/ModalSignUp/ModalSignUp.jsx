import { useEffect, useRef, useState } from "react";
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
} from "../ModalLogin/ModalLogin.styled";
import CloseSvg from "../../images/modal/CloseSvg";
import EyeOpenSvg from "../../images/modal/EyeOpenSvg";
import EyeCloseSvg from "../../images/modal/EyeCloseSvg";

const ModalSignUp = ({ setModal }) => {
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
          <ModalTitle>Registration</ModalTitle>
          <ModalText>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information.
          </ModalText>
          <ModalForm>
            <ModalLabel>
              <ModalInput type="text" placeholder="Name" name="name" />
            </ModalLabel>
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
            <ModalButton type="submit">Sign Up</ModalButton>
          </ModalForm>
        </Modal>
      </Backdrop>
    </>
  );
};

export default ModalSignUp;
