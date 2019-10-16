import React from "react";
import "../../../styles/Layout/trustsafeety.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCarCrash,
    faCaretSquareDown,
    faCheck
} from "@fortawesome/free-solid-svg-icons";

export default class OurRules extends React.Component {
    render() {
        return (
            <div>
                <div className="row RulesHeader">
                    <div className="col-md-3" />

                    <div className="col-md-8 rules">
                        <h1>Our Rules</h1>

                        <h7>GoInvestMe is a community of people committed to
                            bringing creative projects to life.</h7>
                    </div>
                </div>
                <hr />
                <div className="row RulesT">
                    <div className="col-md-2" />
                    <div className="col-md-8">
                        <h4>
                            We welcome and support projects from a variety of categories: Art, Comics, Crafts,
                             Dance, Design, Fashion, Film & Video, Food, Games, Journalism, Music,
                             Photography, Publishing, Technology, and Theater. Here are five rules
                             every GoInvestMe project must follow.
                        </h4>
                        <br />
                        <h4>
                            <FontAwesomeIcon icon={faCheck} /> Projects must create something to share with others.
                        </h4>

                        <br />
                        <h5>
                            GoInvestMe can be used to create all sorts of things:
                              art and gadgets, events and spaces, ideas and experiences.
                              But every project needs a plan for creating something and
                              sharing it with the world. At some point, the creator should be
                               able to say: “It’s finished. Here’s what we created. Enjoy!”


                        </h5>
                        <br />
                        <h4>
                            <FontAwesomeIcon icon={faCheck} /> Projects must be honest and clearly presented.
                        </h4>

                        <br />
                        <h5>
                            Our community is built on trust and communication.
                          Projects can’t mislead people or misrepresent facts,
                          and creators should be candid about what they plan to accomplish.
                           When a project involves manufacturing and distributing something
                            complex, like a gadget, we require projects to show backers a
                             prototype of what they’re making, and we prohibit the use of
                              misleading imagery.



                        </h5>
                        <br />
                        <h4>
                            <FontAwesomeIcon icon={faCheck} /> Projects can’t fundraise for charity.

                        </h4>

                        <br />
                        <h5>
                            While nonprofits are welcome to launch projects on GoInvestMe,
                            projects can't promise to raise funds to donate to a charity or cause.
                            Funds raised on GoInvestMe must go
                            towards facilitating the project outlined by the creator on the project page.

                        </h5>
                        <br />

                    </div>
                </div>
            </div>
        );
    }
}
