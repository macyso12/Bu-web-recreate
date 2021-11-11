import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import PersonalProfile from "../PersonalProfile";
import Footer from "../Layout/Footer";
import React from "react";
import "prop-types";

function Layout({ children }) {
  return (
    <div display="flex" className="content-container">
      <div>
        <MainNavigation />
        <PersonalProfile />
        <main flexGrow="1" height="10px">
          {children}
        </main>
      </div>
      <div></div>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
