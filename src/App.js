import UniversityClassSchedule from "./pages/UnivesityClassSchedule";
import BUStudentLinkHome from "./pages/BUStudentLinkHome";
import AcademicAdvising from "./pages/AcademicAdvising";
import Grades from "./pages/Grades";
import PersonalProfile from "./components/PersonalProfile";
import AcademicCalendar from "./pages/AcademicCalendar";
import CurrentSchedule from "./pages/CurrentSchedule";
import FitRecMembership from "./pages/FitRecMembership";
import SearchQuickPTJob from "./pages/SearchQuickPTJob";
import WorkStudyJobList from "./pages/WorkStudyJobList";
import EmployeeEntryTime from "./pages/EmployeeEntryTime";
import ConveniencePointInfo from "./pages/ConveniencePointInfo";
import DiningPlanInfo from "./pages/DiningPlanInfo";
import CurrentBalance from "./pages/CurrentBalance";
import { Route, Switch } from "react-router-dom";
import Academics from "./pages/Academics";
import MoneyMatter from "./pages/MoneyMatter";
import Work from "./pages/Work";
import Personal from "./pages/Personal";
import FoodAndShelter from "./pages/FoodAndShelter";
import Layout from "./components/Layout/Layout";
import React from "react";

//import MainNavigation from "./components/Layout/MainNavigation";

function App() {
  return (
    <Layout>
      <Switch>
        {/*exact={true} will create looking for the
         right route and not stop ONCE it saw the first 
         character in the first index*/}
        <Route path="/" exact={true}>
          <BUStudentLinkHome />
        </Route>
        <Route path="/university-class-schedule" exact={true}>
          <UniversityClassSchedule />
        </Route>
        <Route path="/academics" exact={true}>
          <Academics />
        </Route>
        <Route path="/money-matter" exact={true}>
          <MoneyMatter />
        </Route>
        <Route path="/work" exact={true}>
          <Work />
        </Route>
        <Route path="/personal" exact={true}>
          <Personal />
        </Route>
        <Route path="/food-and-shelter" exact={true}>
          <FoodAndShelter />
        </Route>
        <Route path="/grades" exact={true}>
          <Grades />
        </Route>
        <Route path="/academic-advising" exact={true}>
          <AcademicAdvising />
        </Route>
        <Route path="/academic-calendar" exact={true}>
          <AcademicCalendar />
        </Route>
        <Route path="/current-schedule" exact={true}>
          <CurrentSchedule />
        </Route>
        <Route path="/personal-profile" exact={true}>
          <PersonalProfile />
        </Route>
        <Route path="/fitrec-membership" exact={true}>
          <FitRecMembership />
        </Route>
        <Route path="/search-quick-and-pt-job" exact={true}>
          <SearchQuickPTJob />
        </Route>
        <Route path="/work-study-job-list" exact={true}>
          <WorkStudyJobList />
        </Route>
        <Route path="/employee-entry-time" exact={true}>
          <EmployeeEntryTime />
        </Route>
        <Route path="/convenience-point-info" exact={true}>
          <ConveniencePointInfo />
        </Route>
        <Route path="/dining-plan-info" exact={true}>
          <DiningPlanInfo />
        </Route>
        <Route path="/current-balance" exact={true}>
          <CurrentBalance />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
