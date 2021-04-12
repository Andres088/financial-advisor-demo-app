import {SET_RISK_LEVEL} from "./types";

export const setRiskLevel = num => {
    return {
        type: SET_RISK_LEVEL,
        payload: num
    }
}