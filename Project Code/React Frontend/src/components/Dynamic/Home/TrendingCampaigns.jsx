import React from 'react';
import { connect } from 'react-redux';
import { campaignAction } from '../../../redux/_actions';


import sliderLeft from "../../../Images/sliderLeft.svg";
import sliderRight from "../../../Images/sliderRight.svg";

import CampaignCard from "../CampaignCard";

class TrendingCampaigns extends React.Component {

    componentDidMount() {
        this.props.dispatch(
            campaignAction.TrendingCampaigns()
        );

    }
    render() {
        const { TrendingCampaignsLoading, TrendingCampaignsLoaded, TrendingCampaigns } = this.props


        return (
            <div className="campaign trendingCompaign">
                <div className="row heading">
                    <div className="col-md-5">
                        <h1>Trending Campaign</h1>
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
                    {TrendingCampaignsLoading && <em>Loading Trending Campaigns...</em>}
                    {TrendingCampaignsLoaded &&
                        <div className="card-deck row">
                        {TrendingCampaigns.map((campaign) =>
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
    const { TrendingCampaignsLoading, TrendingCampaignsLoaded, TrendingCampaigns } = state.campaignsTrending
    return {
        TrendingCampaignsLoading,
        TrendingCampaignsLoaded,
        TrendingCampaigns
    }
}


const connectedTrendingCampaigns = connect(mapStateToProps)(TrendingCampaigns);
export { connectedTrendingCampaigns as TrendingCampaigns };

