import StarSvg from "../../images/card/StarSvg";
import {
  CardHiddenBox,
  CardHiddenBoxBtn,
  CardHiddenBoxDescr,
  CardHiddenBoxHead,
  CardHiddenBoxHeadImg,
  CardHiddenBoxHeadRate,
  CardHiddenBoxHeadTitle,
  CardHiddenBoxHeadWrapper,
  CardHiddenBoxItem,
  CardHiddenBoxList,
} from "./CardHiddenInfo.styled";

import unknown from "../../images/card/unknown.png";
import { nanoid } from "nanoid";

const CardHiddenInfo = ({ reviews }) => {
  return (
    <CardHiddenBox>
      <CardHiddenBoxList>
        {reviews?.map(({ comment, rating, reviewer }) => (
          <CardHiddenBoxItem key={nanoid()}>
            <CardHiddenBoxHead>
              <CardHiddenBoxHeadImg src={unknown} alt="comment pic" />
              <CardHiddenBoxHeadWrapper>
                <CardHiddenBoxHeadTitle>{reviewer}</CardHiddenBoxHeadTitle>
                <CardHiddenBoxHeadRate>
                  <StarSvg /> {rating}
                </CardHiddenBoxHeadRate>
              </CardHiddenBoxHeadWrapper>
            </CardHiddenBoxHead>
            <CardHiddenBoxDescr>{comment}</CardHiddenBoxDescr>
          </CardHiddenBoxItem>
        ))}
      </CardHiddenBoxList>
      <CardHiddenBoxBtn type="button">Make an appointment</CardHiddenBoxBtn>
    </CardHiddenBox>
  );
};

export default CardHiddenInfo;
