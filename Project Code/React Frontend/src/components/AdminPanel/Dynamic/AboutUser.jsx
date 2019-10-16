import React from 'react';
import { connect } from 'react-redux';
import '../../../styles/AdminCampaign.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { adminActions } from '../../../redux/_actions';

class AdminAboutUser extends React.Component {

    constructor(props) {
        super(props);

        this.AcceptClicked = this.AcceptClicked.bind(this);
        // this.BlockClicked = this.BlockClicked.bind(this);
    }
    componentDidMount() {

        var admin = JSON.parse(localStorage.getItem('admin'));
        if (admin) {
            this.props.dispatch(
                adminActions.AdminUsersDetails()
            )

        }
        else {

            window.location.href = '/admin/Login';
        }
    }
    AcceptClicked(event) {
        const { value } = event.target;
        this.props.dispatch(
            adminActions.Accepted(value)
        );

    }
    render() {

        const { ploaded, pusers } = this.props;

        return (

            <div>

                <div className="row funding">

                    <div className="col-md-9">
                        <h3>Block User And View Individual Report</h3>

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
                                    <th>User</th>
                                    <th>First-Name</th>
                                    <th>Last-Name</th>
                                    <th>Country</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Report</th>

                                </tr>
                            </thead>
                            <tbody>
                                {ploaded && pusers.map(user => (
                                    <tr>
                                        <td>{user.UserId}</td>
                                        <td>{user.FName}</td>
                                        <td>{user.LName}</td>
                                        <td>{user.Country}</td>
                                        <td>{user.Email}</td>
                                        <td>{user.PhoneNo}</td>

                                        <td>
                                            <button className="btn btn-primary">
                                                <a href={"/Admin/User/Report/" + user.UserId}>Report</a>
                                            </button>
                                        </td>
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
    const { ploaded, pusers } = state.adminUser
    return {
        ploaded,
        pusers
    };
}

const connectedAboutUser = connect(mapStateToProps)(AdminAboutUser);
export { connectedAboutUser as AdminAboutUser };
