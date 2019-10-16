import React from 'react';
import { connect } from 'react-redux';
import '../../styles/ReturnPayment.scss';

import { returnAction ,campaignAction} from '../../redux/_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faCreditCard, faLock, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
class ReturnPayment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            payment : {
                Amount:'',
                Email:'',
                card_number:'',
                EX_Date:'',
                cvc:''
            },

          
            submitted: false,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.amountChange = this.amountChange.bind(this);

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


    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { payment } = this.state;
        const { dispatch } = this.props;
        const { campaignId } = this.props.match.params;

        payment.campaignId = campaignId;

        if (payment.Amount &&
            payment.Email &&
            payment.card_number &&
            payment.EX_Date
        ) 
        {
                 dispatch(returnAction.processReturn(payment))
        }
    }
    componentDidMount() {
        const { campaignId } = this.props.match.params

        this.props.dispatch(
            campaignAction.getByID(campaignId)
        );
        this.props.dispatch(
            returnAction.Investors(campaignId)
        );
    }



    render() {
        var { payment } = this.state;
        const { campaign, loaded, investorReturn, investorReturnLoaded} = this.props;
        
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
                                        name="Amount"
                                        id="amount"
                                        value={payment.Amount}
                                        onChange={this.handleChange}
                                    
                                    />
                                </FormGroup>
                            </Col>
                            {loaded &&
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
                            }
                           
                            <Col>
                                <FormGroup>
                                    <Label><FontAwesomeIcon icon={faUser} />  Email</Label>
                                    <Input
                                        type="email"
                                        name="Email"
                                        id="exampleEmail"
                                        onChange={this.handleChange}
                                        value={payment.Email}
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
                                    />
                                </FormGroup>
                            </Col>
                            <Button >Payment</Button>
                        </Form>
                    </Container>
                </Col>

                <Col md='6'>
                    <div className="investor">
                        <h2 className="heading">Investors List</h2>
                        { investorReturnLoaded && loaded && investorReturn.map(investor=>(
                        <Container className="App">
                    
                            <Form  className="form">
                                <Col>
                                    <FormGroup>
                                        <Label> name</Label>
                                        <Input
                                            value={investor.FullName}
                                            disabled
                                        />
                                    </FormGroup>
                                </Col>
                                
                                <Col>
                                    <FormGroup>
                                        <Label>Share Percentage</Label>
                                        <Input
                                            value={investor.SumofInvestment / campaign.TotalCost * 100}
                                            disabled
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>Amount</Label>
                                        
                                        <Input
                                            value={investor.SumofInvestment / campaign.TotalCost  *payment.Amount}
                                            disabled
                                        />
                                    </FormGroup>
                                </Col>
                            </Form>
                       
                        </Container>
                        ))}
                    </div>
                </Col>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loaded, campaign } = state.campaigns;
    const { investorReturn,investorReturnLoaded}= state.returnInvestor;
    return {
        loaded,
        campaign,
        investorReturn,
        investorReturnLoaded
    }
}


const connectedPayment = connect(mapStateToProps)(ReturnPayment);
export { connectedPayment as ReturnPayment };
