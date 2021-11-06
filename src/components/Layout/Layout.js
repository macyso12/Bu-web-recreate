//import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import PersonalProfile from "../PersonalProfile";
import Footer from "../Layout/Footer";

function Layout() {
  return (
    <div>
      <MainNavigation />
      <PersonalProfile />
      <Footer />
    </div>
  );
}

export default Layout;
