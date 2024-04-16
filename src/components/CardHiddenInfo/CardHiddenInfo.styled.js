import styled from "styled-components";

export const CardHiddenBox = styled.div`
  /* display: none; */
`;
export const CardHiddenBoxList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  gap: 25px;
  li:last-child {
    margin-bottom: 40px;
  }
`;
export const CardHiddenBoxItem = styled.li``;
export const CardHiddenBoxHead = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 16px;
`;
export const CardHiddenBoxHeadImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 12px;
`;
export const CardHiddenBoxHeadWrapper = styled.div``;
export const CardHiddenBoxHeadTitle = styled.h4`
  font-weight: 500;

  line-height: 125%;
`;
export const CardHiddenBoxHeadRate = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 129%;
`;
export const CardHiddenBoxDescr = styled.p`
  line-height: 125%;
  color: rgba(25, 26, 21, 0.5);
`;
export const CardHiddenBoxBtn = styled.button`
  padding: 14px 32px;
  font-weight: 500;
  color: #fbfbfb;
  border-radius: 30px;
  background-color: var(--green);
  border: none;
  &:hover {
    background-color: var(--hover-green);
  }
`;
