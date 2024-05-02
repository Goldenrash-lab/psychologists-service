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
import OnlineSvg from "../../images/card/OnlineSvg";
import StarSvg from "../../images/card/StarSvg";
import HeartSvg from "../../images/card/HeartSvg";
import { useState } from "react";
import CardHiddenInfo from "../CardHiddenInfo/CardHiddenInfo";
import { AnimatePresence, motion } from "framer-motion";
import ModalAppointment from "../ModalAppointment/ModalAppointment";
const favArray = JSON.parse(localStorage.getItem("favorites")) ?? [];

const PsychologistsItem = ({ info }) => {
  const [activeComment, setActiveComment] = useState(false);
  const [modal, setModal] = useState(false);
  const [heart, setHeart] = useState(false);
  function showComments() {
    setActiveComment(!activeComment);
  }

  const {
    about,
    avatar_url,
    experience,
    initial_consultation,
    license,
    name,
    price_per_hour,
    rating,
    id,
    reviews,
    specialization,
  } = info;

  function addToFav(id) {
    if (JSON.parse(localStorage.getItem("favorites"))?.includes(id)) {
      const index = favArray.indexOf(id);
      favArray.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favArray));
      setHeart(!heart);
    } else {
      favArray.push(id);
      localStorage.setItem("favorites", JSON.stringify(favArray));
      setHeart(!heart);
    }
  }

  const checked = JSON.parse(localStorage.getItem("favorites"))?.includes(id) ? { checked: true } : null;

  return (
    <>
      <CardItem>
        <CardImgBox>
          <OnlineSvg />
          <CardImg src={avatar_url} alt={name} />
        </CardImgBox>

        <CardContent>
          <CardHead>
            <CardHeadTitle>Psychologist</CardHeadTitle>
            <CardHeadList>
              <CardHeadItem>
                <StarSvg />
                <CardHeadText>
                  Rating: <CardHeadRate>{rating}</CardHeadRate>
                </CardHeadText>
              </CardHeadItem>
              <CardHeadItem>
                <CardHeadText>
                  Price / 1 hour: <CardHeadPrice>{price_per_hour}$</CardHeadPrice>
                </CardHeadText>
              </CardHeadItem>
              <CardHeadItem>
                <CardHeadHeart
                  type="button"
                  $checked={checked}
                  onClick={() => {
                    addToFav(info.id);
                  }}
                >
                  <HeartSvg />
                </CardHeadHeart>
              </CardHeadItem>
            </CardHeadList>
          </CardHead>
          <CardTitle>{name}</CardTitle>
          <CardBenefitsList>
            <CardBenefitsItem>
              <CardBenefitsLabel>
                Experience:
                <CardBenefitsText>{experience}</CardBenefitsText>
              </CardBenefitsLabel>
            </CardBenefitsItem>
            <CardBenefitsItem>
              <CardBenefitsLabel>
                License:
                <CardBenefitsText>{license}</CardBenefitsText>
              </CardBenefitsLabel>
            </CardBenefitsItem>
            <CardBenefitsItem>
              <CardBenefitsLabel>
                Specialization:
                <CardBenefitsText>{specialization}</CardBenefitsText>
              </CardBenefitsLabel>
            </CardBenefitsItem>
            <CardBenefitsItem>
              <CardBenefitsLabel>
                Initial_consultation:
                <CardBenefitsText>{initial_consultation}</CardBenefitsText>
              </CardBenefitsLabel>
            </CardBenefitsItem>
          </CardBenefitsList>
          <CardDescribe>{about}</CardDescribe>

          <AnimatePresence>
            {activeComment ? (
              <>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHiddenInfo reviews={reviews} setModal={setModal} />
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
      {modal && <ModalAppointment setModal={setModal} />}
    </>
  );
};

export default PsychologistsItem;
