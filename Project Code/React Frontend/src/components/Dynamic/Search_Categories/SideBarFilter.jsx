import React from 'react';
import { connect } from 'react-redux';

export default class Filter extends React.Component {
    render() {
        return (
            <div>

                    <div className="category">
                        <ul>
                            <li><a href="#home">Equity</a></li>
                            <li><a href="#news">Donation</a></li>
                            <hr/>
                            <li><a href="#contact">Latest Compaign</a></li>
                            <li><a href="#about">Trendint Compaign</a></li>
                            <li><a href="#about">New Compaign</a></li>
                            <hr />
                            <li><a href="#about">Top Funding Compaign</a></li>

                        </ul>




                    </div>

                </div>
            

            );

    }
}

