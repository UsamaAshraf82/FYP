import { adminConstants } from '../_constants';
import { adminService, campaignServices } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
export const adminActions = {
    login,
    logout,
    GetPendingCampaign,
    dashboardDetails,
    Accepted,
    Rejected,
    AdminUsersDetails,
    AdminUserDetails,
    GetCampaign,
    CampaignInvestedGetByUserID,
    CampaignGetByUserID,
    AdminInvestedCampaignView,
    MonthlyReport
};
function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        adminService.login(username, password)
            .then(
                admin => {
                    dispatch(success(admin));
                    history.push('/');
                    alert("Login Sucessful");
                    window.location.href = '/admin';
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                    alert("Invalid Username or Password");
                }
            );
    };
    function request(admin) { return { type: adminConstants.LOGIN_REQUEST, admin } }
    function success(admin) { return { type: adminConstants.LOGIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.LOGIN_FAILURE, error } }
}
function logout() {
    adminService.logout();
    return { type: adminConstants.LOGOUT };
}
function GetPendingCampaign() {
    return dispatch => {
        dispatch(request());
        adminService.getPendingCampaign()
            .then(
                pcampaigns => {
                    dispatch(success(pcampaigns));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request() { return { type: adminConstants.GETPENDINGCAMPAIGN_REQUEST } }
    function success(campaigns) { return { type: adminConstants.GETPENDINGCAMPAIGN_SUCCESS, campaigns } }
    function failure(error) { return { type: adminConstants.GETPENDINGCAMPAIGN_FAILURE, error } }
}
function dashboardDetails() {
    return dispatch => {
        dispatch(request());
        adminService.dashboardDetails()
            .then(
                campaigns => {
                    dispatch(success(campaigns));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request() { return { type: adminConstants.DASHBOARDDETAIL_REQUEST } }
    function success(campaigns) { return { type: adminConstants.DASHBOARDDETAIL_SUCCESS, campaigns } }
    function failure(error) { return { type: adminConstants.DASHBOARDDETAIL_FAILURE, error } }
}
function GetCampaign() {
    return dispatch => {
        dispatch(request());
        adminService.GetCampaign()
            .then(
                campaigns => {
                    dispatch(success(campaigns));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request() { return { type: adminConstants.CAMPAIGNS_REQUEST } }
    function success(campaigns) { return { type: adminConstants.CAMPAIGNS_SUCCESS, campaigns } }
    function failure(error) { return { type: adminConstants.CAMPAIGNS_FAILURE, error } }
}
function Accepted(CampaignId) {
    return dispatch => {
        dispatch(request(CampaignId));
        adminService.Accepted(CampaignId)
            .then(
                campaigns => {
                    dispatch(success(campaigns));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(CampaignId) { return { type: adminConstants.ACCEPTED_REQUEST, CampaignId } }
    function success(campaigns) { return { type: adminConstants.ACCEPTED_SUCCESS, campaigns } }
    function failure(error) { return { type: adminConstants.ACCEPTED_FAILURE, error } }
}
function Rejected(CampaignId) {
    return dispatch => {
        dispatch(request(CampaignId));
        adminService.Rejected(CampaignId)
            .then(
                campaigns => {
                    dispatch(success(campaigns));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(CampaignId) { return { type: adminConstants.REJECTED_REQUEST, CampaignId } }
    function success(campaigns) { return { type: adminConstants.REJECTED_SUCCESS, campaigns } }
    function failure(error) { return { type: adminConstants.REJECTED_FAILURE, error } }
}
function AdminUserDetails(userId) {
    return dispatch => {
        dispatch(request(userId));
        adminService.AdminUserDetails(userId)
            .then(
                puser => {
                    dispatch(success(puser));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request() { return { type: adminConstants.USERDETAILS_REQUEST } }
    function success(puser) { return { type: adminConstants.USERDETAILS_SUCCESS, puser } }
    function failure(error) { return { type: adminConstants.USERDETAILS_FAILURE, error } }
}
function AdminUsersDetails() {
    return dispatch => {
        dispatch(request());
        adminService.AdminUsersDetails()
            .then(
                pusers => {
                    dispatch(success(pusers));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request() { return { type: adminConstants.USERSDETAILS_REQUEST } }
    function success(pusers) { return { type: adminConstants.USERSDETAILS_SUCCESS, pusers } }
    function failure(error) { return { type: adminConstants.USERSDETAILS_FAILURE, error } }
}
function CampaignGetByUserID(UserId) {
    return dispatch => {
        dispatch(request(UserId));
        campaignServices.GetByUserID(UserId)
            .then(
                campaigns => {
                    dispatch(success(campaigns));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(UserId) { return { type: adminConstants.CAMPAIGN_GETBYUSERID_REQUEST, UserId } }
    function success(campaigns) { return { type: adminConstants.CAMPAIGN_GETBYUSERID_SUCCESS, campaigns } }
    function failure(error) { return { type: adminConstants.CAMPAIGN_GETBYUSERID_FAILURE, error } }
}
function CampaignInvestedGetByUserID(UserId) {
    return dispatch => {
        dispatch(request(UserId));
        campaignServices.GetInvestedCampaign(UserId)
            .then(
                campaigns => {
                    dispatch(success(campaigns));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(UserId) { return { type: adminConstants.CAMPAIGN_INVESTED_GETBYUSERID_REQUEST, UserId } }
    function success(campaigns) { return { type: adminConstants.CAMPAIGN_INVESTED_GETBYUSERID_SUCCESS, campaigns } }
    function failure(error) { return { type: adminConstants.CAMPAIGN_INVESTED_GETBYUSERID_FAILURE, error } }
}
function AdminInvestedCampaignView(campaignId) {
    return dispatch => {
        dispatch(request(campaignId));
        adminService.AdminInvestedCampaignView(campaignId)
            .then(
                campaigns => {
                    dispatch(success(campaigns));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(UserId) { return { type: adminConstants.CAMPAIGN_INVESTOR_REQUEST, UserId } }
    function success(campaigns) { return { type: adminConstants.CAMPAIGN_INVESTOR_SUCCESS, campaigns } }
    function failure(error) { return { type: adminConstants.CAMPAIGN_INVESTOR_FAILURE, error } }
}
function MonthlyReport() {
    return dispatch => {
        dispatch(request());
        adminService.MonthlyReport()
            .then(
                months => {
                    dispatch(success(months));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request() { return { type: adminConstants.MONTHLYREPORT_REQUEST } }
    function success(months) { return { type: adminConstants.MONTHLYREPORT_SUCCESS, months } }
    function failure(error) { return { type: adminConstants.MONTHLYREPORT_FAILURE, error } }
}