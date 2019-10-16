import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    getByID,
    Stories,
    update,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                    alert("Login Sucessful");
                    window.location.href = '/';
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                    alert("Invalid ID or Password");
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                    alert("Registration successful");
                    window.location.href = '/Login'
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                    alert("Email Already Taken");
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getByID(userID) {
    return dispatch => {
        dispatch(request(userID));

        userService.getById(userID)
            .then(
                user => {
                    dispatch(success(user));
                 },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(userID) { return { type: userConstants.GETBYID_REQUEST, userID } }
    function success(user) { return { type: userConstants.GETBYID_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GETBYID_FAILURE, error } }
}


function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}


function Stories() {
    return dispatch => {
        dispatch(request());

        userService.Stories()
            .then(
            Stories => dispatch(success(Stories)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: userConstants.STORIES_REQUEST } }
    function success(Stories) { return { type: userConstants.STORIES_SUCCESS, Stories } }
    function failure(error) { return { type: userConstants.STORIES_FAILURE, error } }
}

function update(user) {
    return dispatch => {
        var temp = JSON.parse(localStorage.getItem('user'));
        user.UserId = temp.UserId;

        dispatch(request(user));
        userService.update(user)
            .then(
                user => {
                    dispatch(success(user));
                    alert("User Details Updated");
                },
                error => {
                    dispatch(failure(error));
                    alert("User Details Failed");
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.UPDATE_REQUEST, user } }
    function success(user) { return { type: userConstants.UPDATE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.UPDATE_FAILURE, error } }

}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => {
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}