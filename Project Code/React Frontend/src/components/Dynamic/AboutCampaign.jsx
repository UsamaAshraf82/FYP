import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { campaignAction } from '../../redux/_actions';
import '../../styles/AboutProject.scss';
import Profileimg from "../../Images/Profile/ProfileImg.png";
import ProjectImg from '../../Images/AboutProject/Book.jpg';

import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import renderHTML from 'react-render-html';
import DateCountdown from 'react-date-countdown-timer';

import Img from 'react-cloudinary-lazy-image';
import Disqus from 'disqus-react';

class AboutCampaign extends React.Component {
    constructor(props) {
        super(props);
        

        this.state = {

            tabIndex: 0

        };

    }

    componentDidMount() {
        const { campaignId } = this.props.match.params
        this.props.dispatch(
            campaignAction.getByID(campaignId)
        );
        this.props.dispatch(
            campaignAction.visit(campaignId)
        );
    }

    render() {


        const { campaignId } = this.props.match.params


        const { campaign, loaded } = this.props;

        const disqusShortname = "investme";
        var disqusConfig = {
            url: "https://localhost:44382/campaign/" + campaignId,
            identifier: campaignId
        };


        return (
            <div>
                {loaded &&
                    <div>
                        <div className="row">

                            <div className="col-md-2 ProfileIMG">
                                <img src={Profileimg} alt="ProfileImg" />

                                <h6>{campaign.FName} {campaign.LName}</h6>

                            </div>
                            <div className="col-md-8 ProjectTitle">

                              

                                    <h1> {campaign.Title}</h1>
                                    <p>{campaign.Summary}</p>
                                
                            </div>

                            <div class="row">
                            <div className="col-md-7 Project_Image">
                                <Img
                                    cloudName={'dgptopskq'}
                                    imageName={campaign.Headerimage+".webp"}
                                    fixed={{
                                        height: 350,
                                        width: 640
                                    }}
                                    />
                                </div>
                                <div className="col-md-5 Investment_Detail">
                                <h4>{campaign.TotalCost}  {campaign.CurrencyUnit}</h4> <div className="sp"><h6>Total Cost of Project</h6></div>

                                <h4>{campaign.Fund} {campaign.CurrencyUnit}</h4><div className="sp"><h6>Total Investment Needed</h6></div>

                                <h4> {campaign.Investment} {campaign.CurrencyUnit}</h4><div className="sp"><h6>Total Investment Until Now</h6></div>
                                <h4>{campaign.Fund - campaign.Investment} {campaign.CurrencyUnit}</h4><div className="sp"><h6>Investment Needed</h6></div>
                                
                                <h3>Remainig Time</h3>
                                <DateCountdown

                                    dateTo={campaign.NeedFundBefore}
                                    />
                                <a  class="btn" href={'/payment/' + campaignId}>Project Investment</a>
                                </div >
                            </div>

                      
                        <div className="row " style={{ 'min-width' : "100%" }}>
                            
                            <div className="col-md-12 Project_Header">
                                <hr />
                                     <div className="container">
                                            <div className="col-md-9 Des">
                                                {renderHTML(campaign.Discription)}
                                            </div>
                                        </div>
                                    

                                   <div className="container">
                                        <div className="col-md-9">
                                            <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                                        </div>
                                    </div>
                                       
                        
                            </div>

                        </div>
                    </div>
                    </div>
                }
                    </div>
                
                    

        );
    }
}


function mapStateToProps(state) {
    const { loaded, campaign } = state.campaigns
    return {
        loaded,
        campaign
    }
}


const connectedCampaignPage = connect(mapStateToProps)(AboutCampaign);
export { connectedCampaignPage as AboutCampaign };
