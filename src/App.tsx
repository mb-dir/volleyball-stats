import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Clubs from "./components/Clubs/Clubs";
import Table from "./components/Table/Table";
import Games from "./components/Games/Games";
import Players from "./components/Players/Players";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="kluby" element={<Clubs />} />
        <Route path="tabela" element={<Table />} />
        <Route path="mecze" element={<Games />} />
        <Route path="zawodnicy" element={<Players />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
