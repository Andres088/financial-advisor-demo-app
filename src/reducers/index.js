import {combineReducers} from "redux";
import {riskLevel, portfolioView, currentPortfolio} from "./general";

export default combineReducers({
    riskLevel,
    portfolioView,
    currentPortfolio
})
