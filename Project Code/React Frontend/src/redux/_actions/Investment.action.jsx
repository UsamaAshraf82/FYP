import { investmentConstants } from '../_constants';
import { investmentServices } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const investmentAction = {
    processInvestment
};

function processInvestment(payment) {
    return dispatch => {
        dispatch(request());
        var campaignID = payment.campaignId
        var user = JSON.parse(localStorage.getItem('user'));
        payment.userID = user.UserId;
        investmentServices.processInvestment(payment)
                .then(
                     payment => {
                        dispatch(success());
                        history.push('/');
                        alert('Investment Successful')
                         dispatch(alertActions.success('Investment successful'));
                         window.location.href = '/campaign/' + campaignID ;
                         },
                error => {

                    alert('Something Went Wrong')
                        dispatch(failure(error));
                        dispatch(alertActions.error(error));
                    }
                );
    };

    function request() { return { type: investmentConstants.INVESTMENT_REQUEST } }
    function success() { return { type: investmentConstants.INVESTMENT_SUCCESS} }
    function failure(error) { return { type: investmentConstants.INVESTMENT_FAILURE, error } }
}

