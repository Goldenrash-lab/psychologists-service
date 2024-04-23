import { nanoid } from "nanoid";
import PsychologistsItem from "../PsychologistsItem/PsychologistsItem";
import { StyledList } from "./PsychologistsList.styled";

const PsychologistsList = ({ data }) => {
  console.log(data);
  return (
    <>
      <StyledList>
        {data?.map((el) => (
          <PsychologistsItem key={nanoid()} info={el} />
        ))}
      </StyledList>
    </>
  );
};

export default PsychologistsList;
