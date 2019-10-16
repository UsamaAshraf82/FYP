import { categoriesConstants } from '../_constants';

export function categories(state = {}, action) {
    switch (action.type) {
        case categoriesConstants.GETALL_REQUEST:
            return {
                categoriesloading: true
            };
        case categoriesConstants.GETALL_SUCCESS:
            return {
                categoriesloaded: true,
                categories: action.categories
            };
        case categoriesConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}


export function categoriesTop(state = {}, action) {
    switch (action.type) {
        case categoriesConstants.TOP_REQUEST:
            return {
                loading: true
            };
        case categoriesConstants.TOP_SUCCESS:
            return {
                loaded: true,
                categories: action.categories
            };
        case categoriesConstants.TOP_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
