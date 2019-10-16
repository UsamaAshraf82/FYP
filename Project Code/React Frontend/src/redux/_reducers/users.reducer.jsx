import { userConstants } from '../_constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETALL_SUCCESS:
            return {
                items: action.users
            };
        case userConstants.GETALL_FAILURE:
            return {
                error: action.error
            };

        case userConstants.GETBYID_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETBYID_SUCCESS:
            return {
                user: action.user,
                loaded: true
            };
        case userConstants.GETBYID_FAILURE:
            return {
                error: action.error
            };

        case userConstants.UPDATE_REQUEST:
            return {
                UserReq: action.user
            };
        case userConstants.UPDATE_SUCCESS:
            return {
                user: action.user,
                loaded: true
            };
        case userConstants.UPDATE_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}



export function userStories(state = {}, action) {
    switch (action.type) {

        case userConstants.STORIES_REQUEST:
            return {
                StoriesLoading: true
            };
        case userConstants.STORIES_SUCCESS:
            return {
                StoriesLoaded: true,
                Stories: action.Stories
            };
        case userConstants.STORIES_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}

export function registration(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return { registering: true };
        case userConstants.REGISTER_SUCCESS:
            return {};
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}