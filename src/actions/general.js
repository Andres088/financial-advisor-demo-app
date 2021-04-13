import {SET_PORTFOLIO_VIEW, SET_RISK_LEVEL} from "./types";

export const setRiskLevel = num => {
    return {
        type: SET_RISK_LEVEL,
        payload: num
    }
}

export const setPortfolioView = viewString => {
    return {
        type: SET_PORTFOLIO_VIEW,
        payload: viewString
    }
}