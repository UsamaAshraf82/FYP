import React from 'react';
import { connect } from 'react-redux';
import '../../styles/Filter.scss';
import Carousel from './Home/Carousel';
import Search from './Search_Categories/Search';
import SBFilter from './Search_Categories/SideBarFilter';

import CompaignCard from './CampaignCard';

var images = importAll(require.context('../../Images/Compaign/', false, /\.(png|jpe?g|svg|webp)$/));
var image = Object.values(images);

var Compaign = [
    {
        Heading: "Heading 1",
        Body: "Some Tect of Compaign 1",
        Footer: "Budget of Compaign 1",
        img: image[0]
    },
    {
        Heading: "Heading 2",
        Body: "Some Tect of Compaign 2",
        Footer: "Budget of Compaign 2",
        img: image[1]
    },
    {
        Heading: "Heading 3",
        Body: "Some Tect of Compaign 3",
        Footer: "Budget of Compaign 3",
        img: image[2]
    },
    {
        Heading: "Heading 4",
        Body: "Some Tect of Compaign 4",
        Footer: "Budget of Compaign 4",
        img: image[3]
    }
]

const Filter = props => (
    <div>
        <Carousel />

        <Search />
        <div className="row">
            <div className="col-md-3">
                <SBFilter />
            </div>
            <div className="col-md-9">
                <div className="Container">
                    <div className="card-deck row">
                        <CompaignCard Compaign={Compaign[0]} />
                        <CompaignCard Compaign={Compaign[1]} />
                        <CompaignCard Compaign={Compaign[2]} />
                    </div>
                    <div className="card-deck row">
                        <CompaignCard Compaign={Compaign[0]} />
                        <CompaignCard Compaign={Compaign[1]} />
                        <CompaignCard Compaign={Compaign[2]} />
                    </div>
                    </div>
            </div>
        </div>
     <a href="#" className="btn btn-primary showMore">Show More</a>
    


    </div>
	);

	export default connect()(Filter);

	function importAll(r)
	{
	let images = {};
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	return images;
	}
