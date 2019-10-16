import React from "react";
import { connect } from 'react-redux';

import { categoriesAction } from '../../../redux/_actions';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faUser,
    faCog,
    faCaretDown
} from "@fortawesome/free-solid-svg-icons";

import $ from "jquery";

import { Login } from "../Login";

class Bottom extends React.Component {

    componentDidMount() {


        this.props.dispatch(
            categoriesAction.GetAll()
        );


    }

    Login = {
        Login: $("login").add(<Login />)
    };
    render() {
        const { categoriesloaded, categories } = this.props
        return (
            <div className="container">
                <div className="row header-bottom">
                    <div className="col-md-7 HeaderBottomLeftBtns">
                        <ul>
                            <li>
                                <div className="dropdown">
                                    <button
                                        className="btn navbtn"
                                        type="button"
                                        id="categories"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Categories <FontAwesomeIcon icon={faCaretDown} />
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="categories">
                                        {categoriesloaded &&
                                            categories.map((category) =>
                                                <a className="dropdown-item" href={"/Categories/" + category.CategoryId}>
                                                    {category.Name}
                                                </a>
                                            )
                                        }
                                    </div>
                                </div>
                            </li>
                            <a href="/EnterPrise">EnterPrise</a>

                            <li>
                            

                            </li>



                        </ul>

                    </div>
                    <div className="col-md-2" />
                    <div className="col-md-3 HeaderBottomRightBtns">
                        <button>
                            <a href="/UserSetting">
                                <FontAwesomeIcon icon={faCog} />
                            </a>
                        </button>
                        <button>
                            <a href="/Dashboard">
                                <FontAwesomeIcon icon={faUser} />
                            </a>
                        </button>

                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>

                    <div id="login" />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { categoriesloaded, categories } = state.categories
    return {
        categoriesloaded,
        categories
    };
}

const connectedBottom = connect(mapStateToProps)(Bottom);
export { connectedBottom as Bottom };
