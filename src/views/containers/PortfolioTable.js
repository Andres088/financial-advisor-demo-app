import React from "react";
import {portfolioData} from "../../helpers/mockData";
import {connect} from 'react-redux';
import GenericTable from "../../components/GenericTable";

const PortfolioTable = ({selectedRiskLevel}) => {

    const headers = ['Risk', 'Bonds %', 'Large Cap %', 'MidCap %', 'Foreign', 'Small Cap %']

    const getRowStyle = row => {
        if (row.risk === selectedRiskLevel) {
            return {backgroundColor: 'lightGreen'}
        } else return null;
    }

    return (
        <GenericTable
            data={portfolioData}
            headers={headers}
            rowStyle={getRowStyle}
        />
    )
}

const mapStateToProps = ({riskLevel}) => {
    return {selectedRiskLevel: riskLevel}
}

export default connect(mapStateToProps)(PortfolioTable);