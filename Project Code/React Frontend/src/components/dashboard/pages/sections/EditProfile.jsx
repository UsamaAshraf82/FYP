import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userActions } from '../../../../redux/_actions'

import Dropzone from 'react-dropzone';
import request from 'superagent';

import Img from 'react-cloudinary-lazy-image';

const CLOUDINARY_UPLOAD_PRESET_profile = 'InvestMeProfile';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dgptopskq/image/upload';



class EditProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {

                FName: '',
                LName: '',
                Email: '',
                Address: '',
                PhoneNo: '',
                City: '',
                Country: '',                
                Gender: '',
                Story: '',

                ProfilePic: '',
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleProfileUpload = this.handleProfileUpload.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps() {
        if (this.props.user) {
            this.setState({
                user: {
                    FName: this.props.user.FName,
                    LName: this.props.user.LName,
                    Email: this.props.user.Email,
                    Address: this.props.user.Address,
                    PhoneNo: this.props.user.PhoneNo,
                    City: this.props.user.City,
                    Country: this.props.user.Country,
                    Gender: this.props.user.Gender,
                    Story: this.props.user.Story,

                    ProfilePic: this.props.user.ProfilePic
                }
            });
        }
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

    handleProfileUpload(files) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET_profile)
                .field('file', files[0]);

        const { user } = this.state;

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
            if (response) {
                if (response.body.secure_url !== '') {
                    this.setState({
                        user: {
                            ...user,
                            ProfilePic: response.body.public_id
                        }
                    });

                }
            }
            else {
                alert("Upload Failed");
            }
        });
    }


    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        console.log(user);

           dispatch(userActions.update(user));


    }

    render() {

        var { user } = this.state;

        return (
            <div class="container">
           
                <div class="row">
                    <div class="col-md-12 personal-info">
                        <form class="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                               
                                <div className="col-lg-3 profilepic" >

                                    <Dropzone
                                        onDrop={this.handleProfileUpload}
                                        accept="image/*"
                                        multiple={false}>
                                        {({ getRootProps, getInputProps }) => {
                                            return (
                                                <div className="Dropzone CardimageDropzone"
                                                    {...getRootProps()}
                                                >
                                                    <input {...getInputProps()} className="" />
                                                    {
                                                        <Img
                                                            cloudName={'dgptopskq'}
                                                            imageName={user.ProfilePic+".webp"}
                                                            fixed={{
                                                                height: 210,
                                                                width: 253
                                                            }}
                                                        />
                                                    }
                                                </div>
                                            )
                                        }}
                                    </Dropzone>
                                </div>



                            </div>
                            <div class="form-group">
                                <label className="col-lg-3 control-label">First name:</label>
                                <div className="col-lg-8">
                                    <input class="form-control" type="text" defaultValue='' value={user.FName} name="FName"  onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Last name:</label>
                                <div class="col-lg-8">
                                    <input class="form-control" type="text" defaultValue='' value={user.LName} name="LName" onChange={this.handleChange} />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-lg-3 control-label">Email:</label>
                                <div class="col-lg-8">
                                    <input class="form-control" type="text" defaultValue='' value={user.Email} name="Email" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label">PhoneNo:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" defaultValue='' value={user.PhoneNo} name="PhoneNo" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label">Address:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" defaultValue='' value={user.Address} name="Address" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label">City:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" defaultValue='' value={user.City} name="City" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label">Country:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" defaultValue='' value={user.Country} name="Country" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label">Gender:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" defaultValue='' value={user.Gender} name="Gender" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label">Story:</label>
                                <div class="col-md-8">
                                    <textarea class="form-control" type="text" defaultValue='' value={user.Story} name="Story" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label"></label>
                                <div class="col-md-8">
                                    <input type="submit" class="btn btn-primary" value="Save Changes" />
                                                                   </div>
                            </div>
                        </form>
                    </div>
                </div>
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


const connectedEditProfile = connect(mapStateToProps)(EditProfile);
export { connectedEditProfile as EditProfile };
