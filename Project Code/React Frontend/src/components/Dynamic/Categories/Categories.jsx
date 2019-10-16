import React from "react";
import { connect } from "react-redux";
import { campaignAction } from "../../../redux/_actions";

import sliderLeft from "../../../Images/sliderLeft.svg";
import sliderRight from "../../../Images/sliderRight.svg";

import CampaignCard from "../CampaignCard";


class Categories extends React.Component {

    constructor(props) {
        super(props);
    }

  componentDidMount() {

    
    const { id } = this.props.match.params
    this.props.dispatch(
      campaignAction.GetByCategory(id)
  );
}
  render() {

    const { CategoryCampaignLoaded, CategoryCampaign,CategoryCampaignLoading,    categoriesloaded,
      categories }  = this.props

      const { id } = this.props.match.params

      
    return (
      
      <div className="campaign trendingCompaign">
        <div className="row heading">
          <div className="col-md-5">
    {categoriesloaded && <h1>{categories[id-1].Name} Categories Campaign</h1> }
          </div> 
          <div className="col-md-5" />
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
          {CategoryCampaignLoading && <em>Loading Trending Campaigns...</em>}
          {CategoryCampaignLoaded && (
            <div className="card-deck row">
              {CategoryCampaign.map(campaign => (
                <CampaignCard Compaign={campaign} key={campaign.CampaignId} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { CategoryCampaignLoaded, CategoryCampaign,CategoryCampaignLoading } = state.GetByCategory
    const { categoriesloaded, categories } = state.categories

    return {
      CategoryCampaignLoaded,
      CategoryCampaign,
      CategoryCampaignLoading,
      categoriesloaded,
      categories
    }
}


const connectedPayment = connect(mapStateToProps)(Categories);
export { connectedPayment as Categories };
