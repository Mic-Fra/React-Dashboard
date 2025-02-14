import React from "react";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

type LayoutProps = {
    children: React.ReactNode;
  };
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;