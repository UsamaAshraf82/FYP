import { authHeader ,config} from '../_helpers';

export const campaignServices = {
    createNew,
    getById,
    NewCampaigns,
    TrendingCampaigns,
    visit,
    GetByUserID,
    GetInvestedCampaign,
    GetByCategory
//    update,
//    delete: _delete
};

function createNew(campaign) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(campaign)
        
    };

    return fetch(config.apiUrl + 'api/campaigns/Create', requestOptions).then(handleResponse, handleError);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/campaigns/campaign_' + id, requestOptions).then(handleResponse, handleError);
}

function GetInvestedCampaign(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/campaigns/investedcampaign_' + id, requestOptions).then(handleResponse, handleError);
}

function visit(id) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/campaigns/visit_' + id, requestOptions).then(handleResponse, handleError);
}

function GetByUserID(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/campaigns/userID_' + id, requestOptions).then(handleResponse, handleError);
}

function NewCampaigns() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/campaigns/NewCampaigns', requestOptions).then(handleResponse, handleError);
}

function TrendingCampaigns() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/campaigns/TrendingCampaigns', requestOptions).then(handleResponse, handleError);
}

function GetByCategory(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/campaigns/GetByCategory_'+id, requestOptions).then(handleResponse, handleError);
}




/*
function login(Email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email, password })
    };
    
    return fetch('api/users/authenticate', requestOptions)
    
        .then(handleResponse, handleError)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user && user.Token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('api/users', requestOptions).then(handleResponse, handleError);
}



function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch( 'api/users/register', requestOptions).then(handleResponse, handleError);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('api/users/' + user.id, requestOptions).then(handleResponse, handleError);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch('api/users/' + id, requestOptions).then(handleResponse, handleError);
}
*/

function handleResponse(response) {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            // return json if it was returned in the response
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
            } else {
                resolve();
            }
        } else {
            // return error message from response body
            response.text().then(text => reject(text));
        }
    });
}

function handleError(error) {
    return Promise.reject(error && error.message);
}