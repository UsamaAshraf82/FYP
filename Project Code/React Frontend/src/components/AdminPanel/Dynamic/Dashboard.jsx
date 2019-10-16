import React from "react";
import { connect } from "react-redux";
import {Chart} from "./Chart";
import { adminActions } from "../../../redux/_actions";

import "../../../styles/AdminDashboard.scss";

class AdminDashboard extends React.Component {
  componentDidMount() {  
    var admin = JSON.parse(localStorage.getItem("admin"));
    if (admin) {
      this.props.dispatch(adminActions.dashboardDetails());
    } else {
      window.location.href = "/admin/Login";
    }
  }
  render() {
    const { loaded, campaigns } = this.props;
    return (
      <div>
        <div class="row">
          <div class="col-md-4">
            <a href="/Admin/AboutCampaign">
              <div class="panel panel-back noti-box">
                <span class="icon-box bg-color-red set-icon">
                  <i class=" fa fa-refresh" />
                </span>
                {loaded && (
                  <div class="text-box">
                    <p class="main-text">{campaigns[0].TotalCampaign} Total</p>
                    <p class="text-muted">Campaign</p>
                  </div>
                )}
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <div class="panel panel-back noti-box">
              <span class="icon-box bg-color-green set-icon">
                <i class="fa fa-bars" />
              </span>
              {loaded && (
                <div class="text-box">
                  <p class="main-text">{campaigns[0].OnGoing} Running</p>
                  <p class="text-muted">Campaign</p>
                </div>
              )}
            </div>
          </div>
          <div class="col-md-4">
            <div class="panel panel-back noti-box">
              <span class="icon-box bg-color-blue set-icon">
                <i class="fa fa-bell-o" />
              </span>
              {loaded && (
                <div class="text-box">
                  <p class="main-text">{campaigns[0].Profit} Earning</p>
                  <p class="text-muted">From Campaign</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 ReportHeader">
            <h3>Monthly Finance Report According to Invested Campaign </h3>
          </div>
        </div>
        <Chart />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loaded, campaigns, loading } = state.adminCampaign;
  return {
    loaded,
    loading,
    campaigns
  };
}

const connectedAdminDashboard = connect(mapStateToProps)(AdminDashboard);
export { connectedAdminDashboard as AdminDashboard };
