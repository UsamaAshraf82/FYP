import React from 'react';
import { Container } from 'reactstrap';
import Header from './Static/Header';
import Footer from './Static/Footer';

import TopNavigation from './dashboard/topNavigation';
import SideNavigation from './dashboard/sideNavigation';
import DashFooter from './dashboard/Footer' 
import Routes from './dashboard/Routes';


export default props => (

    <div>
        <Header />
        <Container className="main" >
            {props.children}
        </Container>
        <Footer  />
    </div>

);





{/* < div className="flexible-content" >
       
<Header />
<SideNavigation />
<main id="content" className="p-5">
    {props.children}
</main>
<Footer />
</div > 

*/}

{/*
  <div>
     <Header />
     <Container>
         {props.children}
     </Container>
     <Footer />
 </div>
*/}