import React from 'react';
import { MDBRow } from 'mdbreact';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import '../../../styles/Dashboard.scss';
import { Button } from 'reactstrap';



import { InvestedCampaign } from './sections/InvestedCampaign';
import { UserCampaign } from './sections/UserCampaign';
import { ProfilePage } from './sections/ProfilePage';
import { EditProfile } from './sections/EditProfile';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tabIndex: 0 }
        this.handleTabClick = this.handleTabClick.bind(this);
    }


    handleTabClick(index) {
        this.setState({

            tabIndex: index
        }
        );
    }

    render() {


        const { tabIndex } = this.state; 

return (
    <React.Fragment>
        <div className="row ">
            <Tabs className=" col-md-12 Project_Detail"
                selectedIndex={tabIndex} 
          //      forceRenderTabPanel ="true"
                onSelect={this.handleTabClick}>
                <TabList >
                    <Tab ><button>Profile</button></Tab>

                    <Tab><button>User Campaign</button></Tab>
                    <Tab><button>Invested Campaign</button></Tab>
                    <Tab><button> EditProfile</button></Tab>
                </TabList>

                

                    <TabPanel className="Details">
                        <ProfilePage />
                    </TabPanel>

                <TabPanel className="Details">
                        <UserCampaign />
                    </TabPanel>
                <TabPanel className="Details">
                        <InvestedCampaign />

                    </TabPanel>
                    <TabPanel className="Details">
                        <EditProfile />

                    </TabPanel>
                    
                  
            </Tabs>

        </div>




    </React.Fragment>
);
}
}



export default DashboardPage;