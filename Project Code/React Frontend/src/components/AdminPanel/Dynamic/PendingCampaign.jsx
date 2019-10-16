import React from "react";
import { connect } from "react-redux";

import "../../../styles/AdminCampaign.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { adminActions } from "../../../redux/_actions";

class AdminPendingCampaign extends React.Component {
    constructor(props) {
        super(props);

        this.AcceptClicked = this.AcceptClicked.bind(this);
        this.BlockClicked = this.BlockClicked.bind(this);
    }
    componentDidMount() {
        var admin = JSON.parse(localStorage.getItem("admin"));
        if (admin) {
            this.props.dispatch(adminActions.GetPendingCampaign());
        } else {
            window.location.href = "/admin/Login";
        }
    }
    AcceptClicked(event) {
        const { value } = event.target;
        this.props.dispatch(adminActions.Accepted(value));
        this.props.dispatch(adminActions.GetPendingCampaign());
    }
    BlockClicked(event) {
        const { value } = event.target;
        this.props.dispatch(adminActions.Rejected(value));
        this.props.dispatch(adminActions.GetPendingCampaign());
    }
    render() {
        const { ploaded, pcampaigns } = this.props;
        return (
            <div>
                <div className="row funding">
                    <div className="col-md-9">
                        <h3>Pending Campaign</h3>
                    </div>
                    {/* 
                    <div className="col-md-3 listCampaing">
                        <div className="dropdown">
                            <button className="btn navbtn" type="button" id="campaign" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select <FontAwesomeIcon icon={faAngleDown} />
                            </button>
                            <div className="dropdown-menu" aria-labelledby="campaign">
                                <li class="list-group-item list-group-item-action">Top Compaign</li>
                                <li class="list-group-item list-group-item-action">Latst Compaign</li>
                                <li class="list-group-item list-group-item-action">Top of Month</li>
                                <li class="list-group-item list-group-item-action">Top of Year</li>
                                <li class="list-group-item list-group-item-action">All</li>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="row">
                    <div className="col-md-12 table_Data">
                        <table class="table table-Light table-hover">
                            <thead>
                                <tr className="table-Primary">
                                    <th>Title</th>
                                    <th>Total Cost</th>
                                    <th>Total Fund Needed</th>
                                    <th>Remaining Funds</th>
                                    <th>Starting Time</th>
                                    <th>Closing Time</th>
                                    <th>Accept</th>
                                    <th>Block</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            {ploaded && (
                                <tbody>
                                    {pcampaigns.map(campaign => (
                                        <tr key={campaign.CampaignId}>
                                            <td>{campaign.Title}</td>
                                            <td>{campaign.TotalCost}</td>
                                            <td>{campaign.Fund}</td>
                                            <td>{campaign.Fund - campaign.Investment}</td>
                                            <td>{campaign.AddedDateTime}</td>
                                            <td>{campaign.NeedFundBefore}</td>
                                            <td>
                                                <button
                                                    className="btn btn-success"
                                                    value={campaign.CampaignId}
                                                    onClick={this.AcceptClicked}
                                                >
                                                    Accept
                        </button>
                                            </td>

                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    value={campaign.CampaignId}
                                                    onClick={this.BlockClicked}
                                                >
                                                    Block
                        </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-primary ">
                                                    <a href={"/Campaign/" + campaign.CampaignId}>View</a>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { ploaded, pcampaigns } = state.adminPCampaign;
    return {
        ploaded,
        pcampaigns
    };
}

const connectedAboutCampaign = connect(mapStateToProps)(AdminPendingCampaign);
export { connectedAboutCampaign as AdminPendingCampaign };
