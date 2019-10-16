
import React from 'react';
import { connect } from 'react-redux';
import '../../styles/Home.scss';

import Carousel from './Home/Carousel';
import { TrendingCampaigns } from './Home/TrendingCampaigns';
import { NewCampaigns } from './Home/NewCampaigns';
import Banner from './Home/Banner';
import { Categories } from './Home/Categories';
import Funds from './Home/Funds';
import { Stories } from './Home/Stories';


const Home = props => (
    <div>
        <Carousel />
        <TrendingCampaigns />

        <hr className="home-hr" />
        <NewCampaigns />
        <Funds />
        <Categories />

        <hr className="home-hr" />
        <Stories />	
    </div>
);

export default connect()(Home);
