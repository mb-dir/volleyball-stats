import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Clubs from "./components/Clubs/Clubs";
import Table from "./components/Table/Table";
import Games from "./components/Games/Games";
import Players from "./components/Players/Players";
import NotFound from "./components/NotFound/NotFound";
import axios from "./api/axios";
import { useEffect } from "react";
import ClubView from "./components/Clubs/ClubView";

function App() {
  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const response = await axios.get("/teams/statistics", {
  //         params: { league: "113", season: "2022", team: "910" },
  //       });
  //       console.log(response.data.response);
  //       return response.data;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getUsers();
  // }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="kluby">
          <Route index element={<Clubs />} />
          <Route path=":id" element={<ClubView />} />
        </Route>
        <Route path="tabela" element={<Table />} />
        <Route path="mecze" element={<Games />} />
        <Route path="zawodnicy" element={<Players />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
