import React from "react";

import Logo from "../../../Images/Logo_Dark.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default class TopUser extends React.Component {
  Logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <div className="container">
        <div className="row header-top">
          <a className="col-md-2 adminLogo" href="/">
            <img src={Logo} alt="LOGO" />
          </a>

          <div className="col-md-10 HeaderTopRightBtns">
            <ul>
              <li>
                <a href="/StartCompaign">Start A New Campaign</a>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    className=""
                    type="button"
                    id="UserDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faUser} /> {user.FName} {user.LName}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="UserDropdown">
                    <button className="dropdown-item" onClick={this.Logout}>
                      LogOut
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
