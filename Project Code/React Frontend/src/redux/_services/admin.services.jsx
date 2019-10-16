import { authHeader,config } from '../_helpers';

export const adminService = {
    login,
    logout,
    getPendingCampaign,
    dashboardDetails,
    Accepted,
    Rejected,
    AdminUsersDetails,
    AdminUserDetails,
    GetCampaign,
    AdminInvestedCampaignView,
    MonthlyReport
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    
    return fetch(config.apiUrl +'api/admins/authenticate', requestOptions)
    
        .then(handleResponse, handleError)
        .then(admin => {
            // login successful if there's a jwt token in the response
            if (admin && admin.Token) {
                localStorage.removeItem('user');
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('admin', JSON.stringify(admin));
            }

            return admin;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('admin');
}

function getPendingCampaign() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/admins/PendingCampaign', requestOptions).then(handleResponse, handleError);
}

function dashboardDetails() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/admins/DashboardDetails', requestOptions).then(handleResponse, handleError);
}

function GetCampaign() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/admins/Campaigns', requestOptions).then(handleResponse, handleError);
}

function  Accepted(CampaignId) {
    const requestOptions = {
        method: 'PATCH',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/admins/Accepted_'+CampaignId, requestOptions).then(handleResponse, handleError);
}

function Rejected(CampaignId) {
    const requestOptions = {
        method: 'PATCH',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/admins/Rejected_'+CampaignId, requestOptions).then(handleResponse, handleError);
}
function AdminUserDetails(userId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/admins/AdminUserDetails_'+userId, requestOptions).then(handleResponse, handleError);
}

function AdminUsersDetails() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/admins/AdminUserDetails', requestOptions).then(handleResponse, handleError);
}
function AdminInvestedCampaignView(campaignId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/admins/AdminInvestedCampaignView_'+campaignId, requestOptions).then(handleResponse, handleError);
}
function MonthlyReport() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl +'api/admins/MonthlyReport', requestOptions).then(handleResponse, handleError);
}



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