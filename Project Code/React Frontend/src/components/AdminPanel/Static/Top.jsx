import React from 'react';
import Logo from "../../../Images/AdminLogo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Login } from '../../Static/Login';

import Popup from "reactjs-popup";



export default class Top extends React.Component {

    constructor(props) {
        super(props)
        this.state = { login: false }
        this.openLoginForm = this.openLoginForm.bind(this)
        this.closeLoginForm = this.closeLoginForm.bind(this)

    }
    openLoginForm() {
        this.setState({ login: true })
    }
    closeLoginForm() {
        this.setState({ login: false })
    }

    render() {


        return (

            <div className="container">
                <div className="row header-top">

                    <a className="col-md-4" href="/">
                        <img src={Logo} alt="LOGO" />
                    </a>

                    <div className="col-md-2">

                    </div>
                   

                    <div className=" col-md-6 HeaderTopRightBtns">
                        <ul>

                            <li><h5>Last Time Access 2-04-2019</h5></li>
                            <li>
                                <button className="button" onClick={this.openLoginForm}>
                                    <FontAwesomeIcon icon={faUser} /> Login
                                </button>
                            </li>

                        </ul>
                        <Popup
                            open={this.state.login}
                            closeOnDocumentClick
                            onClose={this.closeLoginForm}
                        >
                            <div className="modal">
                                <a className="close" onClick={this.closeLoginForm}>
                                    &times;
                                        </a>
                                <Login />
                            </div>
                        </Popup>

                    </div>
                </div>
            </div>

        )
    }

}







