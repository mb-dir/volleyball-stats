import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Clubs from "./components/Clubs/Clubs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="kluby" element={<Clubs />} />
      </Route>
    </Routes>
  );
}

export default App;
