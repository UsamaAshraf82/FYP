import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEnvelope, faBell, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

import $ from 'jquery';
import { adminActions } from '../../../redux/_actions';
import { Login } from '../../Static/Login';


class AdminBottom extends React.Component {

    componentDidMount() {

        var admin = JSON.parse(localStorage.getItem('admin'));
        if (admin) {
            this.props.dispatch(
                adminActions.GetPendingCampaign()
            )

        }
        else {

            window.location.href = '/admin/Login';
        }
    }

    Login = {
        Login: $('login').add(<Login />)
    }
    render() {

        const { ploaded, pcampaigns } = this.props;
        return (
            < div className="container" >
                <div className="row header-bottom">
                    <div className="col-md-7 HeaderBottomLeftBtns AdminList">
                        <ul>
                            <li>
                                <a href="/Admin">Dashboard</a>

                            </li>

                            <li>
                                <a href="/Admin/AboutCampaign"> Campaign</a>
                            </li>

                            <li>
                                <a href="/Admin/AboutUser">About User</a>
                            </li>



                        </ul>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-3 HeaderBottomRightBtns">
                        <button>
                            <a href="/Admin/setting">
                                <FontAwesomeIcon icon={faCog} />
                            </a>
                        </button>

                        <button>
                            <a href="/Admin/Pending">
                                <FontAwesomeIcon icon={faBell} />
                                <span class="badge badge-secondary BadgeNot">
                                    {ploaded && pcampaigns.length}
                                </span>
                            </a>
                        </button>

                    </div>

                    <div id="login"></div>

                </div>
            </ div>
        );
    }
}

function mapStateToProps(state) {
    const { ploaded, pcampaigns } = state.adminPCampaign
    return {
        ploaded,
        pcampaigns
    };
}

const connectedAboutCampaign = connect(mapStateToProps)(AdminBottom);
export { connectedAboutCampaign as AdminBottom };
