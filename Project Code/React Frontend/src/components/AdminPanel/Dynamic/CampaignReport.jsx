import React from 'react';
import { connect } from 'react-redux';

import '../../../styles/AllReport.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { adminActions } from '../../../redux/_actions';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
class CampaignReport extends React.Component {
    

    componentDidMount() {

        var admin = JSON.parse(localStorage.getItem('admin'));
        if (admin) {
            const { CampaignId } = this.props.match.params;
            this.props.dispatch(
                adminActions.AdminInvestedCampaignView(CampaignId)
                );
        }
        else {

            window.location.href = '/admin/Login';
        }
    }
    render() {

        const { investers, investersLoaded } = this.props;
        return (

            <div>
                <div className="row CampaignReportHeader1">
                    <div className="col-md-9 ">

                        <h3>Collected Investment Report</h3>

                    </div>
                    <div className="col-md-3 search">

                        <form>

                            <div className="input-group">
                            <input class="form-control" type="text" placeholder="Search" />
                                <button class="btn btn-seconary" type="submit"> <FontAwesomeIcon icon={faSearch} /></button>
                            </div>
                         </form>
                    
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-12 table_Data">

                        <table class="table table-Light table-hover">
                            <thead>
                                <tr className="table-Primary">
                                    <th>Email</th>
                                    <th>Full Name</th>
                                    <th>Invested Amount</th>
                                    <th>Date</th>

                                </tr>
                            </thead>
                            <tbody>
                            {investersLoaded && investers.map(invester => (
                                <tr>
                                    <td>{invester.Email}</td>
                                    <td>{invester.FullName}</td>
                                    <td>{invester.Investment}</td>
                                    <td>{invester.AddedDateTime}</td>

                                </tr>
                            )
                            )}

                    

                            </tbody>
                        </table>

                            {investersLoaded && investers.length===0 &&
                                                        
                                <p>No Investment happens on this Campaign</p>        
                            }
                    </div>
                </div>

    

            </div>

            )
    }
}

function mapStateToProps(state) {
    const { investers, investersLoaded } = state.adminCampaignInvester
    return {
        investers,
        investersLoaded
    };
}

const connectedInvestedCampaign = connect(mapStateToProps)(CampaignReport);
export { connectedInvestedCampaign as CampaignReport };
