import React from "react";
import "../../../styles/Layout/trustsafeety.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCarCrash,
    faCaretSquareDown,
    faCheck
} from "@fortawesome/free-solid-svg-icons";

export default class Indiegigo extends React.Component {
    render() {
        return (
            <div>
                <div className="row DiffHeader">
                    <div className="col-md-3" />

                    <div className="col-md-8 Diff">
                        <h1>GoInvestMe vs Indiegogo</h1>

                    </div>
                </div>
                <hr />
                <div className="row DiffT">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <h1>GoInvestMe</h1>
                        <br />
                        <h6>
                            <FontAwesomeIcon icon={faCheck} /> GoInvestMe-A Crowdfunding platform for start-ups.
                                Crowdfunding is process to collecting small number of amounts from
                                many people to start business.
                            <hr />
                            <FontAwesomeIcon icon={faCheck} /> This system will be used to reduce
                            the gap between the entrepreneurs and the Investors and allow them
                            to communicate with each other. Entrepreneurship is a way to start
                            the business in which entrepreneur lease money from the investor and
                            investor invest his money in the proposed project.
                            <hr />

                            <FontAwesomeIcon icon={faCheck} /> This system shall allow the
                            entrepreneur to create campaigns and describe how much money
                            is needed for his campaign for some time duration that will be visible
                            to users. After time expiring, entrepreneur will not be able to collect
                            more money.
                            <hr />

                            <FontAwesomeIcon icon={faCheck} /> The system shall also provide the entrepreneur to edit the
                            campaign description. The system shall also allow the investor to create
                            campaign but as an entrepreneur with it ID.
                            Investor can also invest in different campaigns and companies can invest in other campaigns.
                        </h6>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <h1>
                            Indiegogo
                        </h1>

                        <br />

                        <h6>
                            <FontAwesomeIcon icon={faCheck} /> The site runs on a rewards-based system, meaning donors, investors, or
                            customers who are willing help to fund a project or product can donate and
                            receive a gift, rather than an equity stake in the company.
                            <hr/>
                        <FontAwesomeIcon icon={faCheck} /> Following changes in Security and Exchange Commission rules earlier in 2016, Indiegogo
                             has partnered with MicroVentures to offer equity-based campaigns beginning in
                            November 2016, allowing unaccredited investors to participate with equity stakes.
    
                            <hr/>
                            <FontAwesomeIcon icon={faCheck} /> Indiegogo offers direct credit card payment acceptance through their own portal. 
                            Those funds are disbursed up to two weeks after the conclusion of a campaign
                        <hr/>
                        <FontAwesomeIcon icon={faCheck} /> Indiegogo launched Indiegogo Life, a service that people can use to raise money 
                        for emergencies, medical expenses, celebrations, or other life events

                        </h6>

                    </div>
                </div>
            </div>
        );
    }
}
