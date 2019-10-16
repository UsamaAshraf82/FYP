import React from 'react';

export default class Banner extends React.Component
{
    render()
    {
        return (
            <div className="fourBanner">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="Banner1 centre">
                            <h1>Top 10 Finds</h1>
                        </div>
                    </div>
                    
                    <div className="col-md-6 ">
                        <div className="Banner3 centre">
                            <h1>Funded in Pakistan</h1>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

