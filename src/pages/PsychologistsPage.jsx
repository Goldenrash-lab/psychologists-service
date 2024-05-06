import { useCallback, useEffect, useState } from "react";
import Filters from "../components/Filters/Filters";
import PsychologistsList from "../components/PsychologistsList/PsychologistsList";
import { getDatabase, ref, onValue, orderByChild, orderByValue, orderByKey } from "firebase/database";
import { query, limitToFirst } from "firebase/database";
import { LoadMoreBtn, LoadWrapper } from "../components/PsychologistsList/PsychologistsList.styled";
import { useForm } from "react-hook-form";

const LIMIT = 3;

const PsychologistsPage = () => {
  const [dataFromDB, setDataFromDB] = useState(null);
  const [prevData, setPrevData] = useState(LIMIT);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(
    (filter) => {
      const db = getDatabase();

      const countRef = query(ref(db, "psychologists"), orderByChild("rating"), limitToFirst(LIMIT * page));
      onValue(countRef, (snapshot) => {
        const data = snapshot.val();
        console.log("====================================");
        console.log(data);
        console.log("====================================");
        setDataFromDB(data);
      });
    },
    [page]
  );

  function checkDataFromDB(data) {
    if (data) {
      if (Array.isArray(data)) {
        return data.length;
      } else {
        return Object.keys(data).length;
      }
    }
  }

  useEffect(() => {
    if (page) {
      fetchData("rating");
    }
  }, [fetchData, page]);

  function handleClick() {
    setPage(page + 1);
    setPrevData(prevData + 3);
  }

  function getSelectOption(e) {
    console.log("====================================");
    console.log(e);
    console.log("====================================");
  }

  return (
    <>
      <Filters filter={getSelectOption} />
      <PsychologistsList data={dataFromDB} />
      {prevData % checkDataFromDB(dataFromDB) === 0 && (
        <LoadWrapper>
          <LoadMoreBtn type="button" onClick={handleClick}>
            Load more
          </LoadMoreBtn>
        </LoadWrapper>
      )}
    </>
  );
};

export default PsychologistsPage;
