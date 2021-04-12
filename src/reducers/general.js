import {SET_RISK_LEVEL} from "../actions/types";

export function riskLevel (state = null, action) {
    switch (action.type) {
        case SET_RISK_LEVEL:
            return action.payload;
        default:
            return state;
    }
}