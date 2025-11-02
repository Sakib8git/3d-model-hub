import React from "react";
import { Outlet } from "react-router";
import NAvBar from "../Components/NAvBar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div >
      <div className="max-w-7xl mx-auto">
        <header>
          <NAvBar></NAvBar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Main;
