import {
    SET_INVESTMENT_AMOUNT,
    SET_INVESTMENT_PERCENTAGE,
    SET_PORTFOLIO_VIEW,
    SET_RISK_LEVEL
} from "../actions/types";
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

const defaultPortfolio = {
    'Bonds': {amount: '', percentage: ''},
    'Large Cap': {amount: '', percentage: ''},
    'Mid Cap': {amount: '', percentage: ''},
    'Foreign': {amount: '', percentage: ''},
    'Small Cap': {amount: '', percentage: ''},
}

export function currentPortfolio (state = defaultPortfolio, action) {
    switch (action.type) {
        case SET_INVESTMENT_AMOUNT:
            return getCurrentPortfolioWithNewAmount (action, state);
        case SET_INVESTMENT_PERCENTAGE:
            return getCurrentPortfolioWithNewPercentage (action, state);
        default:
            return state;
    }
}

function getCurrentPortfolioWithNewAmount (action, state) {
    const {investment, amount} = action.payload;
    const percentage = state[investment].percentage;
    const newState = {...state}
    newState[investment] = {amount, percentage}
    return newState;
}

function getCurrentPortfolioWithNewPercentage (action, state) {
    const {investment, percentage} = action.payload;
    const amount = state[investment].amount;
    const newState = {...state}
    newState[investment] = {amount, percentage}
    return newState;
}
