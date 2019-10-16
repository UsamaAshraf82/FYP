import React from "react";
import "../../../styles/Layout/trustsafeety.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCarCrash,
    faCaretSquareDown,
    faCheck
} from "@fortawesome/free-solid-svg-icons";

export default class Expert extends React.Component {
    render() {
        return (
            <div>
                <div className="row Expert">
                    <div className="col-md-3" />

                    <div className="col-md-8 ">
                        <h1>GOInvestMe Expert</h1>

                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8 ex">
                        <h4>

                            GoInvestMe Experts are consultants with experience running and
                            advising successful GoInvestMe projects. Find an Expert for help
                            with campaign strategy, storytelling, backer engagement and management,
                            and more. These consultants are not affiliated with GoInvestMe, and we
                            don't earn a referral fee if you hire an Expert. As with any consultant, outcomes may vary,
                            so be sure to evaluate each Expert's services with your own needs in mind.
                        </h4>
                    </div>
                </div>


            </div>
        );
    }
}
