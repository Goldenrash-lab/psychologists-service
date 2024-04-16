import {
  CardBenefitsItem,
  CardBenefitsLabel,
  CardBenefitsList,
  CardBenefitsText,
  CardButtonMore,
  CardContent,
  CardDescribe,
  CardHead,
  CardHeadHeart,
  CardHeadItem,
  CardHeadList,
  CardHeadPrice,
  CardHeadRate,
  CardHeadText,
  CardHeadTitle,
  CardImg,
  CardImgBox,
  CardItem,
  CardTitle,
} from "./PsychologistsItem.styled";
import womanImg from "../../images/card/woman.jpg";
import OnlineSvg from "../../images/card/OnlineSvg";
import StarSvg from "../../images/card/StarSvg";
import HeartSvg from "../../images/card/HeartSvg";
import { useState } from "react";
import CardHiddenInfo from "../CardHiddenInfo/CardHiddenInfo";
import { AnimatePresence, motion } from "framer-motion";

const PsychologistsItem = () => {
  const [activeComment, setActiveComment] = useState(false);
  function showComments() {
    setActiveComment(!activeComment);
  }

  return (
    <CardItem>
      <CardImgBox>
        <OnlineSvg />
        <CardImg src={womanImg} alt="woman card" />
      </CardImgBox>

      <CardContent>
        <CardHead>
          <CardHeadTitle>Psychologist</CardHeadTitle>
          <CardHeadList>
            <CardHeadItem>
              <StarSvg />
              <CardHeadText>
                Rating: <CardHeadRate>4.75</CardHeadRate>
              </CardHeadText>
            </CardHeadItem>
            <CardHeadItem>
              <CardHeadText>
                Price / 1 hour: <CardHeadPrice>120$</CardHeadPrice>
              </CardHeadText>
            </CardHeadItem>
            <CardHeadItem>
              <CardHeadHeart type="button">
                <HeartSvg />
              </CardHeadHeart>
            </CardHeadItem>
          </CardHeadList>
        </CardHead>
        <CardTitle>Dr. Sarah Davis</CardTitle>
        <CardBenefitsList>
          <CardBenefitsItem>
            <CardBenefitsLabel>
              Experience:
              <CardBenefitsText>12 years</CardBenefitsText>
            </CardBenefitsLabel>
          </CardBenefitsItem>
          <CardBenefitsItem>
            <CardBenefitsLabel>
              License:
              <CardBenefitsText>
                Licensed Psychologist (License #67890)
              </CardBenefitsText>
            </CardBenefitsLabel>
          </CardBenefitsItem>
          <CardBenefitsItem>
            <CardBenefitsLabel>
              Specialization:
              <CardBenefitsText>Depression and Mood Disorders</CardBenefitsText>
            </CardBenefitsLabel>
          </CardBenefitsItem>
          <CardBenefitsItem>
            <CardBenefitsLabel>
              Initial_consultation:
              <CardBenefitsText>
                Free 45-minute initial consultation
              </CardBenefitsText>
            </CardBenefitsLabel>
          </CardBenefitsItem>
        </CardBenefitsList>
        <CardDescribe>
          Dr. Sarah Davis is a highly experienced and licensed psychologist
          specializing in Depression and Mood Disorders. With 12 years of
          practice, she has helped numerous individuals overcome their
          depression and regain control of their lives. Dr. Davis is known for
          her empathetic and understanding approach to therapy, making her
          clients feel comfortable and supported throughout their journey to
          better mental health.
        </CardDescribe>

        <AnimatePresence>
          {activeComment ? (
            <>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <CardHiddenInfo />
              </motion.div>
            </>
          ) : (
            <CardButtonMore type="button" onClick={showComments}>
              Read more
            </CardButtonMore>
          )}
        </AnimatePresence>
      </CardContent>
    </CardItem>
  );
};

export default PsychologistsItem;
