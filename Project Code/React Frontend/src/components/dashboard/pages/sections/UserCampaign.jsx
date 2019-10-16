import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBRow,
  MDBCol
} from "mdbreact";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import a from "../../../../Images/Compaign/aa.webp";
import c from "../../../../Images/Compaign/cc.webp";
import b from "../../../../Images/Compaign/bb.webp";

import Img from "react-cloudinary-lazy-image";
import { campaignAction } from "../../../../redux/_actions";

class UserCampaign extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.props.dispatch(campaignAction.GetByUserID(user.UserId));
    } else {
      window.location.href = "/Login";
    }
  }

  render() {
    const { loaded, loading, campaigns } = this.props;

    return (
      <MDBCard>
        <MDBCardBody>
          <MDBTable hover>
            <MDBTableHead color="blue lighten-4">
              <tr>
                <th>Campaign</th>
                <th>Fund Needed</th>
                <th>Investments</th>
                <th>Handle</th>
              </tr>
            </MDBTableHead>

            <MDBTableBody>
              {loading && (
                <tr>
                  <td>loading Your campaigns</td>
                </tr>
              )}
              {loaded &&
                campaigns.map(campaign => (
                  <tr key={campaign.CampaignId}>
                    <td>{campaign.Title}</td>
                    <td>{campaign.Fund}</td>
                    <td defaultValue="0">{campaign.Investment}</td>
                    <td>
                      <a href={"/campaign/" + campaign.CampaignId}>
                        <FontAwesomeIcon icon={faEye} />
                      </a>
                      <a href={"/returnpayment/" + campaign.CampaignId}>
                        <FontAwesomeIcon icon={faTrash} />
                      </a>
                    </td>
                  </tr>
                ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

function mapStateToProps(state) {
  const { loaded, loading, campaigns } = state.campaigns;
  return {
    loaded,
    loading,
    campaigns
  };
}

const connectedUserCampaign = connect(mapStateToProps)(UserCampaign);
export { connectedUserCampaign as UserCampaign };
