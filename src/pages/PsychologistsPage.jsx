import { useCallback, useEffect, useState } from "react";
import Filters from "../components/Filters/Filters";
import PsychologistsList from "../components/PsychologistsList/PsychologistsList";
import { getDatabase, ref, onValue } from "firebase/database";
import { query, limitToFirst } from "firebase/database";
import {
  LoadMoreBtn,
  LoadWrapper,
} from "../components/PsychologistsList/PsychologistsList.styled";

const LIMIT = 3;

const PsychologistsPage = () => {
  const [dataFromDB, setDataFromDB] = useState(null);
  const [prevData, setPrevData] = useState(LIMIT);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(() => {
    const db = getDatabase();

    const countRef = query(
      ref(db, "psychologists"),
      limitToFirst(LIMIT * page)
    );
    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      setDataFromDB(data);
    });
  }, [page]);

  useEffect(() => {
    if (page) {
      fetchData();
    }
  }, [fetchData, page]);

  function handleClick() {
    setPage(page + 1);
    setPrevData(prevData + 3);
  }

  return (
    <>
      <Filters />
      <PsychologistsList data={dataFromDB} />
      {prevData % dataFromDB?.length === 0 && (
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
