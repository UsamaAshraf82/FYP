import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faSearch } from '@fortawesome/free-solid-svg-icons';


import Img from 'react-cloudinary-lazy-image';
export default class StoryCard extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6 col-sm-12 campaigncard">
                <div className="card">
                    <Img
                        cloudName={'dgptopskq'}
                        imageName={this.props.Story.ProfilePic + ".webp"}
                        fixed={{
                            height: 210,
                            width: 253
                        }}
                        urlParams={'c_fill,g_face:auto'}
                    />
                <div className="card-body">
                <h5 className="card-title">{this.props.Story.FName} {this.props.Story.LName}</h5>
                <p className="card-text">{this.props.Story.Story}</p>
               </div>
                
                </div>
            </div>

        );
    }
}
