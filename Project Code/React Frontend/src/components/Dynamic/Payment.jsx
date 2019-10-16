import React from 'react';
import { connect } from 'react-redux';

import { campaignAction ,investmentAction} from '../../redux/_actions';

import '../../styles/Payment.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faCalendar, faCreditCard,faLock, faSortAmountUp} from '@fortawesome/free-solid-svg-icons';

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

class Payment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            payment: {
                Investment: '',
                trueAmount:'',
                email: '',
                card_number: '',
                EX_Date: '',
                cvc: ''

            },

            sharePercent:'0',
            adminshare: '0',
            submitted: false,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.amountChange = this.amountChange.bind(this);

    }
        handleChange(event) {
            const { name, value } = event.target;
            const { payment } = this.state;
            this.setState({
                payment: {
                    ...payment,
                    [name]: value
                }
            });
    }

    amountChange(event) {
        var { value } = event.target;
        const { payment } = this.state;

        const { campaign } = this.props;
        

        var fundNeeded = campaign.Fund - campaign.Investment ;

        if (value > fundNeeded) {
            value = fundNeeded;
        }
        var adminShare = value * 5 / 100;
        var trueamount = parseInt(value) + adminShare ;
        var percent = value / campaign.TotalCost * 100;
        
        this.setState({
            sharePercent: percent,
            adminshare: adminShare,
                payment: {
                    ...payment,

                    trueAmount: trueamount+"",
                    Investment: value,
            }
        });

        }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { payment } = this.state;
        const { dispatch } = this.props;
        const { campaignId } = this.props.match.params;

        payment.campaignId = campaignId;

        console.log(payment);
        if (payment.email &&
            payment.card_number &&
            payment.cvc &&
            payment.EX_Date &&
            payment.Investment
        ) {

            dispatch(investmentAction.processInvestment(payment))
        }
    }
    componentDidMount() {
        const { campaignId } = this.props.match.params
        this.props.dispatch(
            campaignAction.getByID(campaignId)
        );
    }


    render() {
        const { payment, sharePercent, adminshare } = this.state;
        const { campaign, loaded } = this.props;
        return (
            <div className="row">
                
            <Col md='6'>
                 <Container className="App">
                        <h2>Payment Details</h2>
                        <Form onSubmit={this.handleSubmit} className="form">

                            <Col>
                                <FormGroup>
                                    <Label><FontAwesomeIcon icon={faSortAmountUp} />  Amount</Label>
                                    <Input
                                        type="number"
                                        name="Investment"
                                        id="amount"
                                        onChange={this.amountChange}
                                        value={payment.Investment}
                                        placeholder="10000"
                                    />
                                </FormGroup>


                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label><FontAwesomeIcon icon={faSortAmountUp} />  Amount Deducted</Label>
                                    <Input
                                        type="number"
                                        name="trueAmount"
                                        id="trueAmount"
                                        disabled
                                        value={payment.trueAmount}
                                        placeholder="0"
                                    />
                                </FormGroup>


                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label><FontAwesomeIcon icon={faUser} />  Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        onChange={this.handleChange}
                                        value={payment.email}
                                        placeholder="myemail@email.com"
                                    />
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label><FontAwesomeIcon icon={faCreditCard} />  Card Number</Label>
                                    <Input
                                        type="text"
                                        name="card_number"
                                        id="card_No"
                                        onChange={this.handleChange}

                                        value={payment.card_number}
                                        placeholder="xxxx xxxx xxxx xxxx"
                                    />
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label><FontAwesomeIcon icon={faCalendar} />  Expire Date</Label>
                                    <Input
                                        type="text"
                                        name="EX_Date"
                                        id="EX_Date"
                                        onChange={this.handleChange}

                                        value={payment.EX_Date}
                                        placeholder="MM/YYYY"
                                    />
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label><FontAwesomeIcon icon={faLock} />  CVC</Label>
                                    <Input
                                        type="text"
                                        name="cvc"
                                        id="cvc"
                                        onChange={this.handleChange}

                                        value={payment.cvc}
                                        placeholder="CVC"
                                    />
                                </FormGroup>
                            </Col>

                            <Button >Payment</Button>
                    </Form>
                </Container>
                    
            </Col>
             <Col md='5'>
                    <Container className="App">
                        <h2>Campaign Details</h2>
                        {loaded &&
                            <div>
                            <Col>
                                <FormGroup>
                                    <Label>Camapign Name</Label>
                                    <Input
                                        type="text"
                                        value={campaign.Title}
                                        disabled
                                    />
                                </FormGroup>
                            </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>Total Cost of Project</Label>
                                        <Input
                                            type="text"
                                            value={campaign.TotalCost}
                                            disabled
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>Total Funds Needed</Label>
                                        <Input
                                            type="text"
                                            value={campaign.Fund}
                                            disabled
                                        />
                                    </FormGroup>
                                </Col> <Col>
                                    <FormGroup>
                                        <Label>Investment Needed</Label>
                                        <Input
                                            type="text"
                                            value={campaign.Fund - campaign.Investment}
                                            disabled
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>Share Percent</Label>
                                        <Input
                                            type="text"
                                            value={sharePercent + " %"}
                                            disabled
                                        />
                                    </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Admin Share : 5%</Label>
                                    <Input
                                        type="text"
                                        value={adminshare}
                                        disabled
                                    />
                                </FormGroup>
                            </Col>
                        
                            </div>
                        }
                    </Container>
                </Col>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loaded, campaign } = state.campaigns
    return {
        loaded,
        campaign
    }
}


const connectedPayment = connect(mapStateToProps)(Payment);
export { connectedPayment as Payment };
