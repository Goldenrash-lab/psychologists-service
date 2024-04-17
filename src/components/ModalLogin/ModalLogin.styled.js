import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(25, 26, 21, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 30px;
  padding: 64px;
  position: relative;
`;
export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;
export const ModalText = styled.p`
  line-height: 125%;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 40px;
  max-width: 438px;
`;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ModalLabel = styled.label`
  position: relative;
`;

export const ModalInput = styled.input`
  padding: 16px 18px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  width: 438px;
  height: 52px;

  outline: none;
  &::placeholder {
    color: var(--black);
  }

  &:focus-within {
    border: 1px solid var(--green);
  }
`;

export const ModalEyeBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 14px;
  background-color: transparent;
  border: none;
  padding: 0;
  height: 30px;
  width: 30px;
  z-index: 99;

  cursor: pointer;
`;

export const ModalButton = styled.button`
  margin-top: 22px;
  border-radius: 30px;
  padding: 16px 196px;
  border: none;
  background-color: var(--green);
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--hover-green);
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 15px;
  top: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
