import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopupLanguage from "../components/PopupLanguage";
import RightIcon from "../components/RightIcon";

function UserLayout() {
  return <div>
    <Header />
    <Outlet/>
    <Footer />
    <PopupLanguage />
    <RightIcon />
  </div>;
}

export default UserLayout;
