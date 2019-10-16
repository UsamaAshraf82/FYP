import React from 'react';

import Top from './Header/Top';
import TopUser from './Header/TopUser';
import {Bottom} from './Header/Bottom';

import '../../styles/Header.scss';

var local = localStorage.getItem('user');

export default class Header extends React.Component {t
    constructor(props) {
        super(props);
        this.state = { user: local };
    }


  render () {
    return (
        <header className="container-fluid header">
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" hd collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="top">
                        {top()}
                    </div>
                    <div className="bottom">
                       
                        <Bottom />
                    </div>
                </div>
            </nav>
        </header>
    );
  }
}

function top() {
    if (local) {
        return <TopUser />
    }
    else {
        return <Top />
    }
}
