import React from 'react';
import { connect } from 'react-redux';
import { campaignAction } from '../../../redux/_actions';


import sliderLeft from "../../../Images/sliderLeft.svg";
import sliderRight from "../../../Images/sliderRight.svg";

import CampaignCard from "../CampaignCard";


class NewCampaigns extends React.Component {


    componentDidMount() {
        this.props.dispatch(
            campaignAction.NewCampaigns()
        );
    }
    render() {
        const { NewCampaignsLoading, NewCampaignsLoaded, NewCampaigns } = this.props


        return (
            <div className="campaign trendingCompaign">
                <div className="row heading">
                    <div className="col-md-5">
                        <h1>New Campaign</h1>
                    </div>
                    <div className="col-md-5"></div>
                    <div className="col-md-2 slider">
                        <button className="float-left" href="#">
                            <img src={sliderLeft} alt="LeftSlider" />
                        </button>
                        <button className="float-right" href="#">
                            <img src={sliderRight} alt="RightSlider" />
                        </button>
                    </div>
                </div>
              
                <div className="content">
                    {NewCampaignsLoading && <em>Loading New Campaigns...</em>}
                    {NewCampaignsLoaded &&
                        <div className="card-deck row">
                        {NewCampaigns.map((campaign) =>
                            <CampaignCard Compaign={campaign} key={campaign.CampaignId} />

                            )}
                        </div>
                    }


                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { NewCampaignsLoading, NewCampaignsLoaded, NewCampaigns } = state.campaignsNew
    return {
        NewCampaignsLoading,
        NewCampaignsLoaded,
        NewCampaigns
    }
}


const connectedTrendingCampaigns = connect(mapStateToProps)(NewCampaigns);
export { connectedTrendingCampaigns as NewCampaigns };
