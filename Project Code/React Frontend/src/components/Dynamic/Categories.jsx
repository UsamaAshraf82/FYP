import React from "react";
import { connect } from "react-redux";
import "../../styles/Home.scss";

import { CategoriesCampaign } from "./Categories/Categories";
import { MoreRunningCampaignEntrepreneur } from "./Entrepreneur/MoreRunningCampaignEntrepreneur";

const Home = props => (
    <div>
        <CategoriesCampaign />

    </div>
);

export default connect()(Home);
