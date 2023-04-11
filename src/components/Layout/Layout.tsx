import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import "./layout.css";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <main className="App">
      <Header />
      <Menu
        items={[ { label: "Tabela" }, { label: "Mecze" }, { label: "Kluby" } ]}
      />
      <Outlet />
    </main>
  );
};

export default Layout;
