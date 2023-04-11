import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Clubs from "./components/Clubs/Clubs";
import Table from "./components/Table/Table";
import Games from "./components/Games/Games";
import NotFound from "./components/NotFound/NotFound";
import ClubView from "./components/Clubs/ClubView";
import Main from "./components/Main/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="kluby">
          <Route index element={<Clubs />} />
          <Route path=":id" element={<ClubView />} />
        </Route>
        <Route path="tabela" element={<Table />} />
        <Route path="mecze" element={<Games />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
