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
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../../store/auth/slice";

const ModalLogin = ({ setModal }) => {
  const [eye, setEye] = useState(false);
  const ref = useRef();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

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

  function clickBackdrop(e) {
    if (e.target === ref.current) {
      setModal(false);
    }
  }

  function onSubmit({ email, password }) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log("====================================");
        console.log("login");
        console.log("====================================");
        dispatch(
          login({
            user: {
              email: user.email,
              id: user.uid,
              name: user.displayName,
            },
            token: user.accessToken,
          })
        );

        setModal(false);
        toast.success("Welcome!");
      })
      .catch(() => {});
  }

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
            Welcome back! Please enter your credentials to access your account and continue your search for a
            psychologist.
          </ModalText>
          <ModalForm onSubmit={handleSubmit(onSubmit)}>
            <ModalLabel>
              <ModalInput {...register("email")} type="text" placeholder="Email" name="email" />
            </ModalLabel>
            <ModalLabel htmlFor="password">
              <ModalEyeBtn type="button" onClick={() => setEye(!eye)}>
                {eye ? <EyeOpenSvg /> : <EyeCloseSvg />}
              </ModalEyeBtn>
              <ModalInput
                {...register("password")}
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
