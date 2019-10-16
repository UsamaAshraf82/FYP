import { campaignConstants } from '../_constants';
import { campaignServices } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const campaignAction = {
    createNew,
    getByID,
    NewCampaigns,
    TrendingCampaigns,
    visit,
    GetByUserID,
    GetInvestedCampaign,
    GetByCategory
};

function createNew(campaign) {
    return dispatch => {
        dispatch(request(campaign));
        var user = JSON.parse(localStorage.getItem('user'));
        campaign.userID = user.UserId;
            campaignServices.createNew(campaign)
                .then(
                    campaign => {
                        dispatch(success(campaign));
                        history.push('/');
                        alert('Campaign Successful')
                        dispatch(alertActions.success('Campaign successful'));
                        window.location.href = '/';
                                            },
                error => {

                    alert('Something Went Wrong')
                        dispatch(failure(error));
                        dispatch(alertActions.error(error));
                    }
                );
    };

    function request(campaign) { return { type: campaignConstants.CREATE_REQUEST, campaign } }
    function success(campaign) { return { type: campaignConstants.CREATE_SUCCESS, campaign } }
    function failure(error) { return { type: campaignConstants.CREATE_FAILURE, error } }
}


/*function GetByUserID() {
    return dispatch => {
        var user = JSON.parse(localStorage.getItem('user'));
        dispatch(request(user.UserId));
        campaignServices.GetByUserID(user.UserId)
            .then(
            campaigns => {
                dispatch(success(campaigns));
                    },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(UserId) { return { type: campaignConstants.GETBYUSERID_REQUEST, UserId } }
    function success(campaigns) { return { type: campaignConstants.GETBYUSERID_SUCCESS, campaigns } }
    function failure(error) { return { type: campaignConstants.GETBYUSERID_FAILURE, error } }
}*/

function GetByUserID(UserId) {
    return dispatch => {
  
        dispatch(request(UserId));
        campaignServices.GetByUserID(UserId)
            .then(
                campaigns => {
                    dispatch(success(campaigns));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(UserId) { return { type: campaignConstants.GETBYUSERID_REQUEST, UserId } }
    function success(campaigns) { return { type: campaignConstants.GETBYUSERID_SUCCESS, campaigns } }
    function failure(error) { return { type: campaignConstants.GETBYUSERID_FAILURE, error } }
}

function getByID(campaignID) {
    return dispatch => {
        dispatch(request({ campaignID }));

        campaignServices.getById(campaignID)
            .then(
            campaign => {
                dispatch(success(campaign));
            },
            error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
        );
    };
    function request(campaignID) { return { type: campaignConstants.GETBYID_REQUEST, campaignID } }
    function success(campaign) { return { type: campaignConstants.GETBYID_SUCCESS, campaign } }
    function failure(error) { return { type: campaignConstants.GETBYID_FAILURE, error } }
}

function GetInvestedCampaign(UserId) {
    return dispatch => {
        dispatch(request({ UserId }));

        campaignServices.GetInvestedCampaign(UserId)
            .then(
                campaigns => {
                    dispatch(success(campaigns));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };
    function request(UserId) { return { type: campaignConstants.GETINVESTEDCAMPAIGN_REQUEST, UserId } }
    function success(campaigns) { return { type: campaignConstants.GETINVESTEDCAMPAIGN_SUCCESS, campaigns } }
    function failure(error) { return { type: campaignConstants.GETINVESTEDCAMPAIGN_FAILURE, error } }
}

function visit(campaignID){
    return dispatch => {
        dispatch(request({ campaignID }));

        campaignServices.visit(campaignID)
            .then(
                campaign => {
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };
    function request(campaignID) { return { type: campaignConstants.VISIT_REQUEST, campaignID } }
    function success() { return { type: campaignConstants.VISIT_SUCCESS } }
    function failure(error) { return { type: campaignConstants.VISIT_FAILURE, error } }
}

function NewCampaigns() {
    return dispatch => {
        dispatch(request());

        campaignServices.NewCampaigns()
            .then(
            NewCampaigns => dispatch(success(NewCampaigns)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: campaignConstants.NEW_CAMPAIGN_REQUEST } }
    function success(NewCampaigns) { return { type: campaignConstants.NEW_CAMPAIGN_SUCCESS, NewCampaigns } }
    function failure(error) { return { type: campaignConstants.NEW_CAMPAIGN_FAILURE, error } }
}

function TrendingCampaigns() {
    return dispatch => {
        dispatch(request());

        campaignServices.TrendingCampaigns()
            .then(
            TrendingCampaigns => dispatch(success(TrendingCampaigns)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: campaignConstants.TRENDING_CAMPAIGN_REQUEST } }
    function success(TrendingCampaigns) { return { type: campaignConstants.TRENDING_CAMPAIGN_SUCCESS, TrendingCampaigns } }
    function failure(error) { return { type: campaignConstants.TRENDING_CAMPAIGN_FAILURE, error } }
}

function GetByCategory(id) {
    return dispatch => {
        dispatch(request(id));

        campaignServices.GetByCategory(id)
            .then(
                Campaign => {
                    dispatch(success(Campaign))
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: campaignConstants.GETBYCATEGORY_REQUEST } }
    function success(Campaign) { return { type: campaignConstants.GETBYCATEGORY_SUCCESS, Campaign } }
    function failure(error) { return { type: campaignConstants.GETBYCATEGORY_FAILURE, error } }
}

