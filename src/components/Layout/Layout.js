//import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import PersonalProfile from "../PersonalProfile";
import Footer from "../Layout/Footer";
import React from "react";
import "prop-types";

function Layout({ children }) {
  return (
    <div display="flex">
      <MainNavigation />
      {children}
      <PersonalProfile />
      <Footer />
    </div>
  );
}

export default Layout;
