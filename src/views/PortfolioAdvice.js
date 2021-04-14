import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import _ from 'lodash';
import GenericTable from "../components/GenericTable";
import {portfolioData} from "../helpers/mockData";
import {setPortfolioView, setInvestmentPercentage} from "../actions/general";
import {PORTFOLIO_INFO} from "../helpers/constants";
import InputInvestment from "./containers/InputInvestment";
import RecommendedTransfers from "./containers/RecommendedTransfers";


const PortfolioAdvice = ({selectedRiskLevel, currentPortfolio, setPortfolioView, setInvestmentPercentage}) => {

    const [tableData, setTableData] = useState([]);
    const headers = ['Bonds %', 'Large Cap %', 'MidCap %', 'Foreign', 'Small Cap %'];
    const investments = ['Bonds', 'Large Cap', 'Mid Cap', 'Foreign', 'Small Cap'];
    const [calculated, setCalculated] = useState(false);
    const [reloadTransfers, setReloadTransfers] = useState(false);



    useEffect(() => {
        if (selectedRiskLevel) {
            let riskData = portfolioData.filter(e => e.risk === selectedRiskLevel)[0];
            riskData = _.omit(riskData, ['risk'])
            setTableData([riskData]);
        }
    }, [selectedRiskLevel])

    const areAmountsEdited = () => {
        let amounts = '';
        for (const investment in currentPortfolio) {
            amounts += currentPortfolio[investment].amount;
        }
        return !!amounts;
    }

    const onClickCalculate = () => {
        setInvestmentPercentages();
        setCalculated(true);
        setReloadTransfers(!reloadTransfers);
    }

    const setInvestmentPercentages = () => {
        let totalAmount = 0;
        for (const investment in currentPortfolio) {
            totalAmount += getInvestmentAmount(investment);
        }
        for (const investment of investments) {
            const amount = getInvestmentAmount(investment);
            const investmentPercentage = Math.round(amount / totalAmount * 100);
            setInvestmentPercentage(investment, investmentPercentage.toString())
        }
    }

    const getInvestmentAmount = investment => {
        const amount = currentPortfolio[investment].amount;
        return parseFloat(amount ? amount : 0);
    }

    const onClickReturn = () => {
        setPortfolioView(PORTFOLIO_INFO);
    }

    return (
        <>
            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <h5>{`Recommended distribution for Risk Level ${selectedRiskLevel}`}</h5>
                </div>
                <div className="cell shrink">
                    <button
                        type="button"
                        className={`button ${!selectedRiskLevel ? 'disabled' : ''}`}
                        onClick={onClickReturn}
                    >
                        Return
                    </button>
                </div>
            </div>
            <GenericTable
                headers={headers}
                data={tableData}
            />
            <h5 style={{marginBottom: '1rem'}}>Please enter your current Portfolio</h5>
            <table className="unstriped">
                <thead>
                <tr>
                    <th>Investment</th>
                    <th>Amount US$</th>
                    <th>Proportion %</th>
                </tr>
                </thead>
                <tbody>
                {investments.map((investment, index) => {
                    return <InputInvestment key={`inv-${index}`} investment={investment}/>
                })}
                </tbody>
            </table>
            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <h5 style={{marginTop: '0.5rem'}}>
                        {calculated? `Recommended transactions to adjust to Risk Level ${selectedRiskLevel}`: ''}
                    </h5>
                </div>
                <div className="cell shrink">
                    <button
                        type="button"
                        className={`button ${!selectedRiskLevel ? 'disabled' : ''}`}
                        onClick={onClickCalculate}
                        disabled={!areAmountsEdited()}
                    >
                        Calculate
                    </button>
                </div>
            </div>
            <RecommendedTransfers
                ready={calculated}
                reloadTransfers={reloadTransfers}
            />
        </>
    )
}

const mapStateToProps = ({riskLevel, currentPortfolio}) => {
    return {selectedRiskLevel: riskLevel, currentPortfolio}
}

const mapDispatchToProps = {
    setPortfolioView,
    setInvestmentPercentage
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioAdvice);