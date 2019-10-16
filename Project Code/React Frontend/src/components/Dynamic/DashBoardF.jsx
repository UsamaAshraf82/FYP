import React from 'react';
import '../../styles/Dashboard.scss';
import Profileimg from "../../Images/Profile/ProfileImg.png";

export default class CompaignCard extends React.Component {
    render() {
        return (




            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 dash">
                        <div class="bg-light border-right " id="sidebar-wrapper">
                            <div class="ProfileIMG">

                                <img src={Profileimg} alt="ProfileImg" />
                                <h3> Imran Latif</h3>
                            </div>
                        <div class="list-group list-group-flush">
                            <a href="#" class="list-group-item list-group-item-action bg-light">View Compaign</a>
                            <a href="#" class="list-group-item list-group-item-action bg-light">View Investment</a>
                            <a href="#" class="list-group-item list-group-item-action bg-light">Edit Compaing</a>
                            <a href="#" class="list-group-item list-group-item-action bg-light">Edit Profile</a>
 
                     </div>

                        </div>
                    </div>
                  </div>
                </div>
                

            
            
   
    











        );
    }
}
