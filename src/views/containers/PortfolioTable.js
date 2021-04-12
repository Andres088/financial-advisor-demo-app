import React from "react";
import {portfolioData} from "../../apis/mockData";
import {connect} from 'react-redux';

const PortfolioTable = ({selectedRiskLevel}) => {

    const headers = ['Risk', 'Bonds %', 'Large Cap %', 'MidCap %', 'Foreign', 'Small Cap %']

    const getStyle = rowRiskLevel => {
        if (rowRiskLevel === selectedRiskLevel) {
            return {backgroundColor: 'lightGreen'}
        } else return null;
    }

    return (
        <table>
            <thead>
            <tr>
                {headers.map((header, index) => {
                    return <th key={`th-${index}`}>{header}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {portfolioData.map((row, index) => {
                return (
                    <tr key={`tr-${index}`} style={getStyle(row.risk)}>
                        {Object.keys(row).map((field, index) => {
                            return <td key={`td-${index}`}>{row[field]}</td>;
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

const mapStateToProps = ({riskLevel}) => {
    return {selectedRiskLevel: riskLevel}
}

export default connect(mapStateToProps)(PortfolioTable);