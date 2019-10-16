import React from 'react';
import { Container } from 'reactstrap';
import Header from './Static/Header';
import Footer from './Static/Footer';

import TopNavigation from './dashboard/topNavigation';
import SideNavigation from './dashboard/sideNavigation';
import Routes from './dashboard/Routes';

 import DashboardPage from "./dashboard/pages/DashboardPage";


export default props => (

    <div>
        <Header />
        <SideNavigation />

        <main id="content" className="p-5">
            <Routes />
        </main>+
        <Footer />
    </div>

);






 //  < div className="flexible-content" >
 // <TopNavigation />
 // <SideNavigation />
 // <main id="content" className="p-5">
 //     {this.props.component}
//  </main>
//  <DashFooter />
// </div >