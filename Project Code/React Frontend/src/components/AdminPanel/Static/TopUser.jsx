import React from 'react';

import Logo from "../../../Images/AdminLogo.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
export default class TopUser extends React.Component
{

    Logout() {
        localStorage.removeItem('admin');
        window.location.reload();

    }

    render()
    {
        const user = JSON.parse(localStorage.getItem('admin'));
        return (
            <div className="container">
            <div className="row header-top">

                <a className="col-md-2" href="/">
                    <img src={Logo} alt="LOGO" />
                </a>
                    
                <div className="col-md-10 HeaderTopRightBtns">
                    <ul>
                        <li>
                            <h5>Last Time Access 2-04-2019</h5>
                        </li>
                        <li>
                                <div className="dropdown">
                                    <button className="" type="button" id="UserDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FontAwesomeIcon icon={faUser} /> {user.Name} 
									</button>
                                    <div className="dropdown-menu" aria-labelledby="UserDropdown">
                                        <button className="dropdown-item" onClick={this.Logout}>LogOut</button>
                                       
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