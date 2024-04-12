import ArrowSvg from "../../images/ArrowSvg";
import PeopleSvg from "../../images/PeopleSvg";
import QuestionSvg from "../../images/QuestionSvg";
import HeroBigImg from "../../images/HeroBigImg.jpg";
import {
  HeroBtn,
  HeroLeft,
  HeroRight,
  HeroRightBox,
  HeroRightCheck,
  HeroRightImg,
  HeroRightSpan,
  HeroRightText,
  HeroRightTextWrapper,
  HeroRightWrapper,
  HeroSubtitle,
  HeroTitle,
  HeroTitleSpan,
  HeroWrapper,
  PeopleSvgStyled,
  QuestionSvgStyled,
} from "./Hero.styled";
import CheckSvg from "../../images/CheckSvg";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroLeft>
        <HeroTitle>
          The road to the <HeroTitleSpan>depths</HeroTitleSpan> of the human
          soul
        </HeroTitle>
        <HeroSubtitle>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </HeroSubtitle>
        <HeroBtn>
          Get started
          <ArrowSvg />
        </HeroBtn>
      </HeroLeft>
      <HeroRight>
        <HeroRightWrapper>
          <QuestionSvgStyled />
          <PeopleSvgStyled />
          <HeroRightImg src={HeroBigImg} alt="red hair girl photo" />
          <HeroRightBox>
            <HeroRightCheck>
              <CheckSvg />
            </HeroRightCheck>
            <HeroRightTextWrapper>
              <HeroRightText>Experienced psychologists</HeroRightText>
              <HeroRightSpan>15,000</HeroRightSpan>
            </HeroRightTextWrapper>
          </HeroRightBox>
        </HeroRightWrapper>
      </HeroRight>
    </HeroWrapper>
  );
};

export default Hero;
