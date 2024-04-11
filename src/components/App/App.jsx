import { Route, Routes } from "react-router-dom";
import PsychologistsPage from "../../pages/PsychologistsPage";
import FavoritesPage from "../../pages/FavoritesPage";
import HomePage from "../../pages/HomePage";
import Layout from "../Layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
