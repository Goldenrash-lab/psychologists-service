import { Route, Routes } from "react-router-dom";
import PsychologistsPage from "../../pages/PsychologistsPage";
import FavoritesPage from "../../pages/FavoritesPage";
import HomePage from "../../pages/HomePage";
import Layout from "../Layout/Layout";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { current } from "../../store/auth/slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          current({
            user: { email: user.email, id: user.uid, name: user.displayName },
            token: user.accessToken,
          })
        );
      } else {
        // User is signed out
        // ...
      }
    });
  }, [dispatch]);

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
