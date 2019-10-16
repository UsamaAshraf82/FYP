import React from "react";
import { connect } from "react-redux";

import "../../../styles/AdminCampaign.scss";

import { adminActions } from "../../../redux/_actions";

class AdminAboutCampaign extends React.Component {
  constructor(props) {
    super(props);

    this.BlockClicked = this.BlockClicked.bind(this);
  }

  componentDidMount() {
    var admin = JSON.parse(localStorage.getItem("admin"));
    if (admin) {
      this.props.dispatch(adminActions.GetCampaign());
    } else {
      this.setState({ loggedin: false });
    }
  }

  BlockClicked(event) {
    const { value } = event.target;
    this.props.dispatch(adminActions.Rejected(value));
    this.props.dispatch(adminActions.GetPendingCampaign());
  }

  render() {
    const { loaded, campaigns } = this.props;
    return (
      <div>
        <div className="row funding">
          <div className="col-md-9">
            <h3>Block Campaign And View Report of Campaign</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 table_Data1">
            <table class="table table-Light table-hover">
              <thead>
                <tr className="table-Primary">
                  <th>Title</th>
                  <th>Total Cost</th>
                  <th>Total Fund Needed</th>
                  <th>Remaining Funds</th>
                  <th>Starting Time</th>
                  <th>Closing Time</th>
                  <th>Report</th>
                </tr>
              </thead>
              {loaded && (
                <tbody>
                  {campaigns.map(campaign => (
                    <tr>
                      <td>{campaign.Title}</td>
                      <td>{campaign.TotalCost}</td>
                      <td>{campaign.Fund}</td>
                      <td>{campaign.Fund - campaign.Investment}</td>
                      <td>{campaign.AddedDateTime}</td>
                      <td>{campaign.NeedFundBefore}</td>

                      <td>
                        <button className="btn btn-primary">
                          <a href={"/Admin/Campaign/Report/" + campaign.CampaignId}>Report</a>
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
  const { loaded, campaigns } = state.adminCampaign;
  return {
    loaded,
    campaigns
  };
}

const connectedAboutCampaign = connect(mapStateToProps)(AdminAboutCampaign);
export { connectedAboutCampaign as AdminAboutCampaign };
