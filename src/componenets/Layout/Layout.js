//import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import PersonalProfile from "../PersonalProfile";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <PersonalProfile />
    </div>
  );
}

export default Layout;
