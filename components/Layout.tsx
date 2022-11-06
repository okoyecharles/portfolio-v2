import useMediaQuery from "../hooks/useMediaQuery";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import SideBar from "./Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const navBreakPoint = useMediaQuery(768);

  return (
    <main className="layout">
      {navBreakPoint ? <MobileNavigation /> : <Navigation />}
      {!navBreakPoint && <SideBar />}
      {children}
    </main>
  );
};

export default Layout;
