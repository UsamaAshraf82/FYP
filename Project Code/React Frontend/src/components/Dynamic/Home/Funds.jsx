import React from 'react';

export default class Funds extends React.Component
{
    render()
    {
        return (
            <div className="container funds">
               
                    <h1>Funding</h1>
               
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="centre">Total Funded Projects</h2>
                        <h3 className="centre">15,113</h3>
                    </div>
                    <div className="col-md-4 ">
                        <h2 className="centre">Total Investors</h2>
                        <h3 className="centre">5,205</h3>
                    </div>
                    <div className="col-md-4 ">
                        <h2 className="centre">Live Compaign</h2>
                        <h3 className="centre">343</h3>
                    </div>
                </div>
            </div>
        );
    }
}
