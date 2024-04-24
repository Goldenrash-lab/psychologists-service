import { nanoid } from "nanoid";
import PsychologistsItem from "../PsychologistsItem/PsychologistsItem";
import { StyledList } from "./PsychologistsList.styled";
import { useEffect, useState } from "react";

const PsychologistsList = ({ data }) => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    if (data && !Array.isArray(data)) {
      setDataArray(Object.values(data).map((el) => el));
    } else {
      setDataArray(data);
    }
  }, [data]);

  return (
    <>
      <StyledList>
        {dataArray?.map((el) => (
          <PsychologistsItem key={nanoid()} info={el} />
        ))}
      </StyledList>
    </>
  );
};

export default PsychologistsList;
