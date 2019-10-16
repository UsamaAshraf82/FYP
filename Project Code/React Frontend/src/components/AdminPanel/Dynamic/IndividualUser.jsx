import React from 'react';
import { connect } from 'react-redux';
import '../../../styles/UserReport.scss';
import Img from 'react-cloudinary-lazy-image';
import { adminActions } from '../../../redux/_actions';
class IndividualUserReport extends React.Component {


    componentDidMount() {
        var admin = JSON.parse(localStorage.getItem('admin'));
        if (admin) {
            const { UserId } = this.props.match.params;
            this.props.dispatch(
                adminActions.AdminUserDetails(UserId)
            )
            this.props.dispatch(
                adminActions.CampaignGetByUserID(UserId)
            )
            this.props.dispatch(
                adminActions.CampaignInvestedGetByUserID(UserId)
            )

        }
        else {
            window.location.href = '/admin/Login';
        }
    }
    render() {

        const { ploaded,
            puser,
            userCampaign,
            userCampaignLoaded,
            investedCampaign,
            investedCampaignLoaded } = this.props;

        return (
            <div>
                <div className="row userInfo ">
                    <div className="col-md-3 card">
                        {ploaded &&
                            <Img
                                cloudName={'dgptopskq'}
                                imageName={puser.ProfilePic + ".webp"}
                                fixed={{
                                    height: 210,
                                    width: 253
                                }}
                            />
                        }
                        {ploaded &&
                            <h4>{puser.FName} {puser.LName}</h4>
                        }

                        <hr />
                        {userCampaignLoaded &&<h6>Total Campaign {userCampaign.length}</h6>}
                        {investedCampaignLoaded &&<h6>Invested Campaign {investedCampaign.length}</h6>}


                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-8">
                        <h3>Campaign </h3>
                        <div className="line">
                            <hr />
                        </div>
                        <table class="table table-Light table-hover table_Data">
                            <thead>
                                <tr className="table-Primary">

                                    <th>Title</th>
                                    <th>Total Cost</th>
                                    <th>Total Fund Needed</th>
                                    <th>Need Fund Before</th>
                                    <th>Estimated First Profit</th>

                                </tr>
                            </thead>
                            <tbody>
                                {userCampaignLoaded &&
                                    userCampaign.map(campaign => (
                                        <tr>
                                            <td>{campaign.Title}</td>
                                            <td>{campaign.TotalCost}</td>
                                            <td>{campaign.Fund}</td>
                                            <td>{campaign.NeedFundBefore}</td>
                                            <td>{campaign.EstimatedFirstProfit}</td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <h3>Invested Campaign </h3>
                        <div className="line">
                            <hr />
                        </div>
                        <table class="table table-Light table-hover table_Data">
                            <thead>
                                <tr className="table-Primary heading1">
                                    <th>Title</th>
                                    <th>Total Cost</th>
                                    <th>Invested Funds</th>
                                    <th>Hold Share </th>
                                </tr>
                            </thead>
                            <tbody>
                            {investedCampaignLoaded &&
                                    investedCampaign.map(campaign => (
                                <tr>
                                    <td>{campaign.Title}</td>
                                    <td>{campaign.TotalCost}</td>

                                    <td>{campaign.UserInvestment}</td>
                                    <th>{(campaign.UserInvestment/campaign.TotalCost*100).toFixed(2)}</th>
                                   

                                </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        )
    }
}
function mapStateToProps(state) {
    const { ploaded, puser } = state.adminUser;
    const { userCampaign, userCampaignLoaded } = state.adminUserCampaign;
    const { investedCampaign, investedCampaignLoaded } = state.adminUserInvestedCampaign;
    return {
        ploaded,
        puser,
        userCampaign,
        userCampaignLoaded,
        investedCampaign,
        investedCampaignLoaded
    };
}

const connectedAboutUser = connect(mapStateToProps)(IndividualUserReport);
export { connectedAboutUser as IndividualUserReport };
