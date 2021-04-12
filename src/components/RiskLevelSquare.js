import React from "react";
import './RiskLevelSquare.css'
import {connect} from 'react-redux';
import {setRiskLevel} from "../actions/general";

export const RiskLevelSquare = ({squareRiskLevel, currentRiskLevel, setRiskLevel}) => {

    const selected = squareRiskLevel === currentRiskLevel;
    const selectedStyle = selected? {backgroundColor: 'LightGreen', fontWeight: 'bold'}: null;

    const onClick = () => setRiskLevel(squareRiskLevel);

    return (
        <div className="small-1 columns">
            <div className="square" onClick={onClick} style={selectedStyle}>
                {squareRiskLevel}
            </div>
        </div>
    )
}

const mapDispatchToProps = ({riskLevel}) => {
    return {currentRiskLevel: riskLevel}
}

export default connect(mapDispatchToProps, {setRiskLevel}) (RiskLevelSquare);