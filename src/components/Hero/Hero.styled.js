import styled from "styled-components";
import QuestionSvg from "../../images/QuestionSvg";
import PeopleSvg from "../../images/PeopleSvg";

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 78px;
  gap: 125px;
`;
export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 80px;
  line-height: 102%;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;
export const HeroTitleSpan = styled.span`
  font-style: italic;
  color: var(--green);
`;
export const HeroSubtitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: -0.02em;
  margin-bottom: 40px;

  max-width: 510px;
`;
export const HeroBtn = styled.button`
  color: var(--black);
  border: 1px solid var(--light-green);
  padding: 18px 45px;
  border-radius: 30px;
  height: 60px;
  width: 235px;
  white-space: nowrap;
  background: var(--green);
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: var(--white);
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--hover-green);
  }
`;
export const HeroLeft = styled.div`
  max-width: 595px;
`;

export const HeroRight = styled.div``;
export const HeroRightWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeroRightImg = styled.img``;
export const HeroRightBox = styled.div`
  background-color: var(--green);
  padding: 32px;
  border-radius: 20px;
  display: flex;
  gap: 16px;
  max-width: 311px;
  align-items: center;

  position: absolute;
  bottom: 75px;
  left: -101px;
`;
export const HeroRightCheck = styled.span`
  background-color: var(--white);
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
`;
export const HeroRightTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const HeroRightText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: rgba(251, 251, 251, 0.5);
`;
export const HeroRightSpan = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: var(--white);
`;
export const QuestionSvgStyled = styled(QuestionSvg)`
  position: absolute;
  top: 185px;
  left: -35px;
`;
export const PeopleSvgStyled = styled(PeopleSvg)`
  position: absolute;
  top: 38px;
  right: -44px;
`;
