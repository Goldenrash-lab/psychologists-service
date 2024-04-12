import { motion } from "framer-motion";
import ArrowSvg from "../../images/ArrowSvg";
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
        <HeroTitle
          as={motion.h1}
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          The road to the <HeroTitleSpan>depths</HeroTitleSpan> of the human
          soul
        </HeroTitle>
        <HeroSubtitle>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </HeroSubtitle>
        <HeroBtn
          as={motion.button}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.2,
            ease: "easeIn",
          }}
        >
          Get started
          <ArrowSvg />
        </HeroBtn>
      </HeroLeft>
      <HeroRight
        as={motion.div}
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.6,
        }}
      >
        <HeroRightWrapper>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "linear",
            }}
          >
            <QuestionSvgStyled />

            <PeopleSvgStyled />
          </motion.div>

          <HeroRightImg src={HeroBigImg} alt="red hair girl photo" />
          <HeroRightBox
            as={motion.div}
            initial={{ opacity: 0, x: 0, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: [0, 1.2, 1] }}
            transition={{
              delay: 0.3,
              duration: 0.4,
              ease: "easeOut",
            }}
          >
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
