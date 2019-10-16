import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import { connect } from 'react-redux';
import Profileimg from "../../../../Images/Profile/ProfileImg.png";
import '../../../../styles/profileView.scss';

import Img from 'react-cloudinary-lazy-image';
import { userActions } from '../../../../redux/_actions';

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        var user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.props.dispatch(
                userActions.getByID(user.UserId));
        }
        else {

            window.location.href = '/Login'
        }
    }

    render() {
        const { loaded, user } = this.props;
        return (

            <div className="container">

                {loaded &&
                    <div className="row well profile">

                        <div className="col-md-8">
                            <br />
                            <h3><strong>Name:</strong> {user.FName} {user.LName}</h3>
                            <p><strong>Email: </strong> {user.Email} </p>
                            <p><strong>Phone No: </strong>{user.PhoneNo} </p>
                            <p><strong>Address: </strong>{user.Address}</p>
                            <p><strong>City: </strong>{user.City}</p>
                            <p><strong>Country: </strong>{user.Country}</p>
                            <p><strong>Gender: </strong>{user.Gender}</p>
                            <p><strong>Story: </strong>{user.Story}</p>
                        </div>

                        <div className=" col-md-4">
                            <div className="text-center">
                                <Img
                                    cloudName={'dgptopskq'}
                                    imageName={user.ProfilePic + ".webp"}
                                    fixed={{
                                        height: 250,
                                        width: 250
                                    }}
                                    urlParams={'c_fill,g_face:auto,r_max'}
                                />
                            </div>
                        </div>

                    </div>
                }
                <button className="btn btn-info btn2"><span className="fa fa-user"></span> Edit  Profile </button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loaded, user } = state.users
    return {
        loaded,
        user
    };
}

const connectedProfilePage = connect(mapStateToProps)(ProfilePage);
export { connectedProfilePage as ProfilePage };
