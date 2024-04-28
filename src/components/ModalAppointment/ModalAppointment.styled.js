import styled from "styled-components";

export const ModalInputBox = styled.div`
  display: flex;
  gap: 8px;

  input {
    max-width: 232px;
  }
`;

export const ModalInputAppoint = styled.input`
  padding: 16px 18px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  width: 472px;
  height: 52px;

  outline: none;
  &::placeholder {
    color: var(--black);
  }

  &:focus-within {
    border: 1px solid var(--green);
  }
`;
export const ModalTextArea = styled.textarea`
  padding: 16px 18px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  width: 472px;
  height: 116px;

  outline: none;
  &::placeholder {
    color: var(--black);
  }

  &:focus-within {
    border: 1px solid var(--green);
  }
`;
