import { useEffect, useState } from "react";
import Filters from "../components/Filters/Filters";
import PsychologistsList from "../components/PsychologistsList/PsychologistsList";
import { getDatabase, ref, onValue } from "firebase/database";

const PsychologistsPage = () => {
  const [dataFromDB, setDataFromDB] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setDataFromDB(data);
    });
  }, []);

  return (
    <div>
      <Filters />
      <PsychologistsList data={dataFromDB} />
    </div>
  );
};

export default PsychologistsPage;
