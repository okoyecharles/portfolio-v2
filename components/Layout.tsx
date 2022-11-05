import Navigation from "./Navigation";
import SideBar from "./Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="layout">
      <Navigation />
      <SideBar />
      <div className="space"></div>
      {children}
    </main>
  );
};

export default Layout;
