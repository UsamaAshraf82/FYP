import { adminConstants } from '../_constants';

export function adminCampaign(state = {}, action) {
    switch (action.type) {

        case adminConstants.DASHBOARDDETAIL_REQUEST:
            return {
                loading: true
            };
        case adminConstants.DASHBOARDDETAIL_SUCCESS:
            return {
                campaigns: action.campaigns,
                loaded: true
            };
        case adminConstants.DASHBOARDDETAIL_FAILURE:
            return {
                error: action.error
            };


        case adminConstants.CAMPAIGNS_REQUEST:
            return {
                loading: true
            };
        case adminConstants.CAMPAIGNS_SUCCESS:
            return {
                campaigns: action.campaigns,
                loaded: true
            };
        case adminConstants.CAMPAIGNS_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}


export function adminPCampaign(state = {}, action) {
    switch (action.type) {

        case adminConstants.GETPENDINGCAMPAIGN_REQUEST:
            return {
                loading: true
            };
        case adminConstants.GETPENDINGCAMPAIGN_SUCCESS:
            return {
                pcampaigns: action.campaigns,
                ploaded: true
            };
        case adminConstants.GETPENDINGCAMPAIGN_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}

export function adminUser(state = {}, action) {
    switch (action.type) {

        case adminConstants.USERSDETAILS_REQUEST:
            return {
                loading: true
            };
        case adminConstants.USERSDETAILS_SUCCESS:
            return {
                pusers: action.pusers,
                ploaded: true
            };
        case adminConstants.USERSDETAILS_FAILURE:
            return {
                error: action.error
            };

            
        case adminConstants.USERDETAILS_REQUEST:
            return {
                loading: true
            };
        case adminConstants.USERDETAILS_SUCCESS:
            return {
                puser: action.puser,
                ploaded: true
            };
        case adminConstants.USERDETAILS_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}

export function adminUserCampaign(state = {}, action) {
    switch (action.type) {

        case adminConstants.CAMPAIGN_GETBYUSERID_REQUEST:
            return {
                userCampaignLoading: true
            };
        case adminConstants.CAMPAIGN_GETBYUSERID_SUCCESS:
            return {
                userCampaign: action.campaigns,
                userCampaignLoaded: true
            };
        case adminConstants.CAMPAIGN_GETBYUSERID_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}
export function adminUserInvestedCampaign(state = {}, action) {
    switch (action.type) {

        case adminConstants.CAMPAIGN_INVESTED_GETBYUSERID_REQUEST:
            return {
                investedCampaignLoading: true
            };
        case adminConstants.CAMPAIGN_INVESTED_GETBYUSERID_SUCCESS:
            return {
                investedCampaign: action.campaigns,
                investedCampaignLoaded: true
            };
        case adminConstants.CAMPAIGN_INVESTED_GETBYUSERID_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}
export function adminCampaignInvester(state = {}, action) {
    switch (action.type) {

        case adminConstants.CAMPAIGN_INVESTOR_REQUEST:
            return {
                investers: true
            };
        case adminConstants.CAMPAIGN_INVESTOR_SUCCESS:
            return {
                investers: action.campaigns,
                investersLoaded: true
            };
        case adminConstants.CAMPAIGN_INVESTOR_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}
export function adminReports(state = {}, action) {
    switch (action.type) {

        case adminConstants.MONTHLYREPORT_REQUEST:
            return {
                reportdataloading: true
            };
        case adminConstants.MONTHLYREPORT_SUCCESS:
            return {
                reportdata: action.months,
                reportdataloaded: true 
            };
        case adminConstants.MONTHLYREPORT_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}