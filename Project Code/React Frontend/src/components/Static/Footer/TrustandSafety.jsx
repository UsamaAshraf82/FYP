import React from "react";
import "../../../styles/Layout/trustsafeety.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarCrash,
  faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";

export default class TrustandSafety extends React.Component {
  render() {
    return (
      <div>
        <div className="row trustHeader">
          <div className="col-md-3" />

          <div className="col-md-6 trustH">
            <h1>Trust & Safety</h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <h3>
              We take our responsibility as GoInvestMe's. It's our job to
              provide a system deserving of your trust — by proactively
              screening for potential problems, by investigating issues brought
              to us by our community, and by still being exceedingly clear that
              even with these steps not every project will go as planned.
            </h3>
            <br />
            <h3>
              Our goal is to provide a safe and trusted platform where people
              are honest and open with one another as they collaborate to bring
              creative projects to life.
            </h3>
            <br />
            <br />
            <h2>What everyone should know</h2>
            <br />

            <h5>
              <FontAwesomeIcon icon={faCaretSquareDown} />{" "}
              <bold>GoInvesMe is not a store.</bold> People aren't buying things
              that already exist — they're helping to create new things.
              Creating things isn't always easy. Some projects will go
              wonderfully, and others will run into obstacles. Be prepared for a
              little bit of each.
            </h5>
            <br />
            <h5>
              <FontAwesomeIcon icon={faCaretSquareDown} /> Creators are
              responsible for their projects. When you back a project, you're
              trusting the creator to do a good job, so if you don't know them
              personally or by reputation, do a little research first.
              GoInvestMe doesn't evaluate a project's claims, resolve disputes,
              or offer refunds — backers decide what's worth funding and what's
              not.
            </h5>
            <br />
            <h5>
              <FontAwesomeIcon icon={faCaretSquareDown} />
              Some projects won't go as planned. Even with a creator's best
              efforts, a project may not work out the way everyone hopes.
              GoInvstMe creators have a remarkable track record, but nothing's
              guaranteed. Keep this in mind when you back a project.
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
