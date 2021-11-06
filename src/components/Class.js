import classes from "./Class.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Class() {
  return (
    <div>
      <div className={classes.space}></div>
      <div style={{ marginLeft: "4%" }}>Classes and Grades</div>
      <Link to="/current-calendar" className={classes.current}>
        Current Calendar
      </Link>

      <hr className={classes.hr} />
    </div>
  );
}

export default Class;
