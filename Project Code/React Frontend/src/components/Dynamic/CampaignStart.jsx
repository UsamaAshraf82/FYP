import React from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../styles/NewCompaign.scss';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import { categoriesAction, campaignAction } from '../../redux/_actions';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import Img from 'react-cloudinary-lazy-image';

const CLOUDINARY_UPLOAD_PRESET_header = 'InvestMeHeader';
const CLOUDINARY_UPLOAD_PRESET_card = 'InvestMeCard';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dgptopskq/image/upload';


class CampaignStart extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            campaign: {

                Title: '',
                Stage: '',
                CategoryId: '',

                Tag1: '',
                Tag2: '',
                Tag3: '',

                Summary: '',
                Discription: '',

                City: '',
                Country: '',


                TotalCost: '',
                CurrencyUnit : '',
                Fund: '',

                EstimatedFirstProfit: '',
                NeedFundBefore: '',

                Cardimage: '',
                Headerimage: ''

            },
            submitted: false,
            loggedin: true,
            tabIndex: 0


        };

        this.handleChange = this.handleChange.bind(this);
        this.quillHandleChange = this.quillHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCardImageDrop = this.onCardImageDrop.bind(this);
        this.onHeaderImageDrop = this.onHeaderImageDrop.bind(this);
        this.handleCardImageUpload = this.handleCardImageUpload.bind(this);
        this.handleHeaderImageUpload = this.handleHeaderImageUpload.bind(this);
    }



    componentDidMount() {

        var user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.props.dispatch(
                categoriesAction.GetAll()
            );
        }
        else {

            this.setState({ loggedin:false })
        }
    }

    onHeaderImageDrop(files) {
        this.setState({
            uploadedHeaderFile: files[0]
        });

        this.handleHeaderImageUpload(files[0]);
    }

    onCardImageDrop(files) {
        this.setState({
            uploadedCardFile: files[0]
        });

        this.handleCardImageUpload(files[0]);

    }

    handleHeaderImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET_header)
            .field('file', file);

        const { campaign } = this.state;

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            this.setState({
                campaign: {
                    ...campaign,
                    Headerimage: response.body.public_id
                }
            });
        });
    }

    handleCardImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET_card)
            .field('file', file);

        const { campaign } = this.state;

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    campaign: {
                        ...campaign,
                        Cardimage: response.body.public_id
                    }
                });
            
            }
        });
    }


    handleChange(event) {
        const { name, value } = event.target;
        const { campaign } = this.state;
        this.setState({
            campaign: {
                ...campaign,
                [name]: value
            }
        });
    }

    quillHandleChange(value) {
        const { campaign } = this.state;
        this.setState({
            campaign: {
                ...campaign,
                Discription: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { campaign } = this.state;
        const { dispatch } = this.props;
        console.log(campaign);
        if (campaign.Title &&
            campaign.CategoryId &&
            campaign.Summary &&
            campaign.Discription &&
            campaign.Fund &&
            campaign.TotalCost &&
            campaign.EstimatedFirstProfit) {

            dispatch(campaignAction.createNew(campaign));
        }

    }

    render() {

        var { campaign, loggedin } = this.state
        const { categoriesloaded, categories } = this.props
        return (
            <div>
                {!loggedin && <p>Dear User : You Need to Login In to Continue</p>}
                {loggedin &&
                    <div className="row ">
                        <Tabs className=" col-md-12 Project_Detail" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                            <TabList>
                                <Tab><button>Over View</button></Tab>
                                <Tab><button>Project Details</button></Tab>
                                <Tab><button>Funding Details</button></Tab>
                                <Tab><button>Gallery</button></Tab>
                            
                            </TabList>

                            <form onSubmit={this.handleSubmit} className="form-style-5">

                                <TabPanel className="Details">
                                    <h2>Project OverView</h2>

                                    <fieldset>

                                        <div className="form-group frmgroup">
                                            <label for="job">Project Title</label>
                                            <input type="text" name="Title" id="title" value={campaign.Title} onChange={this.handleChange} required placeholder="Project Title *" />
                                        </div>


                                        <div className="form-group">
                                            <label for="job">Stage</label>

                                            <select id="StageID" name="Stage" value={campaign.Stage} onChange={this.handleChange}>
                                                <optgroup label="Select One Stage">
                                                    <option value="Adventure">Adventure</option>
                                                    <option value="Project Development">Project Development</option>
                                                    <option value="Shipping">Shiping</option>
                                                    <option value="Idea Conception">Idea Conception</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                        <div className="form-group ">
                                            <label for="job">Project Category</label>

                                            <select id="projectID" name="CategoryId" value={campaign.Category} onChange={this.handleChange}>
                                                <optgroup label="Select One Stage">
                                                    {categoriesloaded &&

                                                        categories.map((category) =>
                                                            <option value={category.CategoryId}>{category.Name}</option>

                                                        )
                                                    }


                                                </optgroup>
                                            </select>
                                        </div>

                                        <div className="form-group">

                                            <label for="job">Search Tag </label>

                                            <input className="col-md-3" type="text" name="Tag1" value={campaign.Tag1} onChange={this.handleChange} id="tag_1" required placeholder="Search Tag-1 *" />

                                            <input className="col-md-3" type="text" name="Tag2" value={campaign.Tag2} onChange={this.handleChange} id="tag_2" required placeholder="Search Tag-2 *" />
                                            <input className="col-md-3" type="text" name="Tag3" value={campaign.Tag3} onChange={this.handleChange} id="tag_3" required placeholder="Search Tag-3 *" />
                                        </div>
                                    </fieldset>
                                </TabPanel>

                                <TabPanel className="Details">

                                    <h2>About Project Details</h2>

                                    <div className="form-group">
                                        <label for="job">Summary</label>
                                        <textarea
                                            placeholder="Summary *"
                                            type="text"
                                            name="Summary"
                                            value={campaign.Summary}
                                            onChange={this.handleChange}
                                            id="Summary"
                                            required
                                        />
                                    </div>


                                    <div className="form-group">
                                        <label for="job">Discription</label>

                                        <ReactQuill

                                            value={campaign.Discription}
                                            onChange={this.quillHandleChange} />

                                    </div>


                                    <div className="form-group">
                                        <label for="job" id="City">City</label>
                                        <input className="col-md-4" type="text" name="City" value={campaign.City} onChange={this.handleChange} required />
                                    </div>
                                    <div className="form-group" id="Country">
                                        <label for="job">Country</label>
                                        <input className="col-md-4" type="text" name="Country" value={campaign.Country} onChange={this.handleChange} required />
                                    </div>

                                </TabPanel>
                                <TabPanel className="Details">
                                    <h2>Funding Details</h2>
                                    <div className="form-group">
                                        <label for="job">Total Cost of Project</label>
                                        <input className="col-md-5" type="number" name="TotalCost" value={campaign.TotalCost} onChange={this.handleChange} id="funds" placeholder="Cost of Project" required />
                                        <select className="col-md-3" id="currency" name="CurrencyUnit" value={campaign.CurrencyUnit} onChange={this.handleChange}>
                                            <option value="PakRupee">PKR</option>
                                            <option value="Dollar">USD</option>
                                            <option value="Euro">EURO</option>

                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label for="job">Funds Needed</label>
                                        <input className="col-md-5" type="number" name="Fund" value={campaign.Fund} onChange={this.handleChange} placeholder="Funds Needed" id="funds" required />
                                        <select name="CurrencyUnit" value={campaign.CurrencyUnit} onChange={this.handleChange} className="col-md-3" id="funding">
                                            <option value="PakRupee">PKR</option>
                                            <option value="Dollar">USD</option>
                                            <option value="Euro">EURO</option>
                                        </select>
                                    </div>


                                    <div className="form-group ">
                                        <label for="job">Need Funds Before</label>
                                        <input className="col-md-5" type="date" name="NeedFundBefore" value={campaign.NeedFundBefore} onChange={this.handleChange} required />
                                    </div>
                                    <div className="form-group " id="duration">
                                        <label for="job">Estimated First Profit</label>
                                        <input type="date" name="EstimatedFirstProfit" value={campaign.EstimatedFirstProfit} onChange={this.handleChange} required />
                                    </div>


                                </TabPanel>


                                <TabPanel className="Details">
                                    <h2>Insert Image</h2>

                                    <div className="form-group">
                                        <label for="job">Card Image</label>
                                        <Dropzone
                                            onDrop={this.onCardImageDrop}
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
                                                                imageName={campaign.Cardimage + ".webp"}
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

                                    <div className="form-group">
                                        <label for="job">Header Image</label>
                                        <Dropzone
                                            onDrop={this.onHeaderImageDrop}
                                            accept="image/*"
                                            multiple={false}>
                                            {({ getRootProps, getInputProps }) => {
                                                return (
                                                    <div className="Dropzone HeaderimageDropzone"
                                                        {...getRootProps()}
                                                    >
                                                        <input {...getInputProps()} className="" />
                                                        {<Img
                                                            cloudName={'dgptopskq'}
                                                            imageName={campaign.Headerimage + ".webp"}
                                                            fixed={{
                                                                height: 350,
                                                                width: 640
                                                            }}
                                                        />
                                                        }
                                                    </div>
                                                )
                                            }}
                                        </Dropzone>

                                    </div>

                                    <input type="submit" value="Save" />

                                </TabPanel>
                            </form>
                        </Tabs>

                    </div>
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { categoriesloaded, categories } = state.categories
    return {
        categoriesloaded,
        categories
    };
}

const connectedCampaignStart = connect(mapStateToProps)(CampaignStart);
export { connectedCampaignStart as CampaignStart };
