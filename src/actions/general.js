import {
    SET_INVESTMENT_AMOUNT,
    SET_INVESTMENT_PERCENTAGE,
    SET_PORTFOLIO_VIEW,
    SET_RISK_LEVEL
} from "./types";

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

export const setInvestmentAmount = (investment, amount) => {
    // stores current portfolio investment amount
    return {
        type: SET_INVESTMENT_AMOUNT,
        payload: {investment, amount}
    }
}

export const setInvestmentPercentage = (investment, percentage) => {
    // stores current portfolio investment percentage
    return {
        type: SET_INVESTMENT_PERCENTAGE,
        payload: {investment, percentage}
    }
}