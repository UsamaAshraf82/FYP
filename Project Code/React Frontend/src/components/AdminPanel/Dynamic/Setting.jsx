import React from 'react';
import { connect } from 'react-redux';
import '../../../styles/NewCompaign.scss';


export default class Setting extends React.Component {
    

    componentDidMount() {

        var admin = JSON.parse(localStorage.getItem('admin'));
        if (admin) {
      
        }
        else {

            window.location.href = '/admin/Login';
        }
    }
    
    render() {
    
       
       return (
            <div>

                <div className="row ">

                        <form className="form-style-5">

                                <h2>Change Admin Credentials</h2>

                                <fieldset>

                                        <div className="form-group frmgroup">
                                            <label for="job">Current Password</label>
                                            <input type="password" name="Current" id="current" required placeholder="Current Password *" />
                                        </div>

                                        <div className="form-group frmgroup">
                                            <label for="job">New Password</label>
                                            <input type="password" name="New" id="new" required placeholder="New Password *" />
                                        </div>

                                        <div className="form-group frmgroup">
                                            <label for="job">Confirm Password</label>
                                            <input type="password" name="Confirm" id="confirm"  required placeholder="Confirm Password *" />
                                        </div>

                                        <input type="submit" value="Save" />
                                </fieldset>
                        </form>
                </div>
            </div>
        );
    }
}

