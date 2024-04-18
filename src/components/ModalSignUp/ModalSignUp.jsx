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
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/auth/slice";
import { toast } from "react-toastify";

const ModalSignUp = ({ setModal }) => {
  const [eye, setEye] = useState(false);
  const ref = useRef();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

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

  function onSubmit({ email, password }) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          signUp({
            user: {
              email: user.email,
              id: user.uid,
            },
            token: user.accessToken,
          })
        );

        setModal(false);
        toast.success("Welcome!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
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
          <ModalTitle>Registration</ModalTitle>
          <ModalText>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information.
          </ModalText>
          <ModalForm onSubmit={handleSubmit(onSubmit)}>
            <ModalLabel>
              <ModalInput
                {...register("name")}
                type="text"
                placeholder="Name"
                name="name"
              />
            </ModalLabel>
            <ModalLabel>
              <ModalInput
                {...register("email")}
                type="text"
                placeholder="Email"
                name="email"
              />
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
            <ModalButton type="submit">Sign Up</ModalButton>
          </ModalForm>
        </Modal>
      </Backdrop>
    </>
  );
};

export default ModalSignUp;
