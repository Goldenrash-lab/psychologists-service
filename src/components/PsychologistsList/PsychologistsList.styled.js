import styled from "styled-components";

export const StyledList = styled.ul`
  margin: 32px 0 64px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LoadMoreBtn = styled.button`
  cursor: pointer;
  border-radius: 30px;
  padding: 14px 48px;
  background-color: var(--green);
  color: white;
  border: none;
  margin: 0 auto;
`;

export const LoadWrapper = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;
