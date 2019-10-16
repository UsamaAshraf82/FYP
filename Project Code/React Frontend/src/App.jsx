import React from "react";
import { Switch } from "react-router";

import { Route } from "react-router4-with-layouts";

import { withCookies } from "react-cookie";

import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";

import NotFoundPage from "./NotFoundPage";

import Home from "./components/Dynamic/Home";
import Filter from "./components/Dynamic/Filter";
import { AboutCampaign } from "./components/Dynamic/AboutCampaign";
import { CampaignStart } from "./components/Dynamic/CampaignStart";
import DashboardPage from "./components/dashboard/pages/DashboardPage";
import ProfilePage from "./components/dashboard/pages/ProfilePage";
import TablesPage from "./components/dashboard/pages/TablesPage";
import { SignUp } from "./components/Static/SignUp";
import { Login } from "./components/Static/Login";
import { Payment } from "./components/Dynamic/Payment";
//import DashboardF from './components/Dynamic/DashBoardF';
//import SideBar from './components/AdminPanel/Dynamic/SideBar';
import Adminsetting from './components/AdminPanel/Dynamic/Setting';
import { AdminDashboard } from './components/AdminPanel/Dynamic/Dashboard';
import graph from './components/dashboard/pages/sections/ChartSection1';
import { AdminPendingCampaign } from './components/AdminPanel/Dynamic/PendingCampaign';
import { AdminAboutCampaign } from './components/AdminPanel/Dynamic/AboutCampaign'
import { AdminAboutUser } from './components/AdminPanel/Dynamic/AboutUser';
import { CampaignReport } from './components/AdminPanel/Dynamic/CampaignReport';
import { IndividualUserReport } from './components/AdminPanel/Dynamic/IndividualUser';
import { AdminLogin } from './components/AdminPanel/Static/AdminLogin';
import { ReturnPayment } from './components/Payment/ReturnPayment';
import userSetting from "./components/Static/userSetting";
import TrustandSafety from "./components/Static/Footer/TrustandSafety";
import Entrepreneur from "./components/Dynamic/Entrepreneurs";
import helpandSupport from './components/Static/Footer/HelpAndSupport';
import OurRule from './components/Static/Footer/OurRules';
import Indiegogo from './components/Static/Footer/Indiegogo';
import Expert from "./components/Static/Footer/Expert";

import {Categories} from './components/Dynamic/Categories/Categories';

import UnderConstruction from "./UnderConstruction";
import Enterprise from "./components/Static/Footer/EntrePrise";
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route layout={Layout} exact path="/" component={Home} />
        <Route layout={Layout} path="/filter" component={Filter} />
        <Route layout={Layout} path="/Campaign/:campaignId" component={AboutCampaign} />
        <Route layout={Layout} path="/SignUp" component={SignUp} />
        <Route layout={Layout} path="/Login" component={Login} />
        <Route layout={Layout} path="/StartCompaign" component={CampaignStart} />
        <Route layout={Layout} path="/payment/:campaignId" component={Payment} />

        <Route layout={Layout} path='/EnterPrise' component={Enterprise} />
        <Route layout={Layout} exact path="/dashboard" component={DashboardPage} />
        <Route layout={Layout} path="/dashboard/profile" component={ProfilePage} />
        <Route layout={Layout} path="/dashboard/tables" component={TablesPage} />
        <Route layout={Layout} path="/UserSetting" component={userSetting} />

        <Route layout={Layout} path="/HelpAndSupport" component={helpandSupport} />
        <Route layout={Layout} path="/OurRules" component={OurRule} />
        <Route layout={Layout} path="/GoInvestMe_VS_Indiegogo" component={Indiegogo} />
        <Route layout={Layout} path="/GoInvestMe_Expert" component={Expert} />

        <Route layout={Layout} path='/ReturnPayment/:campaignId' component={ReturnPayment} />
        <Route layout={Layout} path='/UnderConstruction' component={UnderConstruction} />

        <Route layout={AdminLayout} exact path='/Admin' component={AdminDashboard} />
        <Route layout={AdminLayout} path='/Admin/Login' component={AdminLogin} />
        <Route layout={AdminLayout} path='/Admin/graph' component={graph} />
        <Route layout={AdminLayout} path='/Admin/Pending' component={AdminPendingCampaign} />
        <Route layout={AdminLayout} path='/Admin/Setting' component={Adminsetting} />
        <Route layout={AdminLayout} path='/Admin/AboutUser' component={AdminAboutUser} />
        <Route layout={AdminLayout} path='/Admin/Campaign/Report/:CampaignId' component={CampaignReport} />
        <Route layout={AdminLayout} path='/Admin/User/Report/:UserId' component={IndividualUserReport} />
        <Route layout={AdminLayout} path='/Admin/AboutCampaign' component={AdminAboutCampaign} />

        <Route layout={Layout} path="/TrustANDSafety" component={TrustandSafety} />
        <Route layout={Layout} path="/Entrepreneurs" component={Entrepreneur} />

        <Route layout={Layout} path="/Categories/:id" component={Categories} />


        <Route layout={Layout} component={NotFoundPage} />
      </Switch >
    );
  }
}

export default withCookies(App);
