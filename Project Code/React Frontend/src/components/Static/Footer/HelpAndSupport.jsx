import React from "react";
import "../../../styles/Layout/trustsafeety.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCarCrash,
    faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";

export default class HelpAndSupport extends React.Component {
    render() {
        return (
            <div>
                <div className="row helpheader">
                    <div className="col-md-3" />

                    <div className="col-md-6 helpH">
                        <h1>Help & Support</h1>
                    </div>
                </div>
                <hr />
                <div className="row help">
                    <div className="col-md-4">
                        <h3>

                            GoInvestMe Basics
                            </h3>
                        <br />
                        <a link="#"><h4>What is GoInvestMe?</h4></a>
                        <hr />
                        <a link="#"><h4>What are the basics of GoInvestMe?</h4></a>
                        <hr />
                        <a link="#"><h4>What are the fees?</h4></a>
                        <hr />
                        <a link="#"><h4>How do I start Project?</h4></a>
                        <hr />

                    </div>
                    <div className="col-md-4">
                        <h3>

                            Entrepreneurs Questions
                            </h3>
                        <br />
                        <a link="#"><h4>How Entrepreneurs can Start Campaign?</h4></a>
                        <hr />
                        <a link="#"><h4>Policy For Entrepreneurs</h4></a>
                        <hr />
                        <a link="#"><h4>What can I do in case of Fail?</h4></a>
                        <hr />
                        <a link="#"><h4>Policy Of Share Return </h4></a>
                        <hr />

                    </div>
                    <div className="col-md-4">
                        <h3>

                            Investor Questions
                            </h3>
                        <br />
                        <a link="#"><h4>How Investers can Invesst?</h4></a>
                        <hr />
                        <a link="#"><h4>Policy For Investors</h4></a>
                        <hr />
                        <a link="#"><h4>In case of failure OF Campaign</h4></a>
                        <hr />
                        <a link="#"><h4>Share Buy Policy</h4></a>
                        <hr />

                    </div>


                </div>
            </div>
        );
    }
}
