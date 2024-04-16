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

import womanImg from "../../images/card/woman.jpg";

const CardHiddenInfo = () => {
  return (
    <CardHiddenBox>
      <CardHiddenBoxList>
        <CardHiddenBoxItem>
          <CardHiddenBoxHead>
            <CardHiddenBoxHeadImg src={womanImg} alt="comment pic" />
            <CardHiddenBoxHeadWrapper>
              <CardHiddenBoxHeadTitle>Michael Brown</CardHiddenBoxHeadTitle>
              <CardHiddenBoxHeadRate>
                <StarSvg /> 4.5
              </CardHiddenBoxHeadRate>
            </CardHiddenBoxHeadWrapper>
          </CardHiddenBoxHead>
          <CardHiddenBoxDescr>
            Dr. Davis has been a great help in managing my depression. Her
            insights have been valuable.
          </CardHiddenBoxDescr>
        </CardHiddenBoxItem>
        <CardHiddenBoxItem>
          <CardHiddenBoxHead>
            <CardHiddenBoxHeadImg src={womanImg} alt="comment pic" />
            <CardHiddenBoxHeadWrapper>
              <CardHiddenBoxHeadTitle>Michael Brown</CardHiddenBoxHeadTitle>
              <CardHiddenBoxHeadRate>
                <StarSvg /> 4.5
              </CardHiddenBoxHeadRate>
            </CardHiddenBoxHeadWrapper>
          </CardHiddenBoxHead>
          <CardHiddenBoxDescr>
            Dr. Davis has been a great help in managing my depression. Her
            insights have been valuable.
          </CardHiddenBoxDescr>
        </CardHiddenBoxItem>
      </CardHiddenBoxList>
      <CardHiddenBoxBtn type="button">Make an appointment</CardHiddenBoxBtn>
    </CardHiddenBox>
  );
};

export default CardHiddenInfo;
