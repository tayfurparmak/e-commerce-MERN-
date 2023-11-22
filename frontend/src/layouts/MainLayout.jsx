import React from "react";
import Footer from "../components/Layout/Footer/footer";
import Header from "../components/Layout/Header/header";
import Proptypes from "prop-types";
import Search from "../components/Modals/Search/Search";
import { useState } from "react";
import Dialog from "../components/Modals/Dialog/Dialog";

    const MainLayout = ({ children }) => {
        const [isSearchShow, setIsSearchShow] = useState(false);
        const [isDialogShow, setIsDialogShow] = useState(true);
  return (
    <div className="main-layout">
           <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
            <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};