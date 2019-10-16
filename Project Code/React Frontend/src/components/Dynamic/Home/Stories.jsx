import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../../redux/_actions';


import sliderLeft from "../../../Images/sliderLeft.svg";
import sliderRight from "../../../Images/sliderRight.svg";

import StoryCard from "../StoryCard";

class Stories extends React.Component {

    componentDidMount() {
        this.props.dispatch(
            userActions.Stories()
        );
    }
    render() {
        const { StoriesLoading, StoriesLoaded, Stories } = this.props


        return (
            <div className="campaign trendingCompaign">
                <div className="row heading">
                    <div className="col-md-5">
                        <h1>User Stories</h1>
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
                    {StoriesLoading && <em>Loading New Campaigns...</em>}
                    {StoriesLoaded &&
                        <div className="card-deck row">
                        {Stories.map((Story) =>
                            <StoryCard Story={Story} key={Story.UserId} />

                            )}
                        </div>
                    }


                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { StoriesLoading, StoriesLoaded, Stories } = state.userStories
    return {
        StoriesLoading,
        StoriesLoaded,
        Stories
    }
}


const connectedTrendingCampaigns = connect(mapStateToProps)(Stories);
export { connectedTrendingCampaigns as Stories };
