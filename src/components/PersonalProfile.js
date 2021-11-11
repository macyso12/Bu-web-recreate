import { Box } from "@material-ui/core";
import classes from "./PersonalProfile.module.css";
import ProfilePic from "../../src/ProfilePic.jpg";
import { Link } from "react-router-dom";
import React from "react";

var bgColors = {
  Red: "#CC0000",
};

function PersonalProfile() {
  return (
    <div display="inline-block">
      <Box className={classes.box} bgcolor="white" width={400} height={250}>
        <div className={classes.empty}></div>
        <div className={classes.container}>
          <img
            className={classes.img}
            src={ProfilePic}
            alt="Profile"
            style={{ marginTop: "12%" }}
          ></img>

          <p style={{ marginLeft: "4%", width: "100%" }}>
            So May See Macy <br />
            Computer Science Major <br />
            Current Standing: Sophomore <br />
            GPA: 3.6
          </p>
        </div>
      </Box>
      <Box
        className={classes.topbar}
        bgcolor="darkgrey"
        width={400}
        height={50}
      >
        <h2>BU ID: U12-34-5678</h2>
      </Box>
      <Box
        className={classes.bottombar}
        width={400}
        height={50}
        style={{ backgroundColor: bgColors.Red }}
      >
        <h3>
          <Link to="/personal-profile">View More</Link>
        </h3>
      </Box>
    </div>
  );
}

export default PersonalProfile;
