import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';


export default class Search extends React.Component {
    render() {
        return (
            <div className="row">

                <div className="input-group seacrh1">
                    <input type="text" className="form-control" placeholder="Search" />
                    
                        <button className="filter_Serch_btn">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>


                    </div>
                </div>





        );
    }

}
    