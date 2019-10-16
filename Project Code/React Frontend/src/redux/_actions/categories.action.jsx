import { categoriesConstants } from '../_constants';
import { categoriesServices } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const categoriesAction = {
    GetAll,
    Top
};


function GetAll() {
    return dispatch => {
        dispatch(request());

        categoriesServices.GetAll()
            .then(
                categories => {
                    dispatch(success(categories));
                 
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };
    function request() { return { type: categoriesConstants.GETALL_REQUEST} }
    function success(categories) { return { type: categoriesConstants.GETALL_SUCCESS, categories } }
    function failure(error) { return { type: categoriesConstants.GETALL_FAILURE, error } }
}

function Top() {
    return dispatch => {
        dispatch(request());

        categoriesServices.Top()
            .then(
                categories => {
                    dispatch(success(categories));

                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };
    function request() { return { type: categoriesConstants.TOP_REQUEST } }
    function success(categories) { return { type: categoriesConstants.TOP_SUCCESS, categories } }
    function failure(error) { return { type: categoriesConstants.TOP_FAILURE, error } }
}


