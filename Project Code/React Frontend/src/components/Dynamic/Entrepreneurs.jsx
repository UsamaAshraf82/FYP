import React from "react";
import { connect } from "react-redux";
import "../../styles/Home.scss";

import { MoreInvestedCampaignEntrepreneurs } from "./Entrepreneur/MoreInvestedCampaignEntrepreneur";
import { MoreRunningCampaignEntrepreneur } from "./Entrepreneur/MoreRunningCampaignEntrepreneur";

const Home = props => (
  <div>
    <MoreInvestedCampaignEntrepreneurs />

  </div>
);

export default connect()(Home);
