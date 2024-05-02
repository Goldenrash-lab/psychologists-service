import { useEffect, useState } from "react";
import PsychologistsList from "../components/PsychologistsList/PsychologistsList";

import { getDatabase, ref, onValue } from "firebase/database";
import { query } from "firebase/database";
import PsychologistsItem from "../components/PsychologistsItem/PsychologistsItem";
import { nanoid } from "nanoid";
import { StyledList } from "../components/PsychologistsList/PsychologistsList.styled";

const FavoritesPage = () => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const dataFromLS = JSON.parse(localStorage.getItem("favorites"));

    if (dataFromLS) {
      const db = getDatabase();

      const countRef = query(ref(db, "psychologists"));
      onValue(countRef, (snapshot) => {
        const data = snapshot.val();

        dataFromLS.forEach((id) => setFiltered((prev) => [...prev, ...data.filter((el) => el.id === id)]));
      });
    }
  }, []);

  return (
    <>
      {filtered.length > 0 ? (
        <StyledList>
          {filtered.map((el) => (
            <PsychologistsItem key={nanoid()} info={el} />
          ))}
        </StyledList>
      ) : (
        <h1>Please choose your favorite psychologists</h1>
      )}
    </>
  );
};

export default FavoritesPage;
