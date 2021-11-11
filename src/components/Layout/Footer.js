//import classes from "./Footer.module.css";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => (
  <div className={classes.all}>
    <hr />
    <div className={classes.general}>
      <ul>
        <li>
          <Link
            to="https://www.bu.edu/advising/"
            target="blank"
            className={classes.list}
          >
            Help
          </Link>
        </li>
        <li>
          <Link
            to="https://www.bu.edu/reg/students/faqs/"
            target="blank"
            className={classes.list}
          >
            FAQs
          </Link>
        </li>
        <li style={{ marginLeft: "60%" }}>
          @Copyright2021 | Boston University
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
