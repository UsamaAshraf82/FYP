import React from "react";
import "../../../styles/Layout/trustsafeety.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCarCrash,
    faCaretSquareDown,
    faCheck
} from "@fortawesome/free-solid-svg-icons";

export default class EnterPrise extends React.Component {
    render() {
        return (
            <div>
                <div className="row Enter">
                    <div className="col-md-3" />

                    <div className="col-md-8 ">
                        <h1>EnterPrise</h1>
                        <h7>GoInvestMe is a community of people committed to
                            bringing creative projects.</h7>
                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8 en">
                        <h4>

                            Enterprise is another word for a for-profit business or company,
                            but it is most often associated with entrepreneurial ventures.
                            People who have entrepreneurial success are often referred to as “enterprising.”
                        </h4>
                        <hr />
                        <h4><FontAwesomeIcon icon={faCheck} /> Sole proprietorship – A company
                        run by a single individual, typically for their benefit, with unlimited
                         liability for any damages that occur as a result of the business’
                         operations.

                        </h4>
                        <hr />

                        <h4><FontAwesomeIcon icon={faCheck} /> Limited Liability Company (LLC) – An LLC
                        offers the legal protection of a
                        corporation and the tax treatment of a partnership.
                         operations.

                        </h4>
                        <hr />
                        <h4><FontAwesomeIcon icon={faCheck} /> Partnership – A business run by two or more individuals or
                        entities who share ownership – not necessarily equal ownership,
                        however.
                        </h4>
                        <hr />
                        <h4>
                            <FontAwesomeIcon icon={faCheck} /> Corporation – A for-profit entity created to shield the owner(s) from liability
                            should the enterprise become subject to a lawsuit.
                            There are different forms of corporations, depending on how many owners there are.
                        </h4>
                        <hr />
                    </div>
                </div>


            </div>
        );
    }
}
