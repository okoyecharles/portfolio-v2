import useMediaQuery from "../../hooks/useMediaQuery";
import MobileNavigation from "../navigation/MobileNavigation";
import Navigation from "../navigation/Navigation";
import SideBar from "../navigation/Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
  layoutRef?: React.MutableRefObject<null>;
}

export const Layout = ({ children, layoutRef }: LayoutProps) => {
  const navBreakPoint = useMediaQuery(768);
  return (
    <>
      {navBreakPoint ? <MobileNavigation /> : <Navigation />}
      {!navBreakPoint && <SideBar />}
      <main className="layout" ref={layoutRef}>
        {children}
      </main>
    </>
  );
};

export default Layout;
