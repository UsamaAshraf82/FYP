import { returnConstants } from '../_constants';


     
export function returnInvestor(state = {}, action) {
    switch (action.type) {

        case returnConstants.INVESTOR_REQUEST:
            return {
                investorReturnLoading: true
            };
        case returnConstants.INVESTOR_SUCCESS:
            return {
                investorReturn: action.Investors,
                investorReturnLoaded: true
            };
        case returnConstants.INVESTOR_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}

