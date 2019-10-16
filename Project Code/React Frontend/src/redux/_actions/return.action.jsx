import { returnConstants } from '../_constants';
import { returnServices } from '../_services';
import { alertActions } from '.';

export const returnAction = {
    Investors,
    processReturn
};

function Investors(campaignID) {
    return dispatch => {
        dispatch(request());

        returnServices.Investors(campaignID)
                .then(
                    Investors => {
                        dispatch(success(Investors));
                      
                         },
                error => {
                        dispatch(failure(error));
                        dispatch(alertActions.error(error));
                    }
                );
    };

    function request(campaignID) { return { type: returnConstants.INVESTOR_REQUEST,campaignID } }
    function success(Investors) { return { type: returnConstants.INVESTOR_SUCCESS,Investors} }
    function failure(error) { return { type: returnConstants.INVESTOR_FAILURE, error } }
}

function processReturn(payment) {
    return dispatch => {
        dispatch(request(payment));

        returnServices.processReturn(payment)
                .then(
                    sucess => {
                        dispatch(success(sucess));
                      
                        alert('ReturnInvestment Successful')
                         dispatch(alertActions.success('Investment successful'));
                         window.location.href = '/Dashboard' ;
                         },
                error => {
                        dispatch(failure(error));
                        dispatch(alertActions.error(error));
                    }
                );
    };

    function request(campaignID) { return { type: returnConstants.RETURNINVESTMENT_REQUEST,campaignID } }
    function success(Investors) { return { type: returnConstants.RETURNINVESTMENT_SUCCESS,Investors} }
    function failure(error) { return { type: returnConstants.RETURNINVESTMENT_FAILURE, error } }
}


