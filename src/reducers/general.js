import {SET_PORTFOLIO_VIEW, SET_RISK_LEVEL} from "../actions/types";
import {PORTFOLIO_INFO} from "../helpers/constants";

export function riskLevel (state = null, action) {
    switch (action.type) {
        case SET_RISK_LEVEL:
            return action.payload;
        default:
            return state;
    }
}

export function portfolioView (state = PORTFOLIO_INFO, action) {
    switch (action.type) {
        case SET_PORTFOLIO_VIEW:
            return action.payload;
        default:
            return state;
    }
}