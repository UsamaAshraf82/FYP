import { campaignConstants } from '../_constants';

export function campaigns(state = {}, action) {
    switch (action.type) {
        case campaignConstants.CREATE_REQUEST:
            return {
                loading:true
            }
        case campaignConstants.CREATE_SUCCESS:
            return {}
        case campaignConstants.CREATE_FAILURE:
            return {}

        case campaignConstants.GETBYID_REQUEST:
            return {
                loading: true
            };
        case campaignConstants.GETBYID_SUCCESS:
            return {
                loaded: true,
                campaign: action.campaign
            };
        case campaignConstants.GETBYID_FAILURE:
            return {
                error: action.error
            };

        case campaignConstants.GETBYUSERID_REQUEST:
            return {
                loading: true
            };
        case campaignConstants.GETBYUSERID_SUCCESS:
            return {
                loaded: true,
                campaigns: action.campaigns
            };
        case campaignConstants.GETBYUSERID_FAILURE:
            return {
                error: action.error
            };

        case campaignConstants.GETINVESTEDCAMPAIGN_REQUEST:
            return {
                loading: true
            };
        case campaignConstants.GETINVESTEDCAMPAIGN_SUCCESS:
            return {
                loaded: true,
                campaigns: action.campaigns
            };
        case campaignConstants.GETINVESTEDCAMPAIGN_FAILURE:
            return {
                error: action.error
            };



        default:
            return state
    }
}

export function campaignsTrending(state = {}, action) {
    switch (action.type) {

        case campaignConstants.TRENDING_CAMPAIGN_REQUEST:
            return {
                TrendingCampaignsLoading: true
            };
        case campaignConstants.TRENDING_CAMPAIGN_SUCCESS:
            return {
                TrendingCampaignsLoaded: true,
                TrendingCampaigns: action.TrendingCampaigns
            };
        case campaignConstants.TRENDING_CAMPAIGN_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}

export function campaignsNew(state = {}, action) {
    switch (action.type) {

        case campaignConstants.NEW_CAMPAIGN_REQUEST:
            return {
                NewCampaignsLoading: true
            };
        case campaignConstants.NEW_CAMPAIGN_SUCCESS:
            return {
                NewCampaignsLoaded: true,
                NewCampaigns: action.NewCampaigns
            };
        case campaignConstants.NEW_CAMPAIGN_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}

export function GetByCategory(state = {}, action) {
    switch (action.type) {

        case campaignConstants.GETBYCATEGORY_REQUEST:
            return {
                CategoryCampaignLoading: true
            };
        case campaignConstants.GETBYCATEGORY_SUCCESS:
            return {
                CategoryCampaignLoaded: true,
                CategoryCampaign: action.Campaign
            };
        case campaignConstants.GETBYCATEGORY_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}