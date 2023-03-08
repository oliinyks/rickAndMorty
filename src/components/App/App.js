import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { NotFound } from "pages/NotFound/NotFound";

const Home = lazy(() => import('../../pages/Home/Home'))
const CharacterDetails = lazy(() =>
  import("../../pages/CharacterDetails/CharacterDetails")
);

function App() {
	return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/:characterId" element={<CharacterDetails />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
