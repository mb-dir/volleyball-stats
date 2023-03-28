import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Clubs from "./components/Clubs/Clubs";
import Table from "./components/Table/Table";
import Games from "./components/Games/Games";
import Players from "./components/Players/Players";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="kluby" element={<Clubs />} />
        <Route path="tabela" element={<Table />} />
        <Route path="mecze" element={<Games />} />
        <Route path="zawodnicy" element={<Players />} />
      </Route>
    </Routes>
  );
}

export default App;
