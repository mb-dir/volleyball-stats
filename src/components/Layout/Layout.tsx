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
        items={[
          { label: "Tabela", onClick: () => console.log("Item 1 clicked") },
          { label: "Mecze", onClick: () => console.log("Item 2 clicked") },
          { label: "Kluby", onClick: () => console.log("Item 3 clicked") },
          { label: "Zawodnicy", onClick: () => console.log("Item 3 clicked") },
        ]}
      />
      <Outlet />
    </main>
  );
};

export default Layout;
