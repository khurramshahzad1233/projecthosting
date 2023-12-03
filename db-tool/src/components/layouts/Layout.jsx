import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
};
