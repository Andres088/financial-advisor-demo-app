import React from "react";
import './RiskLevelSquare.css'
import {connect} from 'react-redux';
import {setRiskLevel} from "../actions/general";
import {Cell} from "react-foundation";

export const RiskLevelSquare = ({squareRiskLevel, currentRiskLevel, setRiskLevel}) => {

    const selected = squareRiskLevel === currentRiskLevel;
    const selectedStyle = selected? {backgroundColor: 'LightGreen', fontWeight: 'bold'}: null;

    const onClick = () => setRiskLevel(squareRiskLevel);

    return (
        <Cell small={2} large={1} style={{marginTop: '0.5rem'}}>
            <div className="square" onClick={onClick} style={selectedStyle}>
                {squareRiskLevel}
            </div>
        </Cell>
    )
}

const mapDispatchToProps = ({riskLevel}) => {
    return {currentRiskLevel: riskLevel}
}

export default connect(mapDispatchToProps, {setRiskLevel}) (RiskLevelSquare);