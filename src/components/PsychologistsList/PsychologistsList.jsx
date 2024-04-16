import PsychologistsItem from "../PsychologistsItem/PsychologistsItem";
import { StyledList } from "./PsychologistsList.styled";

const PsychologistsList = () => {
  return (
    <StyledList>
      <PsychologistsItem />
      <PsychologistsItem />
      <PsychologistsItem />
    </StyledList>
  );
};

export default PsychologistsList;
