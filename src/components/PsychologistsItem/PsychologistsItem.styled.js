import styled from "styled-components";

export const CardItem = styled.li`
  padding: 24px;
  border-radius: 24px;
  background-color: var(--white);
  display: flex;
  align-items: flex-start;
`;
export const CardImgBox = styled.div`
  border: 2px solid rgba(84, 190, 150, 0.2);
  border-radius: 30px;
  padding: 12px;
  display: flex;
  align-items: flex-start;
  width: 120px;
  position: relative;
  min-width: 120px;

  margin-right: 24px;

  svg {
    position: absolute;
    right: 14px;
    top: 9px;
  }
`;

export const CardImg = styled.img`
  border-radius: 15px;
`;
export const CardContent = styled.div`
  transition: all 4s;
`;
export const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardHeadTitle = styled.p`
  font-weight: 500;
  line-height: 150%;
  color: #8a8a89;
  margin-bottom: 8px;
`;
export const CardHeadList = styled.ul`
  display: flex;
`;
export const CardHeadItem = styled.li`
  display: flex;
  align-items: center;

  &:first-child {
    border-right: 1px solid rgba(25, 26, 21, 0.2);
    padding-right: 16px;

    margin-right: 16px;
    p {
      padding-left: 8px;
    }
  }
  &:nth-child(2) {
    margin-right: 28px;
  }
`;
export const CardHeadText = styled.p`
  font-weight: 500;
  line-height: 150%;
`;
export const CardHeadRate = styled.span``;
export const CardHeadPrice = styled.span``;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
`;
export const CardBenefitsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 32px;
`;
export const CardBenefitsItem = styled.li`
  background: #f3f3f3;
  padding: 8px 16px;
  border-radius: 24px;
`;
export const CardBenefitsLabel = styled.p`
  font-weight: 500;

  line-height: 150%;
  color: #8a8a89;
`;
export const CardBenefitsText = styled.span`
  color: var(--black);
  margin-left: 6px;
`;

export const CardDescribe = styled.p`
  line-height: 125%;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 14px;
`;
export const CardButtonMore = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  padding: 0;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #191a15;
  cursor: pointer;
  text-underline-offset: 2px;
`;
