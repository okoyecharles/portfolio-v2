import React from "react";
import SideBar from "./Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="layout">
      <SideBar />
      {children}
    </main>
  );
};

export default Layout;
