import React from 'react';
import Popup from "reactjs-popup";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import Logo from "../../../Images/Logo_Dark.svg";


import { Login } from "../Login";
import { SignUp } from "../SignUp";

export default class Top extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            login: false,
            signup :false
        }
        this.openLoginForm = this.openLoginForm.bind(this)
        this.closeLoginForm = this.closeLoginForm.bind(this)
        this.openSignUpForm = this.openSignUpForm.bind(this)
        this.closeSignUpForm = this.closeSignUpForm.bind(this)

    }
    openLoginForm() {
        this.setState({ login: true })
    }
    closeLoginForm() {
        this.setState({ login: false })
    }

    openSignUpForm() {
        this.setState({ signup: true })
    }
    closeSignUpForm() {
        this.setState({ signup: false })
    }

    render() {

        return (
            <div className="container">
                <div className="row header-top">

                    <a className="col-md-4" href="/">
                        <img src={Logo} alt="LOGO" />
                    </a>
                    
                    <div className=" col-md-8 HeaderTopRightBtns">
                        <ul>
                            <li>
                                <a href="/StartCompaign">Start A New Campaign</a>
                            </li>
                            <li>
                                <button className="button" onClick={this.openLoginForm}>
                                    <FontAwesomeIcon icon={faUser} /> Login
                                </button>
                            </li>
                            <li>
                                <button className="button" onClick={this.openSignUpForm}>
                                    <FontAwesomeIcon icon={faUser} /> SignUp
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
                        <Popup
                            open={this.state.signup}
                            closeOnDocumentClick
                            onClose={this.closeSignUpForm}
                        >
                            <div className="modal">
                                <a className="close" onClick={this.closeSignUpForm}>
                                    &times;
                                        </a>
                                <SignUp />
                            </div>
                        </Popup>
                    </div>
                </div>
            </div>
            
        );
    }
}