import React from "react";
import {connect} from "react-redux";


const PortfolioAdvice = ({selectedRiskLevel}) => {

    return (
        <>
            <h5>{`Risk Level ${selectedRiskLevel}`}</h5>
        </>
    )
}

const mapStateToProps = ({riskLevel}) => {
    return {selectedRiskLevel: riskLevel}
}
export default connect(mapStateToProps)(PortfolioAdvice);