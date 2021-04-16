import React from "react";
import {portfolioData} from "../../../helpers/mockData";
import {connect} from 'react-redux';
import GenericTable from "../../../components/GenericTable";
import './PortfolioTable.css'

const PortfolioTable = ({selectedRiskLevel}) => {
    // Shows the general portfolio info with percentages
    // The rows ares customized to change colour based on risk selection

    const headers = ['Risk', 'Bonds %', 'Large Cap %', 'MidCap %', 'Foreign', 'Small Cap %']

    const renderCustomRow = (row, index) => {
        return (
            <tr
                key={`tr-${index}`}
                className={`${selectedRiskLevel===row.risk? 'selected-row': ''}`}
            >
                    {Object.keys(row).map((field, index) => {
                        return <td key={`td-${index}`}>{row[field]}</td>;
                    })}
            </tr>
        )
    }

    return (
        <GenericTable
            data={portfolioData}
            headers={headers}
            customRow={renderCustomRow}
        />
    )
}

const mapStateToProps = ({riskLevel}) => {
    return {selectedRiskLevel: riskLevel}
}

export default connect(mapStateToProps)(PortfolioTable);