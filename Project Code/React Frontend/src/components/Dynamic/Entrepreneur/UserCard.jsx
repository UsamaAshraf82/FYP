import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faSearch } from '@fortawesome/free-solid-svg-icons';

import '../../styles/CampaignCard.scss';

import Img from 'react-cloudinary-lazy-image';

export default class CompaignCard extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6 col-sm-12 campaigncard">
                <a className="card cardhover" href={'/campaign/' + this.props.Compaign.CampaignId}>
                    <Img
                        cloudName={'dgptopskq'}
                        imageName={this.props.Compaign.Cardimage+".webp"}
                        fixed={{
                            height: 210,
                            width: 253
                        }}
                    />
                <div className="card-body">
                    <h5 className="card-title">{this.props.Compaign.Title}</h5>
                    <p className="card-text">{this.props.Compaign.Summary}</p>
                </div>
                
                </a>
            </div>
        );
    }
}
