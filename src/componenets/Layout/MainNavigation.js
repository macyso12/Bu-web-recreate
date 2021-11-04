import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

var bgColors = {
  grey: "#F3F1F1",
};

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.first}>Boston</div>
      <div className={classes.second}>University</div>
      <nav>
        <ul>
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="academics">Academics</Link>
          </li>
          <li>
            <Link to="money_matters">Money Matters</Link>
          </li>
          <li>
            <Link to="personal">Personal</Link>
          </li>
          <li>
            <Link to="work">Work</Link>
          </li>
          <li>
            <Link to="food_and_shelter">Food and Shelter</Link>
          </li>
        </ul>
      </nav>
      <Box
        className={classes.box}
        width={400}
        height={40}
        type="search"
        placeholder="Search"
        style={{ backgroundColor: bgColors.grey }}
      ></Box>
    </header>
  );
}

export default MainNavigation;
