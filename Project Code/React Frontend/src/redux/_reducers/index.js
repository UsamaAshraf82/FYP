import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users, userStories, registration } from './users.reducer';
import { alert } from './alert.reducer';
import { campaigns, campaignsNew, campaignsTrending,GetByCategory } from './campaigns.reducer'
import { categories, categoriesTop } from './categories.reducer';
import { adminCampaign,
    adminPCampaign,
    adminUser,
    adminUserCampaign,
    adminCampaignInvester,
    adminUserInvestedCampaign,
    adminReports } from './admin.reducer'
import {returnInvestor} from './return.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    userStories,

    campaigns,
    campaignsNew,
    campaignsTrending,
    GetByCategory,
    categories,
    categoriesTop,

    adminCampaign,
    adminPCampaign,
    adminUser,

    adminUserCampaign,
    adminUserInvestedCampaign,
    adminCampaignInvester,
    adminReports,

    returnInvestor,

    alert

});

export default rootReducer;