import { Outlet } from "react-router-dom";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <main className="App">
      menu
      <Outlet />
    </main>
  );
};

export default Layout;
