import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import {} from "@material-ui/core";
//import { IconName } from "react-icons/";
import { AiOutlineSearch } from "react-icons/ai";

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

      <div class="input">
        <input
          type="text"
          placeholder="      Search..."
          className={classes.input}
          style={{ backgroundColor: bgColors.grey }}
        />
      </div>
      <div className={classes.search}>
        <AiOutlineSearch size="25px" color="darkgrey" />
      </div>
    </header>
  );
}

export default MainNavigation;
