import React from "react";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">{children}</div>
    </div>
  );
};

export default MainLayout;
