import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import PersonalProfile from "../PersonalProfile";

function Layout(props) {
  return (
    <div className={classes.main}>
      <MainNavigation />
      <PersonalProfile />
    </div>
  );
}

export default Layout;
