import { useForm } from "react-hook-form";
import CloseSvg from "../../images/modal/CloseSvg";
import {
  Backdrop,
  CloseBtn,
  Modal,
  ModalButton,
  ModalForm,
  ModalLabel,
  ModalText,
  ModalTitle,
} from "../ModalLogin/ModalLogin.styled";
import {
  ModalInputAppoint,
  ModalInputBox,
  ModalTextArea,
} from "./ModalAppointment.styled";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";
import ModalPleaseLogin from "../ModalPleaseLogin/ModalPleaseLogin";

const ModalAppointment = ({ setModal }) => {
  const { register, handleSubmit } = useForm();
  const ref = useRef();
  const user = useSelector(selectUser);

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

  function onSubmit() {}

  if (!user) {
    return <ModalPleaseLogin setModal={setModal} />;
  }

  return (
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
        <ModalTitle data-appointment="">
          Make an appointment with a psychologists
        </ModalTitle>
        <ModalText data-appointment="">
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </ModalText>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <ModalLabel>
            <ModalInputAppoint
              {...register("name")}
              type="text"
              placeholder="Name"
              name="name"
            />
          </ModalLabel>
          <ModalInputBox>
            <ModalLabel>
              <ModalInputAppoint
                {...register("tel")}
                type="text"
                placeholder="+380"
                name="tel"
              />
            </ModalLabel>
            <ModalLabel>
              <ModalInputAppoint
                {...register("time")}
                type="text"
                placeholder="time"
                name="time"
              />
            </ModalLabel>
          </ModalInputBox>
          <ModalLabel>
            <ModalInputAppoint
              {...register("email")}
              type="text"
              placeholder="Email"
              name="email"
            />
          </ModalLabel>
          <ModalLabel>
            <ModalTextArea
              {...register("comment")}
              placeholder="Comment"
              name="comment"
            />
          </ModalLabel>
          <ModalButton data-appointment="" type="submit">
            Send
          </ModalButton>
        </ModalForm>
      </Modal>
    </Backdrop>
  );
};

export default ModalAppointment;
