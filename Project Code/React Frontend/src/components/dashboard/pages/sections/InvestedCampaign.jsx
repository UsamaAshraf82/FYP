import React from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';
import { connect } from 'react-redux';
import { campaignAction } from '../../../../redux/_actions';



class InvestedCampaign extends React.Component {

    componentDidMount() {

        var user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.props.dispatch(
                campaignAction.GetInvestedCampaign(user.UserId)
                );
        }
        else {

            window.location.href = '/Login'
        }
    }

    render() {
        const { loaded, campaigns } = this.props;

        return (


            <MDBCard>
                <MDBCardBody>
                    <MDBTable hover>
                        <MDBTableHead color="blue lighten-4">
                            <tr>
                                <th>Title</th>
                                <th>Invested</th>
                                <th>TotalCost</th>
                                <th> UserInvestments </th>
                                <th>Share</th>
                                <th>Action</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {loaded &&
                                campaigns.map((campaign) =>
                                    <tr key={campaign.Title}>
                                        <td>{campaign.Title}</td>
                                        <td>{campaign.Investment}</td>
                                        <td>{campaign.TotalCost}</td>
                                        <td>{campaign.UserInvestment}</td>
                                        <td>{(campaign.UserInvestment / campaign.TotalCost * 100).toFixed(2)}</td>
                                        <td><a href={"/campaign/"+campaign.CampaignId}>View</a></td>
                                    </tr>
                                )
                            }
                        </MDBTableBody>
                    </MDBTable>
                </MDBCardBody>
            </MDBCard>


        )
    }
}

function mapStateToProps(state) {
    const { loaded, campaigns } = state.campaigns
    return {
        loaded,
        campaigns
    };
}

const connectedInvestedCampaign = connect(mapStateToProps)(InvestedCampaign);
export { connectedInvestedCampaign as InvestedCampaign };
